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
        let temp = response.list[0].temp.day;

        document.querySelector("#city").innerHTML = response.city.name;
        document.querySelector("#condition").innerHTML = response.list[0].weather[0].description;
        document.querySelector("#current-temp").innerHTML = Math.round(temp) + "&deg;";
        document.querySelector("#forecast").innerHTML = response.list.forEach((day) => {
          let date = new Date(day.dt * 1000);
          let eachDay = date.getDay();
          let icon = `http://openweathermap.org/img/w/day.weather[0].icon.png`;

     switch (eachDay) {
       case 0:
         eachDay = "Monday";
         break;
       case 1:
         eachDay = "Tuesday";
         break;
       case 2:
         eachDay = "Wednesday";
         break;
       case 3:
         eachDay = "Thursday";
         break;
       case 4:
         eachDay = "Friday";
         break;
       case 5:
         eachDay = "Saturday";
         break;
       case 6:
         eachDay = "Sunday";
         break;
       default:
         eachDay = "Error";
         break;
     }

        })



      })


  }
}

let weather = new Weather();
