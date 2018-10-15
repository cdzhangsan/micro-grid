
module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            "nPVoutput":125
            ,"nPilePower":0
            ,"nTotalStorage":322
            ,"nPVAbsorb":0
            ,"nChargeCarNum":0
            ,"nStorageCharge":2341
            ,"nTotalStation":1
            ,"nNormalStation":1
            ,"nAlarmStation":0
            ,"nFaultStation":0
            ,"nStorageDischarge":34
        };
        res.json(nv)
    };

