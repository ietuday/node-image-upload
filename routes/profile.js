var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
        console.log("Description :", file.fieldname + '.jpg');
    }
});

var upload = multer({ storage: storage }).single('keyImage');


router.post('/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log("Image not Uploaded : ",err);
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });

        // Everything went fine
    })
});


module.exports = router;
