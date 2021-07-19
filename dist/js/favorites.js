import { clothes } from './custom.js';
import { addToFavorites, openSignIn, closeSignIn } from './custom.js';


document.addEventListener("DOMContentLoaded", () => {
    displayClothes(items);

})
// containers
const favoritesContainer = document.getElementById("favorites");

// local storage
let items = JSON.parse(localStorage.getItem("allEntries"));
console.log(items);

// functions
function displayClothes(items) {

    let displayClothes = items.map(item => {
        return ` <div class="col-md-3 col-6">
        <div class="card clothes-card" data-id="${item.id}">
            <div class="card-img-top">
            <img src=${item.img} alt=${item.name} class="img-fluid">
            <div class="card-icon"><i class="far fa-heart"></i></div>
            </div>

            <div class="card-body d-flex align-items-center justify-content-between">

                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.price}$</p>

            </div>
        </div>
    </div>`
    })

    let result = displayClothes.join("");
    favoritesContainer.innerHTML = result;

    addToFavorites();
}


// openSignIn();
// closeSignIn();