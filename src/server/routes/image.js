const router = require('express').Router();
const imageApi = require('../services/api/image');
const imageUploader = require('../services/uploader/imageUploader');

router.get('/', (req, res, next) => {
  imageApi.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.get('/:id', (req, res, next) => {
  imageApi.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post('/', async (req, res, next) => {
  try {
    const { url } = req.body;
    const imageUploudedInfo = await imageUploader(url, 'uploads');
    imageUploudedInfo.sourceURL = url;

    imageApi.createOne(imageUploudedInfo, (data) => {
      res.data = data;
      res.json(res.data);
    });
  } catch (error) {
    res.status(400);
    res.json(error);
  }
});

module.exports = router;
