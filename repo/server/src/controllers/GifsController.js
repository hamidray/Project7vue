const {Gifs} = require('../models')
///const Sauce = require('../models');
//const fs = require('fs');


module.exports = {
 ///// async index (req, res) {
    //// try {
      ////   const songs = await Gif.findAll({
     ////         limit: 10
    ////      })
   ////       res.send(songs)
  ////   } catch (err) {
   ////       res.status(500).send({
    ////        error: 'An error has occured trrying to fetch '
   ///     })
  ///    }
   // },

   async post (req, res) {
      try {
          const posts = await Gifs.create(req.body)
          res.send(posts)
        } catch (err) {
          res.status(500).send({
              error: 'An error has occured trrying to create in'
          })
      }
  }
}

