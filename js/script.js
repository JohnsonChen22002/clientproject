/* global $ */
$(document).ready(function() {
    var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?zip=";
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



            },
        });
    }

    $("#formButton").click(function() {
        var input = $("#input").val();
        callWeatherAPIWithSearchTerm(input);
    });




});
