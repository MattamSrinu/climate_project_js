const weatherData = [
  { country: "India", city: "Hyderabad", temp: 32, humidity: 45, condition: "Clear", air: { speed: 12 } },
  { country: "USA", city: "New York", temp: 16, humidity: 60, condition: "Snow", air: { speed: 18 } },
  { country: "UK", city: "London", temp: 18, humidity: 70, condition: "Rainy", air: { speed: 20 } },
  { country: "Canada", city: "Toronto", temp: 20, humidity: 65, condition: "Partly Cloudy", air: { speed: 14 } },
  { country: "Australia", city: "Sydney", temp: 14, humidity: 55, condition: "Snow", air: { speed: 16 } },
  { country: "Germany", city: "Berlin", temp: 22, humidity: 58, condition: "Clear", air: { speed: 11 } },
  { country: "France", city: "Paris", temp: 21, humidity: 64, condition: "Rainy", air: { speed: 13 } },
  { country: "Italy", city: "Rome", temp: 29, humidity: 50, condition: "Sunny", air: { speed: 9 } },
  { country: "Brazil", city: "Rio de Janeiro", temp: 30, humidity: 70, condition: "Hot", air: { speed: 15 } },
  { country: "Mexico", city: "Mexico City", temp: 24, humidity: 60, condition: "Cloudy", air: { speed: 17 } },
  { country: "Japan", city: "Tokyo", temp: 27, humidity: 68, condition: "Rainy", air: { speed: 19 } },
  { country: "China", city: "Beijing", temp: 25, humidity: 55, condition: "Clear", air: { speed: 10 } },
  { country: "South Korea", city: "Seoul", temp: 26, humidity: 62, condition: "Cloudy", air: { speed: 12 } },
  { country: "Russia", city: "Moscow", temp: 16, humidity: 72, condition: "Rainy", air: { speed: 21 } },
  { country: "South Africa", city: "Cape Town", temp: 10, humidity: 50, condition: "Snowr", air: { speed: 14 } },
  { country: "Argentina", city: "Buenos Aires", temp: 23, humidity: 65, condition: "Sunny", air: { speed: 13 } },
  { country: "Spain", city: "Madrid", temp: 31, humidity: 45, condition: "Clear", air: { speed: 8 } },
  { country: "Portugal", city: "Lisbon", temp: 28, humidity: 48, condition: "Sunny", air: { speed: 11 } },
  { country: "Netherlands", city: "Amsterdam", temp: 19, humidity: 72, condition: "Cloudy", air: { speed: 20 } },
  { country: "Sweden", city: "Stockholm", temp: 17, humidity: 68, condition: "Rainy", air: { speed: 18 } },
  { country: "Norway", city: "Oslo", temp: 15, humidity: 70, condition: "Cloudy", air: { speed: 19 } },
  { country: "Denmark", city: "Copenhagen", temp: 18, humidity: 65, condition: "Clear", air: { speed: 16 } },
  { country: "Switzerland", city: "Zurich", temp: 20, humidity: 60, condition: "Sunny", air: { speed: 9 } },
  { country: "Austria", city: "Vienna", temp: 22, humidity: 63, condition: "Clear", air: { speed: 12 } },
  { country: "Turkey", city: "Istanbul", temp: 27, humidity: 58, condition: "Partly Cloudy", air: { speed: 15 } },
  { country: "Saudi Arabia", city: "Riyadh", temp: 38, humidity: 20, condition: "Hot", air: { speed: 10 } },
  { country: "UAE", city: "Dubai", temp: 40, humidity: 30, condition: "Sunny", air: { speed: 8 } },
  { country: "Egypt", city: "Cairo", temp: 36, humidity: 28, condition: "Hot", air: { speed: 13 } },
  { country: "Kenya", city: "Nairobi", temp: 24, humidity: 55, condition: "Clear", air: { speed: 14 } },
  { country: "Nigeria", city: "Lagos", temp: 29, humidity: 75, condition: "Hot", air: { speed: 12 } },
  { country: "Thailand", city: "Bangkok", temp: 33, humidity: 78, condition: "Rainy", air: { speed: 10 } },
  { country: "Vietnam", city: "Hanoi", temp: 31, humidity: 72, condition: "Cloudy", air: { speed: 11 } },
  { country: "Philippines", city: "Manila", temp: 30, humidity: 80, condition: "Rainy", air: { speed: 17 } },
  { country: "Indonesia", city: "Jakarta", temp: 32, humidity: 82, condition: "Hot", air: { speed: 13 } },
  { country: "Singapore", city: "Singapore", temp: 31, humidity: 75, condition: "Clear", air: { speed: 15 } },
  { country: "Malaysia", city: "Kuala Lumpur", temp: 30, humidity: 76, condition: "Rainy", air: { speed: 14 } },
  { country: "Pakistan", city: "Karachi", temp: 35, humidity: 60, condition: "Hot", air: { speed: 12 } },
  { country: "Bangladesh", city: "Dhaka", temp: 33, humidity: 77, condition: "Hot", air: { speed: 10 } },
  { country: "Sri Lanka", city: "Colombo", temp: 29, humidity: 80, condition: "Rainy", air: { speed: 11 } },
  { country: "Nepal", city: "Kathmandu", temp: 25, humidity: 68, condition: "Clear", air: { speed: 9 } },
  { country: "Afghanistan", city: "Kabul", temp: 28, humidity: 35, condition: "Dry", air: { speed: 7 } },
  { country: "Iran", city: "Tehran", temp: 34, humidity: 30, condition: "Hot", air: { speed: 12 } },
  { country: "Iraq", city: "Baghdad", temp: 39, humidity: 22, condition: "Sunny", air: { speed: 10 } },
  { country: "Israel", city: "Jerusalem", temp: 29, humidity: 45, condition: "Clear", air: { speed: 8 } },
  { country: "Qatar", city: "Doha", temp: 41, humidity: 28, condition: "Sunny", air: { speed: 11 } },
  { country: "New Zealand", city: "Auckland", temp: 18, humidity: 68, condition: "Cloudy", air: { speed: 19 } },
  { country: "Chile", city: "Santiago", temp: 21, humidity: 50, condition: "Clear", air: { speed: 14 } },
  { country: "Peru", city: "Lima", temp: 19, humidity: 70, condition: "Cloudy", air: { speed: 12 } },
  { country: "Colombia", city: "Bogotá", temp: 20, humidity: 72, condition: "Rainy", air: { speed: 16 } },
  { country: "Venezuela", city: "Caracas", temp: 28, humidity: 74, condition: "Hot", air: { speed: 15 } },
  { country: "Iceland", city: "Reykjavik", temp: 10, humidity: 75, condition: "Cloudy", air: { speed: 20 } },
  { country: "Finland", city: "Helsinki", temp: 12, humidity: 70, condition: "Rainy", air: { speed: 15 } },
  { country: "Belarus", city: "Minsk", temp: 16, humidity: 65, condition: "Clear", air: { speed: 10 } },
  { country: "Poland", city: "Warsaw", temp: 18, humidity: 60, condition: "Sunny", air: { speed: 12 } },
  { country: "Greece", city: "Athens", temp: 30, humidity: 40, condition: "Hot", air: { speed: 8 } },
  { country: "Morocco", city: "Rabat", temp: 28, humidity: 45, condition: "Sunny", air: { speed: 14 } },
  { country: "Tunisia", city: "Tunis", temp: 31, humidity: 35, condition: "Hot", air: { speed: 13 } },
  { country: "Saudi Arabia", city: "Jeddah", temp: 37, humidity: 25, condition: "Hot", air: { speed: 10 } },
  { country: "Oman", city: "Muscat", temp: 39, humidity: 30, condition: "Hot", air: { speed: 9 } },
  { country: "Kazakhstan", city: "Astana", temp: 20, humidity: 50, condition: "Clear", air: { speed: 12 } },
  { country: "Uzbekistan", city: "Tashkent", temp: 33, humidity: 30, condition: "Sunny", air: { speed: 10 } },
  { country: "Georgia", city: "Tbilisi", temp: 27, humidity: 55, condition: "Sunny", air: { speed: 11 } },
  { country: "Armenia", city: "Yerevan", temp: 29, humidity: 50, condition: "Hot", air: { speed: 12 } },
  { country: "Mongolia", city: "Ulaanbaatar", temp: 15, humidity: 60, condition: "Cold", air: { speed: 14 } },
  { country: "Bangladesh", city: "Chittagong", temp: 32, humidity: 80, condition: "Rainy", air: { speed: 10 } },
  { country: "Maldives", city: "Malé", temp: 31, humidity: 85, condition: "Hot", air: { speed: 12 } },
  { country: "Fiji", city: "Suva", temp: 29, humidity: 78, condition: "Rainy", air: { speed: 13 } },
  { country: "Papua New Guinea", city: "Port Moresby", temp: 30, humidity: 77, condition: "Hot", air: { speed: 11 } },
  { country: "Seychelles", city: "Victoria", temp: 28, humidity: 80, condition: "Hot", air: { speed: 10 } },
  { country: "Bhutan", city: "Thimphu", temp: 22, humidity: 60, condition: "Clear", air: { speed: 9 } }
];

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");

function weatherReport(country_name) {
    const newdata = weatherData.find(item => item.country === country_name);
    
    if(newdata) {
        document.querySelector(".city").innerHTML = newdata.city;
        document.querySelector(".temp").innerHTML = Math.round(newdata.temp)+"°C";
        document.querySelector(".humidity").innerHTML = newdata.humidity + "%";
        document.querySelector(".wind").innerHTML = newdata.air.speed + " km/h";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        if(newdata.condition == "Cloudy") {
            weatherIcon.src = "cloudy.png";
        } else if(newdata.condition == "Clear") {
            weatherIcon.src = "clear-sky.png";
        } else if(newdata.condition == "Rainy") {
            weatherIcon.src = "rainy.png";
        } else if(newdata.condition == "Hot") {
            weatherIcon.src = "sunny.png";
        }else if(newdata.condition=="Snow"){
          weatherIcon.src="snow.png"
        }
    }else{
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        }
}
searchBtn.addEventListener("click", ()=>{weatherReport(searchBox.value)})