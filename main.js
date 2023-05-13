let units = 'metric';
let speed = " m/s"

let cities = ["Kyiv", "London", "New York"]

let wrapper = document.querySelector("#wrapper")

function addclickHandles(e) {
    e.target.parentElement.nextSibling.classList.toggle("hidden")
}   

cities.forEach(element => {
    new City(element).drawCityForecast()
});
cities.forEach(element => {
    new City(element).drawCity()
});

unitsSelect.addEventListener("change", function () {
    units = unitsSelect.value;
    if (units == "imperial") {
        speed = "m/h"
    }
    else {
        speed = "m/s"
    }
    wrapper.innerHTML = ""

    cities.forEach(element => {
        new City(element).drawCity()
    });
    cities.forEach(element => {
        new City(element).drawCityForecast()
    });
})