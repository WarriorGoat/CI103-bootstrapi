//Code for dog picture button
let image = document.querySelector("img");
let dogButton = document.querySelector("#dogButton");

fetchDogPic();

dogButton.addEventListener("click",()=>{
  fetchDogPic();
})


function fetchDogPic(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        image.src = data.message;
    })
} 


//code for retrieving weather data
let city = document.querySelector("#yourCity")
let weatherButton = document.querySelector("#weatherButton")
let forecast = document.querySelector("#forecast")

weatherButton.addEventListener("click", function(event){
    event.preventDefault();
    myForecast(yourCity.value);
    yourCity.value = "";
})

function myForecast(city){
    fetch (encodeURI(`https://goweather.herokuapp.com/weather/${city}`))
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        forecast.innerText=`Today's weather is ${data.description} at ${data.temperature} with winds at ${data.wind}`
    })
}


//code for finding your location
let findMe = document.querySelector("#findMeButton")
let yourLocation = document.querySelector("#yourLocation")

findMe.addEventListener("click", function(event){
    event.preventDefault();
    fetch("https://get.geojs.io/v1/ip/geo.json")
    .then(function(response){
    return response.json();
})
    .then(function(data){
    console.log(data)
    yourLocation.innerText=`Your ip address is ${data.ip} and you are in ${data.city}, ${data.region}, near ${data.latitude} lat and ${data.longitude} long.`
})})
