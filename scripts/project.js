/* W05: Programming Tasks */

/* Declare and initialize global variables */
// const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
const url = "https://run.mocky.io/v3/acdc33be-96b0-4c71-8d3b-8cf3122982ab";
// C:\Users\colli\OneDrive\cse121b\Final\states.json
let statesElement;

/* async displayTemples Function */
async function displayStates(states) {

    if (!statesElement) {
        statesElement = document.getElementById("states");
    }

    states.forEach(state => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = state.name;

        const img = document.createElement("img");
        img.src = state.imgURL;
        img.alt = state.abbr;

        article.appendChild(h3);
        article.appendChild(img);
        statesElement.appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
async function getStates() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayStates(data);
    }
}
/* reset Function */
function reset () {
    if (!statesElement) {
        statesElement = document.getElementById("states");
    }
      statesElement.innerHTML = "";
}
/* filterStates Function */
function filterStates(states) {
    reset();
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "colony":
            displayStates(states.filter(state => new Date(state.year) < new Date(1790, 4, 30)));
            break;
        // case "sameState":
            // displayStates(states.filter((state, index, array) => {
                // const firstLetter = state.name[0].toLowerCase(); // Get the first letter of the state name
                // return array.some((otherState, otherIndex) => index !== otherIndex && otherState.name[0].toLowerCase() === firstLetter);}));
// 
                // 
            // Organize filtered states into sections based on the starting letter
            // const sections = {};
            // filteredStates.forEach(state => {
                // const firstLetter = state.name[0].toLowerCase();
                // if (!sections[firstLetter]) {
                    // sections[firstLetter] = [];
                // }
                // sections[firstLetter].push(state);
            // });
            // const container = document.getElementById("states-container");
            // Object.keys(sections).forEach(letter => {
                // const sectionHeader = document.createElement("h2");
                // sectionHeader.textContent = `States starting with letter "${letter.toUpperCase()}":`;
                // container.appendChild(sectionHeader);
                // displayStatesInHTML(container, sections[letter]);
            // });
            // break;
        // case "sameCapital":
            // displayStates(states.filter(state => state.capital.toLowerCase().includes("")));
            // break;
        case "oldest":
            displayStates(states.filter(state => new Date(state.year) < new Date(1787, 11, 8)));
            break;
        case "newest":
            displayStates(states.filter(state => new Date(state.year) > new Date(1959, 7, 20)));
            break;
        case "all":
            displayStates(states);
            break;
        default:
            break;
    }
}

getStates();

/* Event Listener */

document.getElementById("filtered").addEventListener("change", async function () {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      filterStates(data);
    }
});   
