///const multer = require('./middleware/multer-config');

///const multer = require("multer")
const AuthenticationController = require('../controllers/AuthenticationController')
////const GifsController = require('./controllers/GifsController')

module.exports = (app) => {
  app.post('/register', 
    AuthenticationController.register),
 
  app.post('/login', 
  AuthenticationController.login)

  ///app.get('/addgifs',
  /// GifsController.index)

  
   ///app.post('/addgifs',
   ///GifsController.post)

///////////Images////////////////////////

///const upload = multer({
  //dest: "./images/"
//})
   
  
   //app.post("/addgifs", send.single("file"), (req, res) => {
    // res.json({ file: req.file })
  // })


}
