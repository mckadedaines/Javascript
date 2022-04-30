// Displays my name as an h1
document.querySelector('#name').innerHTML = "<h1>Mckade Daines</h1>";

// Gets the date and displays it, constantly updates
let date = new Date();
let year = date.getFullYear();
document.querySelector("#year").innerHTML = year;

// Image gets inserted into the HTML and sizes the width
document.querySelector("#pic").src = "../images/me.jpg";
document.querySelector('#pic').setAttribute('width', '400');

// Creates an array of foods and displays them
const foods = ["Teryaki Chicken", " Chicken Alfredo", " Steak"];
document.querySelector("#food").textContent = foods;

// Adds a food to the array (shows at the end of array)
const addFood = " Lasagna";
foods.push(addFood);
document.querySelector("#food").textContent = foods;

// Removes the first item in the array
foods.shift();
document.querySelector("#food").textContent = foods;

// Removes the last item in the array
foods.pop();
document.querySelector("#food").textContent = foods;