const apiKey = "2e8c783cb03d17d7c53e2b1b0a71b956"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weatherIcon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json()

        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/weather-app/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/weather-app/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/weather-app/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/weather-app/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/weather-app/mist.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/weather-app/snow.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})
