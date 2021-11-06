// let cityName = "karachi";

const getData = async () => {
  const cityName = document.getElementById("cityName").value
    ? document.getElementById("cityName").value
    : "karachi";
  document.getElementById("cityName").value = "";
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=16a70338caa6c105fc746ba16ecf7c7a&units=metric`
  );
  // console.log(res.data);
  var tempStatus = res.data.weather[0].main;
  var tempVal = res.data.main.temp;
  document.getElementById("tempVal").innerText = tempVal;
  document.getElementById("location").innerText = res.data.name;
  document.getElementById("country").innerText = res.data.sys.country;
  document.getElementById("minTemp").innerText = res.data.main.temp_min;
  document.getElementById("maxTemp").innerText = res.data.main.temp_max;

  const CurDate = document.getElementById("date");
  let weatherCon = document.getElementById("weathercon");

  const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thurs";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let CurrentTime = new Date();
    let day = weekday[CurrentTime.getDay()];
    return day;
  };

  const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let period = "AM";

    if (hours > 11) {
      period = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (mins < 10) {
      mins = "0" + mins;
    }

    return `${month} ${date} |  ${hours}:${mins}:${period}`;
  };

  CurDate.innerHTML = getCurrentTime() + " | " + getCurrentDay();

  // getCurrentTime();

  // getCurrentDay();

  if (tempStatus == "Sunny") {
    weatherCon.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;
  } else if (tempStatus == "Clouds") {
    weatherCon.innerHTML = `<i class="fas fa-cloud" style="color: #dfe4ea"></i>`;
  } else if (tempStatus == "Rainy") {
    weatherCon.innerHTML = `<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>`;
  } else {
    weatherCon.innerHTML = `<i class="fas fa-cloud" style="color: #44c3de"></i>`;
  }
};
