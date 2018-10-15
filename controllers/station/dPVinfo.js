var tools =require('../../utils/util');

var SqliteDB = require('../../utils/sqlite').SqliteDB;
var file = "/root/mbiot-master/cloud_data.db";
var sqliteDB = new SqliteDB(file);

var nt = tools.getTime().time;
var nD= tools.getTime().date;
function valT(data){
    var ndata=[];
    for(var i=0;i<nt;i++){
        ndata[i] = data[i];
    }
    return ndata;
}
function valD(data){
    var ndata=[];
    for(var i=0;i<nD;i++){
        ndata[i] = data[i];
    }
    return ndata;
}

var querySql = 'select * from cloud_data where device_no="lab-211" order by id desc limit 0,1';




module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            // "todayGeneratingcapacity":1300
            // ,"totalPower":1240
            // ,"totalPowerGeneration":34523
            // ,"generationHours":12500
            // "CO2Reduction":34523
            // ,"state":1
            "realTimePower":valT([0,0,0,0,0,0,0.1,0.2,0.3,0.3,0.8,0.8,0.8,0.9,1,1,0.7,0.7,0.4,0.4,0.2,0,0,0])
            ,"dayGeneration":valD([8.6,8.7,8.6,8,9,9,8,8,9,9,9,10,8,6,7,8,8,10,8,6,7,8,8,9,10,8,6,7,8,8])
            ,"dayGenerationHours":valD([12,13,13,11,13,8,8,7,7,7,7,7,6,6,6,8,8,8,12,13,13,11,13,8,8,7,7,7,7])
            ,"test":nD
            ,"test2":nt
        };
        sqliteDB.queryData(querySql, function(objects){
            var _d = objects[0].dev_data;

            var obj = JSON.parse(_d);
            nv.test = obj;
            nv.data.todayGeneratingcapacity = obj["今日发电量L"];
            nv.data.totalPower = (obj["输出功率L"]/1000).toFixed(4);
            nv.data.totalPowerGeneration = obj["最近一年发电量L"];
            nv.data.generationHours = parseInt(obj["总工作时间H"]*obj["总工作时间L"]/2/3600);
            nv.data.CO2Reduction = obj["最近一年发电量L"]*0.997;
            nv.data.state = obj["逆变器运行状态"];
            res.json(nv)
        });


    };

