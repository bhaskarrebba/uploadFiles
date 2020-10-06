var express = require('express');
var app = express();
var cors = require('cors');
var multer = require('multer');
app.use(cors());
app.use(express.static('/Users/bhaskar/Uploads'))
const port = 3008;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '/Users/bhaskar/Uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
});
var upload = multer({ storage: storage }).array('file');
app.post('/uploadFiles', function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)

 })
});
app.get('/downloadFile', (req, res) => {
   res.sendFile('/Users/bhaskar/Uploads/'+req.query.filename)
});
app.get('/', (req, res) => {
  res.send("hiiiiii")
});
app.listen(port, () => console.log(` Server listening at http://localhost:${port}`))

module.exports=app;

