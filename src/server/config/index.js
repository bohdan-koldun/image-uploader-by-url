module.exports = {
  dbname: 'image-uploader',
  uri: 'mongodb://localhost/image-uploader',
  opts: {
    auto_reconnect: true,
    useNewUrlParser: true,
    poolSize: 40
  }
};
