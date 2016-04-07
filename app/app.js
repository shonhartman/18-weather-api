import 'es6-promise';
import 'whatwg-fetch';

class Weather {
  constructor(location) {
    this.getData();
  }

  getData() {
    const token ="aec26b61d717ef0966b57fd205b38d35";
    const latitude = "34.746481";
    const longitude = "-92.289595";
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&APPID=${token}&units=imperial`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        let container = document.querySelector("container");

        document.querySelector("#city").innerHTML = response.city.name;
        document.querySelector("#condition").innerHTML = response.list[0].weather[0].description;

        let temp = response.list[0].temp.day;
        document.querySelector("#temp").innerHTML = Math.round(temp) + "&deg;";

      })
  }
}
