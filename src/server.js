var express = require('express');
var app = new express();
var cors = require('cors');
app.use(cors);
const port = 8080;

// app.get('/', (req, res) => res.send('Hello World!'))
// app.post('/uploadFiles', function (req, res) {

//     upload(req, res, function (err) {
//         return res.status(200).send(req.file)
//     })
// });
app.listen(port, () => console.log(` app listening at http://localhost:${port}`))