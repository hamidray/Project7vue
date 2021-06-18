
///const multer = require('./middleware/multer-config');

///const multer = require("multer")
const AuthenticationController = require('./controllers/AuthenticationController')
const GifsController = require('./controllers/GifsController')

module.exports = (app) => {
  app.post('/register', 
    AuthenticationController.register)
 
  app.post('/login', 
  AuthenticationController.login)

  ///app.get('/addgifs',
  /// GifsController.index)

  
   app.post('/addgifs',
   GifsController.post)

///////////Images////////////////////////

///const upload = multer({
  //dest: "./images/"
//})
   
  
   //app.post("/addgifs", send.single("file"), (req, res) => {
    // res.json({ file: req.file })
  // })



  ///const fileFilter = function(req, file, cb) {
  ///const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
     
 ///  if(!allowedTypes.includes(file.mimetype)) {
 /// const error = new Error("Wrong file type");
   ///   error.code = "LIMIT_FILE_TYPES";
   ///   return cb(error, false);
  ///  }
  
   // cb(null, true);
 // };
    
  /// const MAX_SIZE = 200000;
   //const upload = multer({
  /// dest: "./uploads/",
    ///fileFilter,
   // limits: {
    // fieldSize: MAX_SIZE
      
   /// }
    
 /// });
   
  ///app.post("/upload", upload.single("file"), (req, res) => {
    // res.json({ file: req.file })
     
  ///});

  //app.use(function(err, req, res, next)  {
   ///  if (err.code === "LIMIT_FILE_TYPES") {
   ///  res.status(422).json({ error: "Only images are allowed"});
    //   return;
  ///   }

   /// if (err.code === "LIMIT_FILE_SIZE") {
  ///   res.status(422).json({ error: `Too large. Max size is ${MAX_SIZE /1000}kb`});
  ///   return;
   //  }

 /// }); 
     
}