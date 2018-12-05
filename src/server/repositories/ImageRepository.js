const Repository = require('./GeneralRepository');
const Image = require('../models/image');

function ImageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Image;
}

ImageRepository.prototype = new Repository();

module.exports = new ImageRepository();
