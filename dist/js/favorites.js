import { clothes } from './custom.js';
import { addToLocalStorage, addToFavorites, openSignIn, closeSignIn } from './custom.js';


document.addEventListener("DOMContentLoaded", () => {
    displayClothes(items);

})
// containers
const favoritesContainer = document.getElementById("favorites");
const emptyContainer = document.querySelector(".empty-fav");

// local storage
let items = JSON.parse(localStorage.getItem("allEntries"));
console.log(items);
if (items.length === 0) {
    emptyContainer.style.display = "block";
}
// functions
function displayClothes(items) {

    let displayClothes = items.map(item => {
        return ` <div class="col-md-3 col-6">
        <div class="card clothes-card" data-id="${item.id}">
            <div class="card-img-top">
            <img src=${item.img} alt=${item.name} class="img-fluid">
            <div class="card-icon"><i class="fas fa-times" style="color: #6B6B6B;"></i></i></div>
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

    // remove from favorites
    const closeIcons = document.querySelectorAll(".card-icon i");
    closeIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            let dataId = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
            const card = e.target.parentNode.parentNode.parentNode;
            let items = JSON.parse(localStorage.getItem('allEntries'));
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === +dataId) {
                    items.splice(i, 1);
                    card.style.display = "none";
                    break;
                }
            }
            localStorage.setItem("allEntries", JSON.stringify(items));
        })
    })
}

// function addElement(e) {
//     const dataId = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
//     addToLocalStorage(dataId)
// }

// openSignIn();
// closeSignIn();