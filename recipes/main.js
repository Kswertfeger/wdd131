import recipes from './recipes.mjs';

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

// Function to generate a random number
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Function to get a random entry from an array
function getRandomEntry(arr) {
    const randomIndex = generateRandomNumber(arr.length);
    return arr[randomIndex];
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = Math.floor(Math.random() * listLength);
    return list[randomNum];
}

// Test the functions
const randomRecipe = getRandomEntry(recipes);
console.log("Randomly Selected Recipe:", randomRecipe);

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    // Corrected selector
    const outputElement = document.querySelector('.recipe-container');

    // Ensure the element exists
    if (!outputElement) {
        console.error("Output element not found.");
        return;
    }

    // Generate and set the HTML
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipeHTML;
}

function init() {
    // Get a random recipe
    const recipe = getRandomListEntry(recipes);

    // Render the recipe
    renderRecipes([recipe]); // Convert single recipe object into an array
}

init();

const searchButton = document.querySelector('.search_img'); // Ensure this matches your button class
searchButton.addEventListener('click', searchHandler);

function searchHandler(event) {
    event.preventDefault(); // Prevents page reload if necessary
    const searchInput = document.querySelector('#search').value.toLowerCase(); // Get and lowercase input
    const filteredRecipes = filterRecipes(searchInput); // Call filterRecipes
    renderRecipes(filteredRecipes); // Render the filtered recipes
}

function filterRecipes(query) {
    return recipes
        .filter(recipe => {
            // Check name, description, tags, and ingredients
            return (
                recipe.name.toLowerCase().includes(query) || // Match name
                recipe.description.toLowerCase().includes(query) || // Match description
                recipe.tags.find(tag => tag.toLowerCase().includes(query)) || // Match tags
                recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query)) // Match ingredients
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
}