function ajax_get_data(url_str,  succ_str) {
    $.ajax({
        type: "GET",
        url: url_str,
        success: function (data) {
            try {
                succ_str(data);
            } catch (err) {
            }
        },
        async: true,
        error: function () {
            console.log('失败！');
        },//err_str,
        timeout: 4000,
        dataType: "json",
        cache: false
    });
}

function ajax_post(url_str, data_obj, succ_str) {
    $.ajax({
        type: "POST",
        url: encodeURI(url_str),
        data: data_obj,
        beforeSend: function (XMLHttpRequest) {
            loadingFun();
        },
        success: function (data) {
            try {
                succ_str(data);
            } catch (err) {
                alert(err)
            }
            loadingFunx();
        },

        async: true,
        error: function () {
            alert('保存失败！');
            loadingFunx();
        },//err_str,
        timeout: 60000,
        dataType: "json",
        cache: false
    });
}

function loadingFun() {
    var dHeight = $(document).height();
    var dWidth = $(document).width();
    $("body").append("<div id='blockui'></div>");
    $("body").append("<div id='blockui_msg'><img src='../img/wait.gif'></div>");
    $('#blockui').height(dHeight).width(dWidth).show();
    $('#blockui_msg').css({'left': (dWidth / 2 - 20)}).show();
}

function loadingFunx() {
    $('#blockui').remove();
    $('#blockui_msg').remove();
}

// 状态显示
function showState(arr, name) {
    var html = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            html += '<li class="on">';
            if (!arr[i - 1] && arr[i] || arr[i] && !arr[i + 1])
                html += '<span>' + i + '</span>';

            html += '</li>'
        } else {
            html += '<li></li>'
        }
        $('#' + name).html(html);
    }
}


// 时间显示
function CurentTime() {
    var now = new Date();

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //分
    var clock = year + "-";
    var _time =''
    if (month < 10)
        clock += "0";

    clock += month + "-";

    if (day < 10)
        clock += "0";

    clock += day + " ";

    if (hh < 10)
        clock += "0";


    _time += hh + ":";
    if (mm < 10) _time += '0';
    _time += mm ;
    // if (ss < 10) _time += '0';
    // _time += ss;
    var arr = {};
    arr.time = _time;
    arr.date = clock;
    return (arr);
}

function shwoNowTime() {
    $('.topbanner .time').html(CurentTime().time);
    $('.topbanner .date').html(CurentTime().date)
}



function myCharts(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '光伏运行实时监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },
        xAxis: {
            type: 'category',
            name: '',
            nameGap: 0.3*obj.fontSize,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: obj.unit,
            nameGap: 0.3*obj.fontSize,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        series: [
            {
                name:'光伏出力',
            data: obj.data[0],
            type: 'line',
            lineStyle: {
                width:1,
                type:obj.type[0],
                color: obj.color[0]
            },
            itemStyle: {
                opacity:0
            }
            },
            {
                name:'光伏吸纳',
                data: obj.data[1],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[1],
                    color: obj.color[1]
                },
                itemStyle: {
                    opacity:0
                }
            },
            {
                name:'总光伏装机容量',
                data: obj.data[2],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[2],
                    color: obj.color[2]
                },
                itemStyle: {
                    opacity:0
                }
            },{
                name:'光伏出力预测值',
                data: obj.data[3],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[3],
                    color: obj.color[3]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}
function myCharts2(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '储能运行实时监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },

        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: 'kW',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
        ,
            {
                type: 'value',
                name: 'kWh',
                nameGap: 10,
                nameLocation: 'end',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#026998'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#026998'
                    }
                }
            }
            ],
        series: [
            {
                name:'充能PCS',
                data: obj.data[0],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[0],
                    color: obj.color[0]
                },
                itemStyle: {
                    opacity:0
                }
            },
            {
                name:'总储存电量',
                data: obj.data[1],
                type: 'line',
                yAxisIndex:1,
                lineStyle: {
                    width:1,
                    type:obj.type[1],
                    color: obj.color[1]
                },
                itemStyle: {
                    opacity:0
                }
            },
            {
                name:'放电PCS',
                data: obj.data[2],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[2],
                    color: obj.color[2]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}

