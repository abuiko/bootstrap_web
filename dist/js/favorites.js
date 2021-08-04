
import { formMenuBtn } from './index.js';
import { clothes } from './custom.js';
import { addToLocalStorage, addToFavorites, openSignIn, closeSignIn, getLocalStorage } from './custom.js';


document.addEventListener("DOMContentLoaded", () => {
    displayClothes(favorites);


})
// containers
const favoritesContainer = document.getElementById("favorites");
const emptyContainer = document.querySelector(".empty-fav");

// event listeners
formMenuBtn.forEach(btn => btn.addEventListener('click', () => {
    menuForm.classList.toggle('open');
}))

// local storage
const localStorageList = getLocalStorage();
const favorites = getMatch(localStorageList, clothes);



// functions

// to find objects with the same id
function getMatch(a, b) {
    let matches = [];

    for (let i = 0; i < a.length; i++) {

        for (let e = 0; e < b.length; e++) {
            if (a[i].id == b[e].id) matches.push(b[e]);

        }
    }

    return matches;
}

// to display found objects in the favories section
function displayClothes(items) {
    if (JSON.parse(localStorage.getItem('list')).length > 0) {
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

    } else {
        emptyContainer.classList.add('open');
    }

    // remove from favorites
    const closeIcons = document.querySelectorAll(".card-icon i");
    closeIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            let dataId = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
            const card = e.target.parentNode.parentNode.parentNode;
            let items = JSON.parse(localStorage.getItem('list'));
            for (let i = 0; i < items.length; i++) {
                if (items[i].id == +dataId) {
                    items.splice(i, 1);
                    card.style.display = "none";
                    break;
                }
            }
            localStorage.setItem("list", JSON.stringify(items));
        })
    })



}



openSignIn();
closeSignIn();