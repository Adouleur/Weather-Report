class CityForeCastView {
    constructor(forecastData) {
        this.forecastData = forecastData;
        this.cityForecastDiv;
        this.forecastTime;
    }

    createForecastElement() {
        this.sameCity = document.getElementById(this.forecastData.city.id)

        this.forecastDiv = document.createElement("div")
        this.forecastDiv.classList.add("forecastWrapper", "hidden")


        for (let index = 0; index < this.forecastData.list.length; index++) {

            if (Number.isInteger(index / 5)) {
                const element = this.forecastData.list[index];
                this.forecastTime = new Date(element.dt * 1000).toLocaleTimeString()


                this.cityForecastDiv = document.createElement("div")
                this.imgforecast = new Image()
                this.imgforecast.src = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
                this.cityForecastDiv.innerHTML = `${element.main.temp}&#176 ${this.forecastTime}`
                this.cityForecastDiv.prepend(this.imgforecast)


                this.forecastDiv.append(this.cityForecastDiv)
            }
            this.sameCity.after(this.forecastDiv)
        }
    }

}