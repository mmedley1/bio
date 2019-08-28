var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gameStop', function(req, res, next) {
    res.render('games', { title: 'Games',
        name: 'Playstation',
        gamer: 'Drake',
        rate: 'Mature',
        Tv: 'GameIGN',
        param: req.query});
});

module.exports = router;