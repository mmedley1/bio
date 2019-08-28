var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/michael', function(req, res, next) {
    res.render('bio', { title: 'Games',
        name: 'Michael',
        dob: 'April-4-1990',
        age: '29',
        height: '5.6',
        param: req.query});
});

module.exports = router;