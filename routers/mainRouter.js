
var router = function(app){
    app.post('/index',require('../controllers/index'));
};

exports.router = router;