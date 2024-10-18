// api ->tusgailan beldsen datag avahiin tuld holboj ugdug heregsel
// fetch('url'); -> api ruu request ywuulna
// .then() -> huseltiin hariu // promise
// 200 -> approved, 404,505,600 -> denied 
// .json() -> zambaraagui data-g object ruu hurvuuldeg
fetch('https://fakestoreapi.com/products').then(
    response => response.json()
).then(
    products => {
        console.log(products);
        console.log(products[0].title);
        console.log(products[products.length - 1].rating.rate);

        let title = products.map(product => product.title);
        console.log(title);
    }
);
// .map() -> array -> odo baiga array-iig shine array ruu hurvuulne 
// define 
let input = document.getElementsByTagName('input')[0];
let search = document.getElementsByTagName('button')[0];
let nameTag = document.querySelector('.name');  
let tempTag = document.querySelector('.temp');  
let windTag = document.querySelector('.wind');  
let descTag = document.querySelector('.desc');  
let humTag = document.querySelector('.hum');  
let mainTag = document.querySelector('.main');
let weatherIcon = document.querySelector('.weather-icon');

search.addEventListener('click', () => {
    let city = input.value;  
    //alert('test');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
        response => response.json()
    ).then(
        data => {
            console.log(data);
            let name = data.name;                        
            let temp = Math.floor(data.main.temp);        
            let wind = data.wind.speed;                  
            let desc = data.weather[0].description;      
            let hum = data.main.humidity;
            let main = data.weather[0].main;

            nameTag.innerText = name;
            tempTag.innerText = temp + " C";
            windTag.innerText = wind + " km/h";
            descTag.innerText = desc;
            humTag.innerText = hum + " %";
            mainTag.innerText = main;

            if (main === "Clouds") {
                weatherIcon.src = "file:///C:/Users/Gunee/AppData/Local/Temp/Rar$DIa13876.27094.rartemp/cloudy.svg";
            } else if (main === "Rain") {
                weatherIcon.src = "file:///C:/Users/Gunee/AppData/Local/Temp/Rar$DIa13876.24009.rartemp/rain.svg";
            } else if (main === "Clear") {
                weatherIcon.src = "file:///C:/Users/Gunee/AppData/Local/Temp/Rar$DIa13876.28454.rartemp/day_clear.svg";
            } else if (main === "Snow") {
                weatherIcon.src = "file:///C:/Users/Gunee/AppData/Local/Temp/Rar$DIa13876.30254.rartemp/night_half_moon_snow_thunder.svg";
            } else {
                weatherIcon.src = ""; 
            }
        }
    );
});

let number = [2, 6, 5, 8];
let doubledNumber = number.map(num => num * 2);
console.log(doubledNumber);

fetch('https://fakestoreapi.com/users').then(
    response => response.json()
).then(
    users => {
        console.log(users);
        console.log(users[0].name.firstname); 
        console.log(users[users.length - 1].email); 

        let usernames = users.map(user => user.name.firstname); 
        console.log(usernames);
    }
);
