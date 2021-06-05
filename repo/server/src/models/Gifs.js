
module.exports = (sequelize, DataTypes) => {
const Gif = sequelize.define('Gif', {
   imageUrl: DataTypes.STRING,
   title: DataTypes.STRING
})
   
   return Gif

}
