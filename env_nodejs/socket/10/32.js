//设置：调控内部参数表：[1/参数编号]，[1/调控系数序号]，[4/调控值]


var tool = require('../../lib/tool');

var status = ['成功', '失败'];

exports.addData = function (data,callback) {

    var json = {};
    try {
        json.instruct = data.instruct;
        json.sensor_no = data.sensor_no;
        json.ip_port = data.ip_port;
        json.status = 3;
        json.feedback_time = parseInt(data.time/1000);
        json.raw_data = data.raw_data;
        
        json.feedback_data = {状态: status[data.data_buf[1]]};

    } catch (e) {
        console.error(e);
    }

    //console.log(json);

    require('./index').feedback_save(json,callback);

};
