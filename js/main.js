var url="http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=eac8544b6932cbd83bba7daa37b0fea6"


$.getJSON(url, function(data){
    var  Now = new Date(),
            StrNow = String(Now),
            nowYear = String(Now.getFullYear()),
            nowMon = String(Now.getMonth()+1),
            nowDay = String(Now.getDate());
        var week = new Array('SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY');              
        var month = new Array('JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER');
        var NowToday = month[Now.getMonth()]+"　"+nowDay+'th'+"　"+week[Now.getDay()];

    // 날씨 데이터 객체
    var sys = data.sys;             // 국가명, 일출/일몰
    var city = data.name;           // 도시명
    var weather = data.weather;     // 날씨 객체
    var main = data.main;           // 온도 기압 관련 객체
    
    var wmain = weather[0].main;    // 구름 상태(Cloudiness)
    var w_id = weather[0].id;       // 날씨 상태 id 코드
    var icon = weather[0].icon;     // 날씨 아이콘 정보
    var country = sys.country;      // 국가명
    var temp = main.temp;           // 현재 온도
    var temp_min = main.temp_min;   // 최저 온도
    var temp_max = main.temp_max;    // 최고 온도
    var wind_speed = data["wind"]["speed"]; // 풍속
    var pressure = data["main"]["pressure"] // 기압
    var humidity = main.humidity;
    var bg = weather[0].icon;
    

    // // 날씨 정보 표시
    // $('body').append( wmain + ', ' + icon + ' '
    // + '현재온도: ' + parseInt(temp-273.15) + ' '
    // + '최저온도: ' + parseInt(temp_min-273.15) + ' '
    // + '최고온도: ' + parseInt(temp_max-273.15) + ' '
    // + country + ' ' + city + ' ' + w_id + ' ' + '<br>');

    // // 날씨 아이콘 표시
    // var icon_url='http://openweathermap.org/img/w/'+icon;
    // $('body').append("<img src='" + icon_url + ".png'>");

    var icon_url='images/'+icon;
    var bg_url='images/'+bg;

    $("#weather_info .city").html(city+","+ country);
    $("#weather_info .icon").html("<img src='"+icon_url+".png'>");
    $("#weather_info .bg").html("<img src='"+bg_url+"bg.png'>");

    $("#weather_info .w_id").html(wmain);
    $("#weather_info .temp_min").html("min "+parseInt(+temp_min-273.15)+'&deg;');
    $("#weather_info .temp_max").html("max "+parseInt(temp_max-273.15)+'&deg;');
    $("#weather_info .temp").html(parseInt(temp-273.15)+'&deg;');
    $(".wind-spd").html(wind_speed+"m/s");
    $(".pressure").html(pressure + "mBar");
    $("#weather_info .humidity").html(humidity+'%');
    $('.date').html(NowToday);
});

// document.addEventListener("DOMContentLoaded", function() {   
//     realTimer();
//     setInterval(realTimer, 500);
// });
// function realTimer(){
//     var nowDate = new Date();
//     var hour = nowDate.getHours();
//     var min = nowDate.getMinutes();
//     document.getElementById("nowTimes").innerHTML = addzero(hour) + ":" + addzero(min);
// }
// function addzero(num) {
//     if(num < 10) { num = "0" + num; }
//     return num;
// }
// // 모먼트함수를 써야 모바일에서 나타남