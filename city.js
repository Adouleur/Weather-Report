class City {

    constructor(cityName) {
        this.cityName = cityName;
        this.cityView;
    }
    fetchCurrentWeatherData(data) {
        return fetch(data)
            .then(responce => responce.json())
    }
    fetchFuturetWeatherData(data) {
        return fetch(data)
            .then(responce => responce.json())
    }
    drawCity() {
        this.fetchCurrentWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=bf35cac91880cb98375230fb443a116f&units=${units}`)
            .then(element => {
                this.cityView = new CityView(element)
                this.cityView.createElement()
            })
    }
    drawCityForecast() {
        this.fetchFuturetWeatherData(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&appid=bf35cac91880cb98375230fb443a116f&units=${units}`)
            .then(element => {

                this.cityForecastView = new CityForeCastView(element)
                this.cityForecastView.createForecastElement()
            })
    }
}