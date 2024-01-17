/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Collin Highwood";
const currentYear = new Date().getFullYear();
const profilePicture = "images/collin.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const foodElement = document.querySelector("#food");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
yearElement.textContent = currentYear;
//document.getElementById('nameElement').innerHTML = fullName;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFoods = ["Steak", " Brownies", " Sushi", " Chicken"," Tacos"];
//foodElement.innerHTML = `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;
foodElement.innerHTML = favoriteFoods;
let newFood = " Potatoes"
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;







