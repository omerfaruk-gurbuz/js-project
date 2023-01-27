const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const wind = document.querySelector(".wind");
const weather = document.querySelector(".weather");



button.addEventListener("click", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2fbafbe3eb671e5aaa277f9324a67ddf`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const {coord,main,weather,wind,sys}= data
      
      
      
     // my function();
    });
    
    
    city.innerText = input.value;
    date.innerText = new Date()

  //wind.innerHTML =
});
