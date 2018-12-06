const ImageRepository = require('../../repositories/ImageRepository');

module.exports = {
  findAll: (callback) => {
    ImageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findByFilter: (filter, callback) => {
    ImageRepository.getFiltered(filter, (err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    ImageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  createOne: (newImage, callback) => {
    ImageRepository.saveNew(newImage, (err, data) => {
      callback(err, data);
    });
  }
};