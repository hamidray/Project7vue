const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');
const gifsCtrl = require('../controllers/gifs');

const storage = multer.diskStorage({
destination: './images', 
filename: (req, file, cb) => {
  return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({
  storage: storage 
})

router.post('/', upload.single('file') , gifsCtrl.uploadFile);
//router.put('/ :id',  multer, gifsCtrl.modifyImage);
///router.get('/', gifsCtrl.getAllGifs);  
//router.get('/:id',  gifsCtrl.getOneGifs);
//router.delete('/:id',  gifsCtrl.deleteGifs);
//router.post('/:id/like', gifsCtrl.likeOrDislikeGifs);

module.exports = router;

	