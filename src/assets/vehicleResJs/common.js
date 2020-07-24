 //日期转换为字符串
 export function dateToString(now) {
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString();
    var day = now.getDate().toString();
    var hour = now.getHours().toString();
    var minute = now.getMinutes().toString();
    var second = now.getSeconds().toString();
    if (month.length == 1) {
      month = "0" + month;
    }
    if (day.length == 1) {
      day = "0" + day;
    }
    if (hour.length == 1) {
      hour = "0" + hour;
    }
    if (minute.length == 1) {
      minute = "0" + minute;
    }
    if (second.length == 1) {
      second = "0" + second;
    }
    var dateTime =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hour +
      ":" +
      minute +
      ":" +
      second;
    return dateTime;
  }
  export function formatDate(date) {

    var y = date.getFullYear();
    
    var m = date.getMonth() + 1;
    
    m = m < 10 ? '0' + m : m;
    
    var d = date.getDate();
    
    d = d < 10 ? ('0' + d) : d;
    
    return y + '/' + m + '/' + d;
    }