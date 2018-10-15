var tools = function(){};
tools.prototype.getTime=function(){
    var obj = {};
    var myDate = new Date();
    obj.time = myDate.getHours();
    obj.date = myDate.getDate();
    return obj
}
module.exports = new tools();