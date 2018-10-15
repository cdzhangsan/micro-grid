var SqliteDB = require('./sqlite.js').SqliteDB;
var file = "/root/mbiot-master/cloud_data.db";
var sqliteDB = new SqliteDB(file);

/// query data.

var querySql = 'select * from cloud_data where device_no="lab-211" order by id desc limit 0,1';
sqliteDB.queryData(querySql, dataDeal);



function dataDeal(objects){

    for(var i = 0; i < objects.length; ++i){

        console.log(objects[i]);

    }

}
