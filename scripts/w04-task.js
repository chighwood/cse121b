/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Collin Highwood",
    photo: {
        src: "images/collin.jpg",
        alt: "Profile Picture"
    },
    favoriteFoods: [
        "Chicken",
        "Pizza",
        "Burgers",
        "Tacos",
        "Potatoes"
    ],
    hobbies: [
        "Woodworking",
        "Drawing",
        "Hiking",
        "Backpacking",
        "Cars"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Austin, TX",
        length: "2 years"
    },
    {
        place: "Indianapolis, IN",
        length: "2 years"
    },
    {
        place: "Omaha, NE",
        length: "1.5 years"
    }
)
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = `${myProfile.name}`;

/* Photo with attributes */
document.querySelector("#photo").src = "images/collin.jpg";
document.querySelector("#photo").alt = "Profile Picture";


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
placesLivedArray = myProfile.placesLived;

dlElement = document.querySelector("#places-lived");

    placesLivedArray.forEach(function (placeObj) {

      dtElement = document.createElement('dt');
      dtElement.innerHTML = placeObj.place;

      ddElement = document.createElement('dd');
      ddElement.innerHTML = placeObj.length;

      dlElement.appendChild(dtElement);
      dlElement.appendChild(ddElement);
    });

