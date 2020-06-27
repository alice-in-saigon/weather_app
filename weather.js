const API = {
    key: "653dd94ef3084fa2f4ed2d82d0496601",
    url: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
function setQuery(e) {
    if(e.keyCode == 13 || e.which == 13){
        getResults(searchbox.value)
    }
}

function getResults(query){
    fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
    .then(function(weather){
        return weather.json();
    })

    .then(displayResults)
}

function displayResults(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`
    
    let today = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = today.toLocaleDateString(); 

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

    let weatherC = document.querySelector('.current .weather');
    weatherC.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)} °C / ${Math.round(weather.main.temp_max)} °C`
}