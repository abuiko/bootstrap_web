import { clothes } from './custom.js';
import { addToFavorites, openSignIn, closeSignIn } from './custom.js';


document.addEventListener("DOMContentLoaded", () => {
    displayClothes(clothes);
    filterClothes(clothes);
    sortClothes(clothes);
})

// containers
const clothesContainer = document.getElementById("clothes");
const menuForm = document.querySelector(".menu-form");
// buttons
const filterBtns = document.querySelectorAll(".filter-btn");
const sortBtns = document.querySelectorAll(".sort-btn");


export const formMenuBtn = document.querySelectorAll(".navbar-toggler");

formMenuBtn.forEach(btn => btn.addEventListener('click', () => {
    menuForm.classList.toggle('open');
}))


// functions

// displays clothes cards on main page
function displayClothes(items) {

    let displayClothes = items.map(item => {
        return ` <div class="col-6 col-md-4 col-lg-3">
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
    clothesContainer.innerHTML = result;

    addToFavorites();
}

//  FILTER FUNCTION
function filterClothes(items) {
    filterBtns.forEach(btn => btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (btn.innerText === "Tops") {
            let tops = items.filter(item => item.type === "top");
            displayClothes(tops);
        } else if (btn.innerText === "Bottoms") {
            let bottoms = items.filter(item => item.type === "bottom");
            displayClothes(bottoms);
        } else if (btn.innerText === "Dresses") {
            let dresses = items.filter(item => item.type === "dress");
            displayClothes(dresses);
        } else {
            displayClothes(items);
        }
    }))
}

// SORT FUNCTION
function sortClothes(items) {
    sortBtns.forEach(btn => btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (btn.innerText === "From Low To High") {
            let fromLow = items.sort((item1, item2) => item1.price - item2.price);
            displayClothes(fromLow);
        } else if (btn.innerText === "From High To Low") {
            let fromHigh = items.sort((item1, item2) => item2.price - item1.price);
            displayClothes(fromHigh);
        } else if (btn.innerText === "Trending") {
            let trending = items.sort((item1, item2) => item2.stars - item1.stars);
            displayClothes(trending);
        }

    }))
}

openSignIn();
closeSignIn();