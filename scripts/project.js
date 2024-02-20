// Final Project

const url = "https://run.mocky.io/v3/acdc33be-96b0-4c71-8d3b-8cf3122982ab";

let statesElement;
let capitalsElement;

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

async function getStates() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayStates(data);
    }
}

function reset () {
    if (!statesElement) {
        statesElement = document.getElementById("states");
    }
      statesElement.innerHTML = "";
}

function filterStates(states) {
    reset();
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "colony":
            displayStates(states.filter(state => new Date(state.year) < new Date(1790, 4, 30)));
            break;
        case "sameState":
            displayStates(states.filter((state, index, array) => {
                const firstLetter = state.name[0].toLowerCase(); // Get the first letter of the state name
                return array.some((otherState, otherIndex) => index !== otherIndex && otherState.name[0].toLowerCase() === firstLetter);
            }));
            break;
        // case "sameCapital":
            // displayCapitals(states.filter((state, index, array) => {
                // const firstLetter = state.capital[0].toLowerCase(); // Get the first letter of the state name
                // return array.some((otherState, otherIndex) => index !== otherIndex && otherState.capital[0].toLowerCase() === firstLetter);
            // }));
            break;    
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


document.getElementById("filtered").addEventListener("change", async function () {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      filterStates(data);
    }
});   
