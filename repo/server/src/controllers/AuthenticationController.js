const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
///const  {token}  = require('morgan')

/////////////////////// JWT Function ////////////////////

function jwtSignUser (user) {
 const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

///////////////////// Register Function ///////////////////

   module.exports = {
    async register (req, res) {
      try {
            const user = await User.create(req.body) 
         res.send(user.toJSON())
       
        } catch (err) {
            res.status(400).send({
             error: 'This email account is already in use.'
           })
       }
    },
/////////////////////// Login Function /////////////////////

    async login (req, res) {
       try {
           const {email, password} = req.body
          const user = await User.findOne({
              where: {
                  email: email
              }
            })
           if (!user) {
                return res.status(403).send({
                   error: 'The email & login information was incorrect'
              })
          }
              const isPasswordValid = await user.comparePassword(password)
            console.log(password, user.password)
             console.log(isPasswordValid)
                  if(!isPasswordValid) {
                   return  res.status(403).send({
                         error: 'The password information was incorrect'
                      })
                 }
             const userJson = user.toJSON()
          res.send({
            user: userJson,
              token: jwtSignUser(userJson),
        })
            
      } catch (err) {
          res.status(500).send({
             error:'Server Issue'
        })
      }
   }
}
