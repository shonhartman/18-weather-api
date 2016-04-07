import 'es6-promise';
import 'whatwg-fetch';

class Weather {
  constructor(location) {
    this.getData();
  }

  getData() {
    const token ="216fd9a063b72173883f0ddeeeb951f4";
    const latitude = "34.736009";
    const longitude = "-92.331122";
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&APPID=${token}&units=imperial`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        let body = document.querySelector("body");

        document.querySelector("#city").innerHTML = response.city.name;
        document.querySelector("#description").innerHTML = response.list[0].weather[0].description;

        let temp = response.list[0].temp.day;
        document.querySelector("#temp").innerHTML = Math.round(temp) + "&deg;";

        //Putting each day on the page.

        response.list.forEach((day) => {
          let dayDiv = document.createElement("div");
          dayDiv.classList.add("dayDiv");

          let date = new Date(day.dt * 1000);
          let dayOfWeek = date.getDay();

          if (dayOfWeek === 0) {
            dayOfWeek = "Sunday";
          }
          else if (dayOfWeek === 1) {
            dayOfWeek = "Monday";
          }
          else if (dayOfWeek === 2) {
            dayOfWeek = "Tuesday";
          }
          else if (dayOfWeek === 3) {
            dayOfWeek = "Wednesday";
          }
          else if (dayOfWeek === 4) {
            dayOfWeek = "Thursday";
          }
          else if (dayOfWeek === 5) {
            dayOfWeek = "Friday";
          }
          else if (dayOfWeek === 6) {
            dayOfWeek = "Saturday";
          }

          let dayOfWeekDiv = document.createElement("div");
          dayOfWeekDiv.classList.add("day");
          dayOfWeekDiv.innerHTML = dayOfWeek;
          dayDiv.appendChild(dayOfWeekDiv);

          let icon = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
          let iconDiv = document.createElement("img");
          iconDiv.src = icon;
          dayDiv.appendChild(iconDiv);

          let max = day.temp.max;
          let maxDiv = document.createElement("div");
          maxDiv.classList.add("maxDiv");
          maxDiv.innerHTML = Math.round(max);
          dayDiv.appendChild(maxDiv);

          let min = day.temp.min;
          let minDiv = document.createElement("div");
          minDiv.classList.add("minDiv");
          minDiv.innerHTML = Math.round(min);
          dayDiv.appendChild(minDiv);

          body.appendChild(dayDiv);
        })



        // body.appendChild(imgDiv);



      })
  }
}

export default Weather;
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help
