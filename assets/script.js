// 2f4eb09e1b8c0083f85774b9151d10e5 API key
var fetchBtn = document.getElementById('fetchBtn')
var citySearch = document.getElementById('cityInput')
var mainName = document.getElementById('cityName')
var mainTemp = document.getElementById('temp')
var mainHum = document.getElementById('humidity')
var mainWind = document.getElementById('wind')
var mainUV = document.getElementById('uv')
var mainIcon = document.getElementById('icon')


var mainTemp = document.getElementById('temp')
var mainHum = document.getElementById('humidity')
var mainWind = document.getElementById('wind')
var mainUV = document.getElementById('uv')
var mainIcon = document.getElementById('icon')
var mainTemp = document.getElementById('temp')
var mainHum = document.getElementById('humidity')
var mainWind = document.getElementById('wind')
var mainUV = document.getElementById('uv')
var mainIcon = document.getElementById('icon')
var mainTemp = document.getElementById('temp')
var mainHum = document.getElementById('humidity')
var mainWind = document.getElementById('wind')
var mainUV = document.getElementById('uv')
var mainIcon = document.getElementById('icon')
var mainTemp = document.getElementById('temp')
var mainHum = document.getElementById('humidity')
var mainWind = document.getElementById('wind')
var mainUV = document.getElementById('uv')
var mainIcon = document.getElementById('icon')

// gets current weather data
function getWeather() {

  var requestWeather = 'http://api.openweathermap.org/data/2.5/weather?q=' + citySearch.value + '&appid=2f4eb09e1b8c0083f85774b9151d10e5&units=imperial';

  fetch(requestWeather)
    .then(function (response) {
      // console.log(response)
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      var mainCityVal = data['name'];
      var mainWindVal = data['wind']['speed'];
      var mainHumVal = data['main']['humidity'];
      var mainTempval = data['main']['temp'];
      var mainIconVal = data['weather'][0]['icon'];
      // console.log(mainCityVal)

      mainName.innerHTML = mainCityVal;
      mainWind.innerHTML = 'Wind Speed: ' + mainWindVal;
      mainHum.innerHTML = 'Humidity: ' + mainHumVal;
      mainTemp.innerHTML = 'Temperature: ' + mainTempval;
      mainIcon.src = "http://openweathermap.org/img/w/" + mainIconVal + ".png";
    })
};

// gets weather info for the next 5 days
function fivedayWeather() {

  var requestWeather = 'http://api.openweathermap.org/data/2.5/forecast?q=' + citySearch.value + '&appid=2f4eb09e1b8c0083f85774b9151d10e5&units=imperial';

  fetch(requestWeather)
    .then(function (response) {
      // console.log(response)
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // stores data in box 1 for 5 day forecast
      var temp1 = document.getElementById('temp1').innerHTML = 'Temp: ' + data['list'][0]['main']['temp'];
      var hum1 = document.getElementById('humidity1').innerHTML = 'Humidity: ' + data['list'][0]['main']['humidity'];
      var wind1 = document.getElementById('wind1').innerHTML = 'Wind Speed: ' + data['list'][0]['wind']['speed'];
      var date1 = document.getElementById('date1').innerHTML = data['list'][0]['dt_txt'];
      var icon1 = document.getElementById('icon1').src = "http://openweathermap.org/img/w/" + data['list'][0]['weather'][0]['icon'] + ".png";

      // stores data in box 2 for 5 day forecast
      var temp2 = document.getElementById('temp2').innerHTML = 'Temp: ' + data['list'][1]['main']['temp'];
      var hum2 = document.getElementById('humidity2').innerHTML = 'Humidity: ' + data['list'][1]['main']['humidity'];
      var wind2 = document.getElementById('wind2').innerHTML = 'Wind Speed: ' + data['list'][1]['wind']['speed'];
      var date2 = document.getElementById('date2').innerHTML = data['list'][0]['dt_txt'];
      var icon2 = document.getElementById('icon2').src = "http://openweathermap.org/img/w/" + data['list'][1]['weather'][0]['icon'] + ".png";

      // stores data in box 3 for 5 day forecast
      var temp3 = document.getElementById('temp3').innerHTML = 'Temp: ' + data['list'][2]['main']['temp'];
      var hum3 = document.getElementById('humidity3').innerHTML = 'Humidity: ' + data['list'][2]['main']['humidity'];
      var wind3 = document.getElementById('wind3').innerHTML = 'Wind Speed: ' + data['list'][2]['wind']['speed'];
      var date3 = document.getElementById('date3').innerHTML = data['list'][0]['dt_txt'];
      var icon3 = document.getElementById('icon3').src = "http://openweathermap.org/img/w/" + data['list'][2]['weather'][0]['icon'] + ".png";

      // stores data in box 4 for 5 day forecast
      var temp4 = document.getElementById('temp4').innerHTML = 'Temp: ' + data['list'][3]['main']['temp'];
      var hum4 = document.getElementById('humidity4').innerHTML = 'Humidity: ' + data['list'][3]['main']['humidity'];
      var wind4 = document.getElementById('wind4').innerHTML = 'Wind Speed: ' + data['list'][3]['wind']['speed'];
      var date4 = document.getElementById('date4').innerHTML = data['list'][0]['dt_txt'];
      var icon4 = document.getElementById('icon4').src = "http://openweathermap.org/img/w/" + data['list'][3]['weather'][0]['icon'] + ".png";

      // stores data in box 5 for 5 day forecast
      var temp5 = document.getElementById('temp5').innerHTML = 'Temp: ' + data['list'][4]['main']['temp'];
      var hum5 = document.getElementById('humidity5').innerHTML = 'Humidity: ' + data['list'][4]['main']['humidity'];
      var wind5 = document.getElementById('wind5').innerHTML = 'Wind Speed: ' + data['list'][4]['wind']['speed'];
      var date5 = document.getElementById('date5').innerHTML = data['list'][0]['dt_txt'];
      var icon5 = document.getElementById('icon5').src = "http://openweathermap.org/img/w/" + data['list'][4]['weather'][0]['icon'] + ".png";

    })
};

fetchBtn.addEventListener('click', getWeather);
fetchBtn.addEventListener('click', fivedayWeather);