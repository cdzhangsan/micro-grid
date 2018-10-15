var tools =require('../../utils/util');

var SqliteDB = require('../../utils/sqlite').SqliteDB;
var file = "/root/mbiot-master/cloud_data.db";
var sqliteDB = new SqliteDB(file);
var querySql = 'select * from cloud_data where device_no="lab-211" order by id desc limit 0,1';
var querySql2 = 'select * from cloud_data where device_no="lab-111" order by id desc limit 0,1';

module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            "runType":1
            // ,"soc":56
            // ,"storageVoltage":0
            // ,"storageCurrent":1
            ,"unitMaxTemperature":28
            ,"unitMinTemperature":350
            ,"unitMaxVoltage":350
            ,"unitMinVoltage":350
            ,"pileRunning":0
            ,"pileStandby":0
            ,"pileFault":0
        };
    sqliteDB.queryData(querySql2, function(objects2){
        var _d2 = objects2[0].dev_data;
        var obj2 = JSON.parse(_d2);
        nv.test2 = obj2;
        nv.data.storageVoltage = obj2["电池堆总电压"];
        nv.data.storageCurrent = obj2["电池堆总电流"];
        nv.data.unitMaxTemperature = obj2["电池堆最高温度"];
        nv.data.unitMinTemperature = obj2["电池堆最低温度"];
        nv.data.unitMaxVoltage = obj2["电池堆最高电芯电压"].toFixed(2);
        nv.data.unitMinVoltage = obj2["电池堆最低电芯电压"].toFixed(2);
        // nv.data.s_chargePower =(5*(1-obj2["电池SOC"]/100)).toFixed(2);
        nv.data.soc = obj2["电池SOC"];
        res.json(nv)
    })
    };

