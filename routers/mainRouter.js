var router = function(app){
    app.get('/index', function(req, res){
        res.redirect('../controllers/index.js');
    });


};

exports.router = router;