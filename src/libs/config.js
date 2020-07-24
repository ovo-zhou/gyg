/**
 * 车辆预约配置文件
 */
// 本地访问ip地址和端口号
var host ="localhost:55743"//本地
// var host = "172.16.199.97:9474"//实验室
// var host = "172.18.1.196:9100"//现场
const config = {
	host,
	hosturl: 'http://' + host,
	// 后台的的基础url
	baseurl: 'http://' + host + '/Handler/WebSpace/vehicleReservation/',
	CLYYQuery: 'CLYYQuery.ashx'
};

module.exports = config;