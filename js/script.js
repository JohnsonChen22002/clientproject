/* global $ */
$(document).ready(function() {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?zip=";
    var apiKey = ",us&APPID=970dbba6cad5524316250d5b1d1e77cc";

    function weatherURLWithSearchTerm(searchTerm) {
        var newUrl = weatherUrl + searchTerm + apiKey;
        return newUrl;
    }
    
    
    function callWeatherAPIWithSearchTerm(searchTerm) {
        $.ajax({
            url: weatherURLWithSearchTerm(searchTerm),
            method: "GET",
            success: function(result) {
                console.log(result);
                var temperature =  result.list[0].main.temp;
                console.log(temperature);
                var convert = Math.round(9/5*(temperature - 274) + 32)
                console.log(convert)
                $("#result").text("It is currently " + convert + "°F");
                $("#logo").hide();

            },
        });
    }

    $("#formButton").click(function() {
        var input = $("#input").val();
        callWeatherAPIWithSearchTerm(input);
        
    });




});
