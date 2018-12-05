const router = require('express').Router();
const messageService = require('../services/api/image');

router.get('/', (req, res, next) => {
  messageService.findAll((err, data) => {
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
  messageService.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post('/', (req, res, next) => {
  const newImage = req.body;

  messageService.createOne(newImage, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;
