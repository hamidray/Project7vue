
module.exports = (sequelize, DataTypes) => {
   const Gifs = sequelize.define('Gifs', {
     userId: DataTypes.STRING, 
     author: DataTypes.STRING,
     title: DataTypes.STRING,
     
   })
      
      return Gifs
   
   }
