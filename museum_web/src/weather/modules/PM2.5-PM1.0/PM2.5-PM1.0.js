//获取参数单位名称
var param_unit_name = window.web_config.param_unit_name.weather;

module.exports={
	template:'#PM2.5-PM1.0',
	data:function(){
		return {
			default_option:null,
			myChart:null
		}
	},
	ready:function(){

			this.default_option=create_chart();
			this.myChart=echarts.init($('#PM')[0]);
			this.myChart.setOption(this.default_option);
			var vm=this;
			
			$(window).resize(function(){
				vm.myChart.resize();
			});

	},
	methods:{
		local:function(data){
			localEcharts.call(this,data);
		},
		online:function(data){

		}
	},
	events:{
		Pm:function(data,from){
			if(from==='local'){
				this.local(data);
			}else{
				this.online(data);
			}
		}
	}
};

function localEcharts(data){
	var yAxis=[],series=[],key=0,position='left';

	for(var i in data){
		if(key!=0){
	        position='right'
	    }
		series.push({
            showSymbol: false,
            smooth: true,
			data:data[i],
			name:i,
			type:'line',
			yAxisIndex:key
		});
		yAxis.push({
			min:'dataMin',
			name:param_unit_name[i].name+'\n('+param_unit_name[i].unit+')',
			type:'value',
			position:position,
			offset:(key!=0)?50*(key-1):0,
			splitLine:{show:(key!=0)?false:true}
		});

		key++;
	}

	this.myChart.setOption({
		series:series,
		yAxis:yAxis
	});
}

function timeFormat(time){
	var timeStr = '',
		date = null;
	if(time){
		date = new Date(time);
		timeStr += appendZero(date.getHours())+':'+appendZero(date.getMinutes())+' '+ appendZero(date.getMonth()+1)+'月' + appendZero(date.getDate())+'日';
	}
	return timeStr||'--:-- XX月XX日';
}

function appendZero(val){
	if(val<10){
		return '0'+val;
	}
	return val;
}

function create_chart() {
    return {
    	title:{
    		text:'PM2.5-PM1.0趋势图'
    	},
        tooltip: {
			trigger: 'axis',
			formatter:function(params){
				// console.log(params);
				var showStr = '';
				if(params&&params.length!==0){
					for(var i=0,len=params.length;i<len;i++){
						if(params[i]&&params[i].data){
							showStr += timeFormat(params[i].data[0])+'<br />';
							break;
						}else{
							continue;
						}
					}
					
					params.forEach(function(point,index){
						showStr += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+ point.color +'"></span>'+ param_unit_name[point.seriesName].name + ' : ' + ((point&&point.data&&point.data[1])?(point.data[1]):' - ') + param_unit_name[point.seriesName].unit + '<br />';
					});
				}
				return showStr;
			}
        },
        legend: {
            show: false
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                xAxisIndex: [0]
            },
            {
                type: 'inside',
                realtime: true,
                xAxisIndex: [0]
            }
        ],
        grid: {
            left: 50,
            right: 100,
            top: '30%',
            bottom: '17%'
        },
        xAxis: {
            show: false,
            type: 'time',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: "#9fa6ac",
                    fontFamily: "微软雅黑"
                }
            }
        },
        yAxis: {},
        series: []
    };
}