console.log('Connected to MySql Server')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const path = require('path');

const app = express()

//const sauceRoutes = require('./routes/sauce');
///const userRoutes = require('./middleware/multer-config');
const userRoutes = require('./routes');
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(morgan('combined'))
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({
 //extended: true
///}));

app.use(cors())

require('./routes')(app)


app.use('image', express.static(path.join(__dirname, 'image')));
app.use('./middleware', userRoutes)
//app.use('../sauces', sauceRoutes)

sequelize.sync()
.then(() => {
    app.listen(config.port)
    console.log(`server start on port ${config.port}`)
}) 

module.exports = app