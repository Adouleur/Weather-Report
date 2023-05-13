class CityView {
    constructor(currentData) {
        this.currentData = currentData;
        this.currentDusk;
        this.currentDawn;
    }
    getTime() {

        this.dawnTime = new Date(this.currentData.sys.sunset * 1000)
        this.duskTime = new Date(this.currentData.sys.sunrise * 1000)
        this.currentDawn = this.dawnTime.toLocaleTimeString()
        
        this.currentDusk = this.duskTime.toLocaleTimeString()
        return this.currentDusk, this.currentDawn
    }
    createElement() {
        this.getTime()
     
        this.div = document.createElement("div")
        this.div.classList.add("cityDiv")
        this.div.setAttribute('id', this.currentData.id)
        this.img = new Image()
        this.img.src = `https://openweathermap.org/img/wn/${this.currentData.weather[0].icon}@2x.png`
        this.div.append(this.img)

        this.nameDiv = document.createElement("div")
        this.nameDiv.innerHTML = this.currentData.name;
        this.div.append(this.nameDiv)

        this.tempAndcloudsDiv = document.createElement("div")
        this.tempAndcloudsDiv.innerHTML = `${this.currentData.main.temp}&#176 </br> ${this.currentData.weather[0].description}`
        this.div.append(this.tempAndcloudsDiv)

        this.windDiv = document.createElement("div")
        this.windDiv.innerHTML = `Wind speed ${this.currentData.wind.speed}${speed} `
        this.div.append(this.windDiv)

        this.duskAndDawnDiv = document.createElement("div");
        this.duskAndDawnDiv.innerHTML = `Sunrise: ${this.currentDusk} </br>  Sunset: ${this.currentDawn}`
        this.div.append(this.duskAndDawnDiv)

        this.showForecastButton = document.createElement("button")
        this.showForecastButton.innerHTML = "Show more"
        this.div.append(this.showForecastButton)
      
        this.showForecastButton.addEventListener('click', addclickHandles)

        wrapper.append(this.div)

    }
}