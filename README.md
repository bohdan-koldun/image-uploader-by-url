# Image uploader by url

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/OBgXCNvINuU/0.jpg)](http://www.youtube.com/watch?v=OBgXCNvINuU)

## Supported file types
* jpg
* png
* gif

## Quick Start

```bash
# Clone the repository
git clone https://github.com/bohdan-koldun/image-uploader-by-url.git

# Go inside the directory
cd image-uploader-by-url

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

### MongoDB config
Should work automatically with the project, if there are no conflicts

#### /src/server/config/index.js
```javascript
module.exports = {
  dbname: 'image-uploader',
  uri: 'mongodb://localhost/image-uploader',
  opts: {
    auto_reconnect: true,
    useNewUrlParser: true,
    poolSize: 40
  }
};
```
