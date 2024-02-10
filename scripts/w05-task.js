/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let templesElement;

/* async displayTemples Function */
async function displayTemples(temples) {

    if (!templesElement) {
        templesElement = document.getElementById("temples");
    }

    temples.forEach(temple => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
async function getTemples() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayTemples(data);
    }
}
/* reset Function */
function reset () {
    if (!templesElement) {
        templesElement = document.getElementById("temples");
    }
      templesElement.innerHTML = "";
}
/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemples);
            break;
        case "notutah":
            let notUtahTemples = temples.filter(temple => !temple.location.toLowerCase().includes("utah"));
            displayTemples(notUtahTemples);
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            break;
    }
}

getTemples();

/* Event Listener */

document.getElementById("filtered").addEventListener("change", async function () {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      filterTemples(data);
    }
});   
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });