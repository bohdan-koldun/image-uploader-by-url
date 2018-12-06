const router = require('express').Router();
const imageApi = require('../services/api/image');
const imageUploader = require('../services/uploader/imageUploader');

router.get('/', async (req, res, next) => {
  try {
    await imageApi.findAll((err, data) => {
      res.data = data;
      res.json(res.data);
    });
  } catch (error) {
    res.status(400);
    res.data = error;
    res.json(res.data);
  }
});

router.get('/:id', async (req, res, next) => {
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
  const { url } = req.body;
  
  try {
    const imageUploudedInfo = await imageUploader(url, 'uploads');
    imageUploudedInfo.sourceURL = url;

    imageApi.createOne(imageUploudedInfo, (err, data) => {
      res.data = data;
      res.json(res.data);
    });
  } catch (error) {
    res.status(400);
    res.json(url);
  }
});

module.exports = router;
