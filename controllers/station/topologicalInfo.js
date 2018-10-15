
module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            "runType":1
            ,"soc":56
            ,"storageVoltage":0
            ,"storageCurrent":1
            ,"unitMaxTemperature":28
            ,"unitMinTemperature":350
            ,"unitMaxVoltage":350
            ,"unitMinVoltage":350
            ,"pileRunning":0
            ,"pileStandby":0
            ,"pileFault":0
        };
        res.json(nv)
    };

