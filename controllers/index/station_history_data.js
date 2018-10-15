
module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            "PVdayOutput":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164,112,143,123,123,111,154,112,143,123,123,111,154,133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164,112,143,123,123,111,154,112,143,123,123,111,154,133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164,112,143,123,123,111,154,112,143,123,123,111,154],
            "PVdayAbsorb":[93,92,93,91,93,91,95,94,99,83,83,84,92,81,93,81,95,84,82,83,83,83,81,84,82,83,83,83,81,84,93,92,93,91,93,91,95,94,99,83,83,84,92,81,93,81,95,84,82,83,83,83,81,84,82,83,83,83,81,84,93,92,93,91,93,91,95,94,99,83,83,84,92,81,93,81,95,84,82,83,83,83,81,84,82,83,83,83,81,84],
            "PVdayPreOutput":[55,44,22,54,33,11,45,64,12,43,33,22,33,11,33,11,45,64,12,43,23,23,11,54,12,43,23,23,11,54,55,44,22,54,33,11,45,64,12,43,33,22,33,11,33,11,45,64,12,43,23,23,11,54,12,43,23,23,11,54,55,44,22,54,33,11,45,64,12,43,33,22,33,11,33,11,45,64,12,43,23,23,11,54,12,43,23,23,11,54],
            "storageDayDischarge":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164,112,143,123,123,111,154,112,143,123,123,111,154,133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164,112,143,123,123,111,154,112,143,123,123,111,154,133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164,112,143,123,123,111,154,112,143,123,123,111,154],
            "PVdayCharge":[93,92,93,91,93,91,95,94,99,83,83,84,92,81,93,81,95,84,82,83,83,83,81,84,82,83,83,83,81,84,93,92,93,91,93,91,95,94,99,83,83,84,92,81,93,81,95,84,82,83,83,83,81,84,82,83,83,83,81,84,93,92,93,91,93,91,95,94,99,83,83,84,92,81,93,81,95,84,82,83,83,83,81,84,82,83,83,83,81,84],
            "pileDayCharge":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "pileDayCarNum":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "dayAvgElePrice":[0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344,0.6344],
            "gridDayAvgElePrice":[0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7344,0.7711,0.7711,0.7711,0.7711,0.7711,0.7711,0.7711,0.7711],
            "daySaveElePrice":[0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05]
            ,"hPVoutput":130000
            ,"hPileCharge":0
            ,"hTotalStorage":2234523
            ,"hPVAbsorb":125000
            ,"hChargeCarNum":0
            ,"economicEffect":23435
        };
        res.json(nv)
    };
