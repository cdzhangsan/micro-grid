var SqliteDB = require('../../utils/sqlite').SqliteDB;
var file = "/root/mbiot-master/cloud_data.db";
var sqliteDB = new SqliteDB(file);
var querySql = 'select * from cloud_data where device_no="lab-211" order by id desc limit 0,1';
var querySql2 = 'select * from cloud_data where device_no="lab-111" order by id desc limit 0,1';


module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            // "s_pvPower":125
            "s_chargePower":0
            // ,"s_storagePower":125
            // ,"s_nPVoutput":125
            ,"s_nPVAbsorb":0
            ,"s_nChargePower":0
            ,"s_nChargeCarNum":0
            // ,"s_storagePCS":125
            // ,"s_soc":125
            // ,"s_inPower":125
        };
    sqliteDB.queryData(querySql, function(objects){
        var _d = objects[0].dev_data;
        var obj = JSON.parse(_d);
        nv.test = obj;
        nv.data.s_pvPower = (obj["输出功率L"]/1000).toFixed(3);
        nv.data.s_nPVoutput = (obj["输出功率L"]/1000).toFixed(3);
        // nv.data.totalPowerGeneration = obj["最近一年发电量L"];
        // nv.data.generationHours = parseInt(obj["总工作时间H"]*obj["总工作时间L"]/2/3600);
        // nv.data.CO2Reduction = obj["最近一年发电量L"]*0.997;
        // nv.data.state = obj["逆变器运行状态"];

        sqliteDB.queryData(querySql2, function(objects2){
            var _d2 = objects2[0].dev_data;
            var obj2 = JSON.parse(_d2);
            nv.test2 = obj2;
            nv.data.s_storagePower = (obj2["取电功率"]/1000).toFixed(3);
            nv.data.s_storagePCS = (obj2["取电功率"]/1000).toFixed(3);
            nv.data.s_soc = obj2["电池SOC"];
            nv.data.s_inPower = (obj2["电网功率"]/1000).toFixed(3);
            res.json(nv)
        })


    });
    };

