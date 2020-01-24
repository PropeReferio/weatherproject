function pullWeather(url){
    $.get(url, function(data){
        
        let high = data.main.temp_max * 1.8 - 459.67;
        let low = data.main.temp_min * 1.8 - 459.67;     //Fahrenheit (°F) = Kelvin x 1.8 - 459.67
        let humidity = data.main.humidity;   //JSON for city name and zip are slightly different, but
        let forecast = data.weather[0].description; // won't affect these variables
        
        //Fills HTML p tags with data from API
        $("#high p").text(high.toFixed(1)+'\xB0');
        $("#low p").text(low.toFixed(1)+'\xB0'); // \xB0 gives you degree symbol in JS
        $("#humidity p").text(humidity+ '%');
        $("#forecast p").text(forecast.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join(' '));
    })
}

function pullCityWeather(){
    // Takes city from form data and formats a url with it
    let city = document
        .getElementsByTagName('form')[0]
        .children[0].value;
    $('#locationname').text(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},usa&appid=a641de02f55d14465d55e5fd6edb7506`;
    //passes url to main function
    pullWeather(url);
}

function pullZipWeather(){
    // Takes city from form data and formats a url with it
    let zip = document
        .getElementsByTagName('form')[1]
        .children[0].value;
    $('#locationname').text(zip);
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=a641de02f55d14465d55e5fd6edb7506`;
    //passes url to main function
    pullWeather(url);
}
