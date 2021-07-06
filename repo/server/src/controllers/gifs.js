const db = require('../models/index.js');
const Image = db.files;

exports.uploadFile = (req, res) => {
  console.log(req.file);
  if (req.file == undefined) {
    return res.send(`You must select a file.`);
  }
  Image.create({
    type: req.file.mimetype,
    name: req.file.originalname,
    data: req.file.buffer,
    comment: req.body.comment
  }).then(() => {
    res.json({msg:'File uploaded successfully! -> filename = ' + req.file.originalname + req.body.comment});
  }).catch(err => {
    console.log(err);
    res.json({msg: 'Error', detail: err});
  });
}
