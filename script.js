const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=haldia&appid=7b7e1f7f375e0cc9d6a5a4bfc0ab3c1c";


setInterval(weather,1000);

async function weather(){
    const response = await fetch(apiUrl);
    let report = await response.json();
    console.log(report);
    document.querySelector(".weathername").innerHTML = report.weather[0].main;
    document.querySelector(".temperature").innerHTML=Math.round(report.main.temp) + "&deg;C";
    document.querySelector(".humidity-percent").innerHTML=report.main.humidity + "%";
    document.querySelector(".pressure-unit").innerHTML = report.main.pressure + " Pr";
    document.querySelector(".windunit").innerHTML=report.wind.speed +" km/hr";

   const weatherpictures = document.querySelector(".weather-icons");

    if(report.weather[0].main=== "Clouds"){
       weatherpictures.src = "clouds.png";
     }
     else if(report.weather[0].main=== "Rain"){
        weatherpictures.src= "rain.png";
     }
    
     else if(report.weather[0].main=== "Drizzle"){
        weatherpictures.src= "drizzle.png";
     }
     else if(report.weather[0].main=== "Thunder"){
        weatherpictures.src= "thunder.png";
     }
     else if(report.weather[0].main=== "Clear"){
        weatherpictures.src="clear-sky.png";
     }
     else if(report.weather[0].main=== "Snow"){
        weatherpictures.src="snow.png";
     }
     
 }
 weather(); 


setInterval(() =>{
   let today = new Date();
   let change = new Intl.DateTimeFormat("en-US",{
       timeZone: 'Asia/Kolkata',
       dateStyle: 'full',
       timeStyle: 'medium',
   })
   document.getElementById("date-time").innerHTML=`${change.format(today)}`;
},1000)
