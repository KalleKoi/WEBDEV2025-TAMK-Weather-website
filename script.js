const apiKey ="07d0685bb5970b340591a847ee34b853";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=tampere";

async function getWeatherData(){

    try {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
  
    console.log(data);

    // Here I needed help of chatGPT to fetch weather icons
    const iconArray = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconArray}@2x.png`;

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = `${data.main.temp} °C`
    document.querySelector(".feels_like").innerText = `${data.main.feels_like} °C`
    document.querySelector(".weather-icon").src = iconUrl;

    } catch (error) {
        document.querySelector(".city").innerText = "City not found";
        document.querySelector(".temp").innerText = "N/A";
        document.querySelector(".feels_like").innerText = "N/A";
        document.querySelector(".weather-icon").src = "";
        console.error(error);
    }
}


getWeatherData();
setInterval(getWeatherData, 900000);