// var baseUrl = "http://localhost:55743/"//本机
var baseUrl = "http://172.16.199.97:9474/"//实验室
// var baseUrl = "http://172.18.1.196:9474/"//现场
var host1 = baseUrl + "Handler/WebSpace/QXGL/";
var host2 = baseUrl + "Handler/WebSpace/News/";
var host3 = baseUrl + "Handler/WebSpace/YWLC/";
var host4 = baseUrl + "Handler/WebSpace/Home/";
var host5 = baseUrl + "Handler/WebSpace/GKYW/";

/*车辆预约后台*/
var vehicleUrl = "http://172.16.199.97:8099/"//实验室
// var vehicleUrl = "http://localhost:16680/"//本机

var host6 = vehicleUrl + "Handler/ReservationSystem/"
export default { host1, host2, host3, host4, host5, host6 }
