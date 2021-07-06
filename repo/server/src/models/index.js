const fs = require('fs')
const path  = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
    
)

fs
.readdirSync(__dirname)
.filter((file) =>
file !== 'index.js'
)
.forEach((file) => {
   const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
   //console.log(Sequelize.DataTypes)
    ///const model = sequelize.import(path.join(__dirname, file))
      
    db.files = require("../models/image.js")(sequelize, Sequelize);

    db[model.name] = model
  })
db.sequelize = sequelize
///console.log(sequelize)
db.Sequelize = Sequelize
///console.log(Sequelize)
module.exports = db