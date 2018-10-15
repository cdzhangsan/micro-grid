
var router = function(app){
    app.post('/index/real_time_data.json',require('../controllers/index/real_time_data'));
    app.post('/index/history_data.json',require('../controllers/index/history_data'));
    app.post('/index/real_station_time_data.json',require('../controllers/index/real_station_time_data'));
    app.post('/index/station_history_data.json',require('../controllers/index/station_history_data'));
    app.post('/index/stationInfo.json',require('../controllers/index/stationInfo'));
    app.post('/index/systemSurvey.json',require('../controllers/index/systemSurvey'));

    app.post('/station/chargeInfo.json',require('../controllers/station/chargeInfo'));
    app.post('/station/dPVinfo.json',require('../controllers/station/dPVinfo'));
    app.post('/station/realtimedata.json',require('../controllers/station/realtimedata'));
    app.post('/station/storageInfo.json',require('../controllers/station/storageInfo'));
    app.post('/station/topologicalInfo.json',require('../controllers/station/topologicalInfo'));
    app.post('/station/totalInfo.json',require('../controllers/station/totalInfo'));

};

exports.router = router;