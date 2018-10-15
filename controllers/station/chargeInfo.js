
module.exports=function(req, res){
        var nv={};
        nv.code = '1';
        nv.data = {
            "realTimeCharge":[0,0,0]
            ,"dayCharge":[0,0,0]
        };
        res.json(nv)
    };