function myCharts3(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '负荷运行实时监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },

        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: 'kW',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
            ,
            {
                type: 'value',
                name: '辆',
                nameGap: 10,
                nameLocation: 'end',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#026998'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#026998'
                    }
                }
            }
        ],
        series: [
            {
                name:'充电桩kW数',
                data: obj.data[0],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[0],
                    color: obj.color[0]
                },
                itemStyle: {
                    opacity:0
                }
            },
            {
                name:'充电车辆数',
                data: obj.data[1],
                type: 'bar',
                yAxisIndex:1,
                itemStyle: {
                    color:obj.color[1]
                },
                barCategoryGap:'50%'
            },
            {
                name:'负荷kW数',
                data: obj.data[2],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[2],
                    color: obj.color[2]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}
function myCharts4(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '经济运行实时监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },
        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'RMB',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
        ,
        series: [
            {
                name:'电网分时电价',
                data: obj.data[0],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[0],
                    color: obj.color[0]
                },
                itemStyle: {
                    opacity:0
                }
            },
            {
                name:'充电平均电价',
                data: obj.data[1],
                type: 'bar',
                itemStyle: {
                    color:obj.color[1]
                },
                barCategoryGap:'20%'
            },
            {
                name:'放电平均电价',
                data: obj.data[2],
                type: 'bar',
                itemStyle: {
                    color:obj.color[2]
                },
                barCategoryGap:'20%'
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}



var mapConfig = [
    {
        "featureType": "background",
        "elementType": "all",
        "stylers": {
            "color": "#033144"
        }
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": {
            "color": "#011a28"
        }
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": {
            "color": "#89c5dd"
        }
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#022855"
        }
    },
    {
        "featureType": "highway",
        "elementType": "all",
        "stylers": {
            "color": "#05435c",
            "visibility": "on"
        }
    },
    {
        "featureType": "railway",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "subway",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry",
        "stylers": {
            "color": "#05435c",
            "visibility": "on"
        }
    },
    {
        "featureType": "local",
        "elementType": "geometry",
        "stylers": {
            "color": "#05435c",
            "visibility": "off"
        }
    }
]


function map(data) {
    var map = new BMap.Map('map', {enableMapClick:false});    // 创建Map实例
    map.centerAndZoom(new BMap.Point(104.070778, 30.654925), 12);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP
        ]
    }));
    map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.setMapStyle({
        styleJson: mapConfig
    });
    var fontsize = 1*$('html').css('fontSize').split('px')[0];
    var myIcon1 = new BMap.Icon("img/mapicon.png", new BMap.Size(30,30));
    var myIcon2 = new BMap.Icon("img/mapicon2.png", new BMap.Size(30,30));
    var pointArray = new Array();
    var tio;
    var s=0;
    addPoint();
    setInterval(function(){
        if(s<data.length-1)
            s++;
        else
            s=0;
        map.clearOverlays();
        addPoint();
    },2000)

    function addPoint(){
        for (var i = 0; i < data.length; i++) {
            var myIcon=myIcon1;
            if(i==s){
                myIcon = myIcon2
            }else{
                myIcon = myIcon1
            }
            var marker = new BMap.Marker(new BMap.Point(data[i].lng, data[i].lat),{icon:myIcon}); // 创建点
            map.addOverlay(marker);    //增加点
            pointArray[i] = new BMap.Point(data[i].lng, data[i].lat, data[i].SN);
            (function() {
                var thePoint = data[i];
                marker.addEventListener("onmouseover", function (e) {
                    tio = setTimeout(function () {
                        attribute(e, thePoint);
                    }, 500);
                })
                marker.addEventListener("click", function (e) {
                    //点击事件
                    console.log('点击事件响应了')
                })
            })();
            marker.addEventListener("onmouseout", hideAtt);
        }
    }

    //让所有点在视野范围内
    map.setViewport(pointArray);

    //获取覆盖物位置
    function attribute(e, obj) {
        var SN = obj.SN;
        console.log(SN)
        var CX = e.clientX + 10;
        var CY = e.clientY + 10;
        CY + 180 > $(window).height() ? CY = CY - 180 : CY;

        var obj = {};
        obj.sn = SN;

        $('#popWin').css({'left': CX, 'top': CY, marginTop: 0, marginLeft: 0});
        $('#popWin').show()

    }

    function hideAtt() {
        clearTimeout(tio);
        $('#popWin').hide()
    }
}


