
const { model, Schema } = require('mongoose');

const imageSchema = Schema(
  {
    name: String,
    path: String,
    sourceURL: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Image = model('Image', imageSchema);

module.exports = Image;
