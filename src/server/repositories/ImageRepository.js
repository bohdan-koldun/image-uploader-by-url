const Repository = require('./GeneralRepository');
const Image = require('../models/image');

class ImageRepository extends Repository {
  constructor() {
    super();
    this.model = Image;
  }

  getFiltered(filter, callback) {
    const { model } = this;
    const { 
      keyword, 
      minHeight, 
      maxHeight, 
      minWidth, 
      maxWidth 
    } = filter;
    
    const query = model.find({
      name: new RegExp(`(${keyword})`, 'g'),
      width: { $gte: minWidth, $lte: maxWidth },
      height: { $gte: minHeight, $lte: maxHeight }
    });
    query.exec(callback);
  }
}

module.exports = new ImageRepository();
