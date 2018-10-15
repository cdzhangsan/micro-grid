
module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            "PVtotalContentPower":1.3
            ,"storageTotalPower":5
            ,"chargeTotalPower":0
            ,"dayGeneration":1
            ,"monthGeneration":28
            ,"yearGeneration":350
            ,"totalGeneration":350
            ,"totalOnGrid":350
            ,"totalCharge":0
            ,"gridTotal":1300
            ,"micGridRate":300
            ,"CO2Reduction":1300
            ,"temperature":25
            ,"radiance":"-"
            ,"runTime":"2018-08-16"
            ,"totalCostSaving":265
            ,"GreenEnergyProp":58
            ,"m_EleSaving":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164]
            ,"m_GreenEnergy":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164]
            ,"m_Generation":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164]
            ,"m_onGrid":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164]
            ,"m_charge":[133,122,133,111,133,111,145,164,112,143,133,122,133,111,133,111,145,164]
        };
        res.json(nv)
    };

