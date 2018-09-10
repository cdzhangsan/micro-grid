
module.exports=function(req, res){
        console.log(req.query.id)   //get的参数获取
        var nv={};
        nv.ret = '1';
        nv.data = {
            stationList:[
                {
                    "lng": 104.057237,
                    "lat": 30.627518,
                    "SN": "TS023323D1"
                },
                {
                    "lng": 104.053895,
                    "lat": 30.620787,
                    "SN": "TS022923D2"
                },
                {
                    "lng": 115.056126,
                    "lat": 30.621938,
                    "SN": "TS023443D3"
                },
                {
                    "lng": 114.05326,
                    "lat": 30.615782,
                    "SN": "TS023953D4"
                },
                {
                    "lng": 104.059239,
                    "lat": 33.616759,
                    "SN": "TS023222D5"
                },
                {
                    "lng": 104.057185,
                    "lat": 35.629123,
                    "SN": "TS023933DF"
                }
            ]
        }
        res.json(nv)
    }