function get3Date(){
    var curDate = new Date();
    var date = new Date(curDate.getTime() - 24*60*60*1000*90);
    var dateArr=[];
    for(var i=0;i<90;i++){
        var nextDate = new Date(date.getTime() + 24*60*60*1000*i);
        var year=nextDate.getFullYear();
        var month=nextDate.getMonth()+1;
        var day = nextDate.getDate();
        month =(month<10 ? "0"+month:month);
        dateArr.push(year.toString()+'/'+month.toString()+'/'+day.toString());
    }
    return dateArr;
}

function get3MVal(){
    var num = [];
    for(var i=0;i<90;i++){
        var n = (Math.random()*100).toFixed(2);
        num.push(n)
    }
    return num;

}


function myCharts5(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '光伏运行历史数据图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },
        xAxis: {
            type: 'category',
            data: get3Date(),
            boundaryGap : false,
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        dataZoom: [{
            type: 'slider',
            handleSize: 1*obj.fontSize,
            start: 70,
            end: 100,
            height:1*obj.fontSize,
            filterMode: 'filter',
            textStyle:{
                color:'#ffffff'
            },
            borderColor:'#026998',
            bottom:1*obj.fontSize
        }],
        yAxis: {
            type: 'value',
            name: 'kWh',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
        ,
        series: [
            {
                name:'光伏日输出总量',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'20%'
            },
            {
                name:'光伏日消纳总量',
                data: obj.data[1],
                type: 'bar',
                itemStyle: {
                    color:obj.color[1]
                },
                barCategoryGap:'20%'
            },
            {
                name:'光伏日预测输出总量',

                data: obj.data[2],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[2],
                    color: obj.color[2]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}
function myCharts6(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '储能运行历史数据图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },
        xAxis: {
            type: 'category',
            data: get3Date(),
            boundaryGap : false,
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        dataZoom: [{
            type: 'slider',
            handleSize: 1*obj.fontSize,
            start: 70,
            end: 100,
            height:1*obj.fontSize,
            filterMode: 'filter',
            textStyle:{
                color:'#ffffff'
            },
            borderColor:'#026998',
            bottom:1*obj.fontSize
        }],
        yAxis: {
            type: 'value',
            name: 'kWh',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
        ,
        series: [
            {
                name:'储能每日放电总能量',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'20%'
            },
            {
                name:'光伏每日充电总能量',
                data: obj.data[1],
                type: 'bar',
                itemStyle: {
                    color:obj.color[1]
                },
                barCategoryGap:'20%'
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}

function myCharts7(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '充电桩运行历史数据图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },
        xAxis: {
            type: 'category',
            data: get3Date(),
            boundaryGap : false,
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        dataZoom: [{
            type: 'slider',
            handleSize: 1*obj.fontSize,
            start: 70,
            end: 100,
            height:1*obj.fontSize,
            filterMode: 'filter',
            textStyle:{
                color:'#ffffff'
            },
            borderColor:'#026998',
            bottom:1*obj.fontSize
        }],
        yAxis: [{
            type: 'value',
            name: 'kWh',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
            {
                type: 'value',
                name: '次',
                nameGap: 10,
                nameLocation: 'end',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#026998'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#026998'
                    }
                }
            }]
        ,
        series: [
            {
                name:'充电桩每日充电总能量',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'20%'
            },
            {
                name:'充电桩每日充电总车次',

                data: obj.data[1],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[1],
                    color: obj.color[1]
                },
                yAxisIndex:1,
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}

function myCharts8(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '经济运行历史数据图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 0.8*obj.fontSize,
            right: '10%',
            bottom: 30
        },
        xAxis: {
            type: 'category',
            data: get3Date(),
            boundaryGap : false,
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        dataZoom: [
            {
            type: 'slider',
            handleSize: 1*obj.fontSize,
            start: 70,
            end: 100,
            height:1*obj.fontSize,
            filterMode: 'filter',
            textStyle:{
                color:'#ffffff'
            },
            borderColor:'#026998',
                bottom:1*obj.fontSize
            }
        ],
        yAxis: {
            type: 'value',
            name: 'kWh',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
        ,
        series: [
            {
                name:'每天平均电价',

                data: obj.data[0],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[0],
                    color: obj.color[0]
                },
                itemStyle: {
                    opacity:0
                }
            },
            {
                name:'每天电网电费',
                data: obj.data[1],
                type: 'bar',
                itemStyle: {
                    color:obj.color[1]
                },
                barCategoryGap:'20%'
            },
            {
                name:'每天节省电费',
                data: obj.data[2],
                type: 'bar',
                itemStyle: {
                    color:obj.color[2]
                },
                barCategoryGap:'20%'
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}


function subCharts(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '实时发电功率曲线',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 1*obj.fontSize,
            right: '10%',
            bottom: 30
        },
        xAxis: {
            type: 'category',
            name: '',
            nameGap: 0.3*obj.fontSize,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: obj.unit,
            nameGap: 0.3*obj.fontSize,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        series: [
            {
                name:'实时发电功率曲线',
                data: obj.data[0],
                type: 'line',
                lineStyle: {
                    width:1,
                    type:obj.type[0],
                    color: obj.color[0]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}


function monthChart(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 1.5*obj.fontSize,
            right: '10%',
            bottom: 30
        },

        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: 'kW',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
            ,
            {
                type: 'value',
                name: 'h',
                nameGap: 10,
                nameLocation: 'end',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#026998'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#026998'
                    }
                }
            }
        ],
        series: [
            {
                name:'发电量',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'70%'
            },
            {
                name:'发电时长',
                data: obj.data[1],
                type: 'line',
                yAxisIndex:1,
                lineStyle: {
                    width:1,
                    type:obj.type[1],
                    color: obj.color[1]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}

function powerChartFun(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 1.5*obj.fontSize,
            right: '10%',
            bottom: 30
        },

        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: 'kW',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
            ,
            {
                type: 'value',
                name: 'kWh',
                nameGap: 10,
                nameLocation: 'end',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#026998'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#026998'
                    }
                }
            }
        ],
        series: [
            {
                name:'实时充电总功率',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'70%'
            },
            {
                name:'日累计充电量',
                data: obj.data[1],
                type: 'line',
                yAxisIndex:1,
                lineStyle: {
                    width:1,
                    type:obj.type[1],
                    color: obj.color[1]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}

function dischargeCurveFun(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 1.5*obj.fontSize,
            right: '10%',
            bottom: 30
        },

        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: 'kW',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
        ],
        series: [
            {
                name:'发电量',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'70%'
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}

function saveEleFun(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 1.5*obj.fontSize,
            right: '10%',
            bottom: 30
        },

        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: 'RMB',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#026998'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        }
            ,
            {
                type: 'value',
                name: 'kW',
                nameGap: 10,
                nameLocation: 'end',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#026998'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#026998'
                    }
                }
            }
        ],
        series: [
            {
                name:'月度节省电费',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'70%'
            },
            {
                name:'月度绿色用能',
                data: obj.data[1],
                type: 'line',
                yAxisIndex:1,
                lineStyle: {
                    width:1,
                    type:obj.type[1],
                    color: obj.color[1]
                },
                itemStyle: {
                    opacity:0
                }
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}

function monthlyPowerEle(obj) {
    var lineOption = {
        title: {
            show:false,
            text: '监测图',
            left:'center',
            top:0,
            textStyle:{
                color:'#11d4e7',
                fontSize:0.8*obj.fontSize
            }
        },
        grid: {
            left: '10%',
            top: 1.5*obj.fontSize,
            right: '10%',
            bottom: 30
        },

        xAxis: {
            type: 'category',
            name: '',
            nameGap: 10,
            nameLocation: 'end',
            splitLine: {
                show: false,
                color: 'yellow'
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            axisLine: {
                lineStyle: {
                    color: '#026998'
                }
            }
        },
        yAxis: [
            {
                type: 'value',
                name: 'kWh',
                nameGap: 10,
                nameLocation: 'end',
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#026998'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#026998'
                    }
                }
            }
        ],
        series: [
            {
                name:'发电量',
                data: obj.data[0],
                type: 'bar',
                itemStyle: {
                    color:obj.color[0]
                },
                barCategoryGap:'30%'
            },
            {
                name:'上网电量',
                data: obj.data[1],
                type: 'bar',
                itemStyle: {
                    color:obj.color[1]
                },
                barCategoryGap:'30%'
            },
            {
                name:'充电量',
                data: obj.data[2],
                type: 'bar',
                itemStyle: {
                    color:obj.color[2]
                },
                barCategoryGap:'30%'
            }
        ]
    };



    var myChart = echarts.init(document.getElementById(obj.id));

    myChart.setOption(lineOption);
    myChart.resize()
}