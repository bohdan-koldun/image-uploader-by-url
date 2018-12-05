const Repository = require('./GeneralRepository');
const Image = require('../models/image');

class ImageRepository extends Repository {
  constructor() {
    super();
    this.model = Image;
  }
}

module.exports = new ImageRepository();
