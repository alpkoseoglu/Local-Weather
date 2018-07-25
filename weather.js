$(document).ready(function() {
    var url1 = "https://fcc-weather-api.glitch.me/api/current?";
    var lat, lon;
    var tempInCelcius;
    var unit = "C";
    var cTemp;
    var fTemp;
    var location;
    var symbol;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        getWeather(lat, lon);
      });
    }
  
    function getWeather(lat, lon) {
      var api = url1 + "lat=" + lat + "&" + "lon=" + lon;
      var swap = true;
      $.getJSON(api, function(data) {
        location = data.name + "," + data.sys.country;
        cTemp = data.main.temp.toFixed(1);
        fTemp = (cTemp * 9 / 5 + 32).toFixed(1);
        symbol = data.weather[0].icon;
        $("#location").text(location);
        $("#situation").text(data.weather[0].main);
        $("#temp").text(cTemp + " C");
        $("#symbol").text(symbol);
  
        //Background image changing part...
  
        function backGround(cond) {
          cond = cond.toLowerCase();
          switch (cond) {
            case "clouds":
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-0.3.5&s=11368fcb9b01db42cd629dd6e4623c09&auto=format&fit=crop&w=752&q=80)"
              });
              break;
            case "rain":
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=750&q=80)"
              });
              break;
            case "snow":
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/photo-1456327594540-be0c28e27c01?ixlib=rb-0.3.5&s=95f5097c52338ef873ba241022814d78&auto=format&fit=crop&w=751&q=80)"
              });
              break;
            case "clear":
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d62abff77cbe292c48d6206d89a828eb&auto=format&fit=crop&w=890&q=80)"
              });
              break;
            case "thunderstorm":
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/photo-1504466664756-1adbe6d13b36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a189df52ae152da65e86df0c833dd80&auto=format&fit=crop&w=750&q=80)"
              });
              break;
            case "mist":
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/23/do-the-dew.JPG?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e5e593c254f674fc753375c88691117&auto=format&fit=crop&w=802&q=80)"
              });
              break;
            case "fog":
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=57a67cd508074eb9f10cf0da30c6db23&auto=format&fit=crop&w=750&q=80)"
              });
              break;
            default:
              $("#background").css({
                "background-image":
                  "url(https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5025d379155afa5d4070dcb979acdf09&auto=format&fit=crop&w=755&q=80)"
              });
              break;
          }
        }
        //Click action between F - C :
        backGround(data.weather[0].main);
      });
  
      $(".slider").click(function() {
        if (swap === false) {
          $("#temp").html(fTemp + " F");
          $(".slider:before").css({ content: "F" }); //This line is not working!!
          swap = true;
        } else {
          $("#temp").html(cTemp + " " + unit);
          $(".slider:before").css({ content: "C" }); //This line is not working!!
          swap = false;
        }
      });
    }
  });
  