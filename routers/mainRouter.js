var router = function(app){
    app.get('/index', function(req, res){
        res.render('../controllers/index.js');
    });


};

exports.router = router;