const weatherData = [
  { country: "INDIA", city: "Hyderabad", temp: 32, humidity: 45, condition: "Clear", air: { speed: 12 } },
  { country: "USA", city: "New York", temp: 16, humidity: 60, condition: "Snow", air: { speed: 18 } },
  { country: "UK", city: "London", temp: 18, humidity: 70, condition: "Rainy", air: { speed: 20 } },
  { country: "CANADA", city: "Toronto", temp: 20, humidity: 65, condition: "Partly Cloudy", air: { speed: 14 } },
  { country: "AUSTRALIA", city: "Sydney", temp: 14, humidity: 55, condition: "Snow", air: { speed: 16 } },
  { country: "GERMANY", city: "Berlin", temp: 22, humidity: 58, condition: "Clear", air: { speed: 11 } },
  { country: "FRANCE", city: "Paris", temp: 21, humidity: 64, condition: "Rainy", air: { speed: 13 } },
  { country: "ITALY", city: "Rome", temp: 29, humidity: 50, condition: "Sunny", air: { speed: 9 } },
  { country: "BRAZIL", city: "Rio de Janeiro", temp: 30, humidity: 70, condition: "Hot", air: { speed: 15 } },
  { country: "MEXICO", city: "Mexico City", temp: 24, humidity: 60, condition: "Cloudy", air: { speed: 17 } },
  { country: "JAPAN", city: "Tokyo", temp: 27, humidity: 68, condition: "Rainy", air: { speed: 19 } },
  { country: "CHINA", city: "Beijing", temp: 25, humidity: 55, condition: "Clear", air: { speed: 10 } },
  { country: "SOUTH KOREA", city: "Seoul", temp: 26, humidity: 62, condition: "Cloudy", air: { speed: 12 } },
  { country: "RUSSIA", city: "Moscow", temp: 16, humidity: 72, condition: "Rainy", air: { speed: 21 } },
  { country: "SOUTH AFRICA", city: "Cape Town", temp: 10, humidity: 50, condition: "Snowr", air: { speed: 14 } },
  { country: "ARGENTINA", city: "Buenos Aires", temp: 23, humidity: 65, condition: "Sunny", air: { speed: 13 } },
  { country: "SPAIN", city: "Madrid", temp: 31, humidity: 45, condition: "Clear", air: { speed: 8 } },
  { country: "PORTUGAL", city: "Lisbon", temp: 28, humidity: 48, condition: "Sunny", air: { speed: 11 } },
  { country: "NETHERLANDS", city: "Amsterdam", temp: 19, humidity: 72, condition: "Cloudy", air: { speed: 20 } },
  { country: "SWEDEN", city: "Stockholm", temp: 17, humidity: 68, condition: "Rainy", air: { speed: 18 } },
  { country: "NORWAY", city: "Oslo", temp: 15, humidity: 70, condition: "Cloudy", air: { speed: 19 } },
  { country: "DENMARK", city: "Copenhagen", temp: 18, humidity: 65, condition: "Clear", air: { speed: 16 } },
  { country: "SWITZERLAND", city: "Zurich", temp: 20, humidity: 60, condition: "Sunny", air: { speed: 9 } },
  { country: "AUSTRIA", city: "Vienna", temp: 22, humidity: 63, condition: "Clear", air: { speed: 12 } },
  { country: "TURKEY", city: "Istanbul", temp: 27, humidity: 58, condition: "Partly Cloudy", air: { speed: 15 } },
  { country: "SAUDI ARABIA", city: "Riyadh", temp: 38, humidity: 20, condition: "Hot", air: { speed: 10 } },
  { country: "UAE", city: "Dubai", temp: 40, humidity: 30, condition: "Sunny", air: { speed: 8 } },
  { country: "EGYPT", city: "Cairo", temp: 36, humidity: 28, condition: "Hot", air: { speed: 13 } },
  { country: "KENYA", city: "Nairobi", temp: 24, humidity: 55, condition: "Clear", air: { speed: 14 } },
  { country: "NIGERIA", city: "Lagos", temp: 29, humidity: 75, condition: "Hot", air: { speed: 12 } },
  { country: "THAILAND", city: "Bangkok", temp: 33, humidity: 78, condition: "Rainy", air: { speed: 10 } },
  { country: "VIETNAM", city: "Hanoi", temp: 31, humidity: 72, condition: "Cloudy", air: { speed: 11 } },
  { country: "PHILIPPINES", city: "Manila", temp: 30, humidity: 80, condition: "Rainy", air: { speed: 17 } },
  { country: "INDONESIA", city: "Jakarta", temp: 32, humidity: 82, condition: "Hot", air: { speed: 13 } },
  { country: "SINGAPORE", city: "Singapore", temp: 31, humidity: 75, condition: "Clear", air: { speed: 15 } },
  { country: "MALAYSIA", city: "Kuala Lumpur", temp: 30, humidity: 76, condition: "Rainy", air: { speed: 14 } },
  { country: "PAKISTAN", city: "Karachi", temp: 35, humidity: 60, condition: "Hot", air: { speed: 12 } },
  { country: "BANGALDESH", city: "Dhaka", temp: 33, humidity: 77, condition: "Hot", air: { speed: 10 } },
  { country: "SRI LANKA", city: "Colombo", temp: 29, humidity: 80, condition: "Rainy", air: { speed: 11 } },
  { country: "NEPAL", city: "Kathmandu", temp: 25, humidity: 68, condition: "Clear", air: { speed: 9 } },
  { country: "AFGHANISTAN", city: "Kabul", temp: 28, humidity: 35, condition: "Dry", air: { speed: 7 } },
  { country: "IRAN", city: "Tehran", temp: 34, humidity: 30, condition: "Hot", air: { speed: 12 } },
  { country: "IRAQ", city: "Baghdad", temp: 39, humidity: 22, condition: "Sunny", air: { speed: 10 } },
  { country: "ISRAEL", city: "Jerusalem", temp: 29, humidity: 45, condition: "Clear", air: { speed: 8 } },
  { country: "QATAR", city: "Doha", temp: 41, humidity: 28, condition: "Sunny", air: { speed: 11 } },
  { country: "NEW ZEALAND", city: "Auckland", temp: 18, humidity: 68, condition: "Cloudy", air: { speed: 19 } },
  { country: "CHILE", city: "Santiago", temp: 21, humidity: 50, condition: "Clear", air: { speed: 14 } },
  { country: "PERU", city: "Lima", temp: 19, humidity: 70, condition: "Cloudy", air: { speed: 12 } },
  { country: "COLOMBIA", city: "Bogotá", temp: 20, humidity: 72, condition: "Rainy", air: { speed: 16 } },
  { country: "VENEZUELA", city: "Caracas", temp: 28, humidity: 74, condition: "Hot", air: { speed: 15 } },
  { country: "ICELAND", city: "Reykjavik", temp: 10, humidity: 75, condition: "Cloudy", air: { speed: 20 } },
  { country: "FINLAND", city: "Helsinki", temp: 12, humidity: 70, condition: "Rainy", air: { speed: 15 } },
  { country: "BELARUS", city: "Minsk", temp: 16, humidity: 65, condition: "Clear", air: { speed: 10 } },
  { country: "POLAND", city: "Warsaw", temp: 18, humidity: 60, condition: "Sunny", air: { speed: 12 } },
  { country: "GREECE", city: "Athens", temp: 30, humidity: 40, condition: "Hot", air: { speed: 8 } },
  { country: "MOROCCO", city: "Rabat", temp: 28, humidity: 45, condition: "Sunny", air: { speed: 14 } },
  { country: "TUNISIA", city: "Tunis", temp: 31, humidity: 35, condition: "Hot", air: { speed: 13 } },
  { country: "SAUDI ARABIA", city: "Jeddah", temp: 37, humidity: 25, condition: "Hot", air: { speed: 10 } },
  { country: "OMAN", city: "Muscat", temp: 39, humidity: 30, condition: "Hot", air: { speed: 9 } },
  { country: "KAZAKHSTAN", city: "Astana", temp: 20, humidity: 50, condition: "Clear", air: { speed: 12 } },
  { country: "UZBEKISTAN", city: "Tashkent", temp: 33, humidity: 30, condition: "Sunny", air: { speed: 10 } },
  { country: "GEORGIA", city: "Tbilisi", temp: 27, humidity: 55, condition: "Sunny", air: { speed: 11 } },
  { country: "ARMENIA", city: "Yerevan", temp: 29, humidity: 50, condition: "Hot", air: { speed: 12 } },
  { country: "MONGOLIA", city: "Ulaanbaatar", temp: 15, humidity: 60, condition: "Cold", air: { speed: 14 } },
  { country: "BANGLADESH", city: "Chittagong", temp: 32, humidity: 80, condition: "Rainy", air: { speed: 10 } },
  { country: "MALDIVES", city: "Malé", temp: 31, humidity: 85, condition: "Hot", air: { speed: 12 } },
  { country: "FIJI", city: "Suva", temp: 29, humidity: 78, condition: "Rainy", air: { speed: 13 } },
  { country: "PAPUA NEW GUINEA", city: "Port Moresby", temp: 30, humidity: 77, condition: "Hot", air: { speed: 11 } },
  { country: "SEYCHELLES", city: "Victoria", temp: 28, humidity: 80, condition: "Hot", air: { speed: 10 } },
  { country: "BHUTAN", city: "Thimphu", temp: 22, humidity: 60, condition: "Clear", air: { speed: 9 } }
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
