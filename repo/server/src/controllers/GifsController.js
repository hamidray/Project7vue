const {Gif} = require('../models')
///const Sauce = require('../models');
//const fs = require('fs');


module.exports = {
  //async index (req, res) {
    ///   try {
       ///   const gifs = await Gifs.findAll({
          ///     limit: 10
           //})
          ///res.send(gifs)
       ///} catch (err) {
          /// res.status(500).send({
            /// error: 'An error has occured trrying to fetch '
         //})
      // }
    //},

    async post (req, res) {
        try {
            const gag = await Gif.create(req.body)
            res.send(gag)
            console.log(gag)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trrying to create in'
            })
        }
    }
}

