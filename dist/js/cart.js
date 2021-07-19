import { clothes } from './custom.js';
import { addToFavorites, openSignIn, closeSignIn } from './custom.js';


// containers
const recommendedContainer = document.getElementById("recommended");

// display recommended clothes on cart page
function displayRecommended(items) {

    let recommended = items.map(item => {
        return `<div class="col-lg-2 col-md-3 col-6">
        <div class="card clothes-card">
            <div class="card-img-top">
                <img src=${item.img} class="img-fluid" alt="${item.name} ">
                <div class="card-icon"><i class="far fa-heart"></i></div>
            </div>

            <div class="card-body d-flex align-items-center justify-content-between">

                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.price}</p>

            </div>
        </div>
    </div>`


    })
    let result = recommended.join("");
    recommendedContainer.innerHTML = result;

    addToFavorites();
}

// generate 6 random elements from array
function generateSixRandom() {
    let newArr = [];

    for (let i = 0; i < 6; i++) {
        let arr = clothes[Math.floor(Math.random() * 20)];
        newArr.push(arr);
    }


    displayRecommended(newArr);
}

generateSixRandom();
openSignIn();
closeSignIn();