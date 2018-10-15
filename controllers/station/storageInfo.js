var tools =require('../../utils/util');
var nt = tools.getTime().time;
var nD= tools.getTime().date;


var SqliteDB = require('../../utils/sqlite').SqliteDB;
var file = "/root/mbiot-master/cloud_data.db";
var sqliteDB = new SqliteDB(file);
var querySql = 'select * from cloud_data where device_no="lab-211" order by id desc limit 0,1';
var querySql2 = 'select * from cloud_data where device_no="lab-111" order by id desc limit 0,1';

module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            // "s_realTimePower":1300
            // ,"s_chargePower":124
            // ,"s_dischargePower":523
            // ,"s_soc":56
            "s_soh":98
            ,"dayTotalcharge":(1.2/24*nt).toFixed(2)
            ,"totalCostSaving":0
            ,"dayRealTimePower":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164]
            ,"monthdisCharge":[1.1,1.2,1,1,1,1,1,0.9,0.9,0.9,1.1,1.2,1,1,1,1,1,0.9,0.9,0.9,1.1,1.2,1,1,1,1,1,0.9,0.9,0.9]
        };
        sqliteDB.queryData(querySql2, function(objects2){
        var _d2 = objects2[0].dev_data;
        var obj2 = JSON.parse(_d2);
        nv.test2 = obj2;
        nv.data.s_realTimePower = (obj2["取电功率"]/1000).toFixed(3);
        nv.data.s_chargePower =(5*(1-obj2["电池SOC"]/100)).toFixed(2);
        nv.data.s_dischargePower =(5*obj2["电池SOC"]/100).toFixed(2);
        nv.data.s_soc = obj2["电池SOC"];
        res.json(nv)
    })
};

