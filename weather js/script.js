
const apiKey ="";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search=document.querySelector('.searchbox input');
const searchbtn=document.querySelector('.searchbox button');
const weathericon=document.querySelector('.weathericon');

async function getWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + ' %';
    document.querySelector(".wind").innerHTML = data.wind.speed + '  km/h';

    switch (data.weather[0].main) {
        case 'Clouds':
          weathericon.src = "clouds.png";
          break;
        case 'Clear':
          weathericon.src = "clear.png";
          break;
        case 'Rain':
          weathericon.src = "rain.png";
          break;
        case 'Drizzle':
          weathericon.src = "drizzle.png";
          break;
        case 'Snow':
          weathericon.src = "snow.png";
          break;
        case 'Mist':
            weathericon.src = "mist.png";
            break;
        default:
          weathericon.src = "clear.png"; // Default icon
      }
}



searchbtn.addEventListener('click', ()=>{
    getWeather(search.value);
})

 
