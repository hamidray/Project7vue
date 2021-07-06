const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./models')
const config = require('./config/config')
const morgan = require('morgan')
const cors = require('cors')
///const multer = require('multer');
///const sharp = require('sharp');
///const fs = require('fs');


const gifsRoutes = require('./routes/gifsRoutes');
const app = express();
const path = require('path');

app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });  

  app.use(morgan('combined'));
  app.use(bodyParser.json());  
  app.use(cors()); 

  app.use('/images', express.static(path.join(__dirname, 'images')));
  

    require('./routes/userRoutes')(app);
    //require('./routes/gifsRoutes')(app);
  
  sequelize.sync()
  .then(() => {
      app.listen(config.port)
      console.log(`!!!Successfully server on port!!! ${config.port}`)
  })
  
   
  app.use('/addgifs', gifsRoutes)
  module.exports = app;

