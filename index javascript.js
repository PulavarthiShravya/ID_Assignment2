//get JSON

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&APPID=230b9a9b3e25404d3697151f242e0ded", function(data){
    console.log(data);


    //display icon
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    //display temperature
    var temp = Math.floor(data.main.temp);

    //display weather description
    var weather = data.weather[0].main;

    //adding icon in html page
    $('.icon').attr('src', icon);

    //adding temp in html page
    $('.temp').append(temp + ' \u00B0 Celsius');

    //adding weather in html page
    $('.weather').append(weather);

});