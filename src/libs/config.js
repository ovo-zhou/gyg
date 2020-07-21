/**
 * 车辆预约配置文件
 */
// 本地访问ip地址和端口号
// var host = "59.69.112.30:4435"
var host ="localhost:16680"

const config = {
	host,
	hosturl: 'http://' + host,
	// 后台的的基础url
	baseurl: 'http://' + host + '/Handler/ReservationSystem/',
	login: 'WebCustomerLogin.ashx',
	updateVerifyCode: 'updateVerifyCode.ashx',
	CLYYQuery: 'VehicleResvationWebTrans.ashx'
};

module.exports = config;