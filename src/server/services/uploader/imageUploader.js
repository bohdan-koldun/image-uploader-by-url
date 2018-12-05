
const sharp = require('sharp');
const download = require('download');
const fileType = require('file-type');

const suportedExt = ['jpg', 'png', 'gif'];

module.exports = async (url, localPath) => {
  const imageInfo = {};

  await download(url).then(async (buffer) => {
    const type = fileType(buffer);
    if (suportedExt.includes(type.ext)) {
      imageInfo.name = url.split('/').pop();
      imageInfo.path = `${localPath}/${imageInfo.name}`;
      const uploadedInfo = await sharp(buffer).webp({ quality: 80 }).toFile(imageInfo.path);
      imageInfo.size = uploadedInfo.size;
      imageInfo.width = uploadedInfo.width;
      imageInfo.height = uploadedInfo.height;
    } else {
      throw new Error('File is notlocalPath image!');
    }
  });

  return imageInfo;
};
