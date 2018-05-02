/* global $ */
$(document).ready(function() {
    var weatherUrl = "";
    var apiKey = "&api_key=";
    
    function weatherURLWithSearchTerm(searchTerm) {
        // write a function that will return a url for the giphy API with
        // the searchTerm provided in the parameters
        var newUrl = weatherUrl + searchTerm + apiKey;
        return newUrl;
    }
    
   
    
    function callWeatherAPIWithSearchTerm(searchTerm) {
        // write a function that uses the above two functions to create the url,
        // uses ajax to send a request, and appends the result to the body
        $.ajax({
            url: weatherURLWithSearchTerm(searchTerm),
            method: "GET",
            success: function(result) {
                
            },
        });
    }
    
     $("button").click(function() {
        var input = $("#input").val();
        console.log(input);
    });
    
    
    
    
});
