
import { formMenuBtn } from './index.js';
import { clothes } from './custom.js';
import { addToLocalStorage, addToFavorites, openSignIn, closeSignIn, getLocalStorage } from './custom.js';


document.addEventListener("DOMContentLoaded", () => {
    // displayClothes(localStorageList);


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
console.log(localStorageList);

// functions

function addListItem(list1, list2) {
    let newList = [];
    for (let i = 0; i < list1.length; i++) {
        // console.log(list1[i].id);
        for (let j = 0; j < list2.length; j++) {
            if (list1[i].id === list2[j].id) {
                newList.push(list2[j].id);
            }
            // console.log(list2[j].id);
        }
    }
    console.log(newList);

}

addListItem(localStorageList, clothes);
// function createListItem(valueID) {
//     const element = document.createElement('div');
//     element.classList.add('card', 'clothes-card');
//     const attr = document.createAttribute('data-id');
//     attr.value = valueID;

//     element.setAttributeNode(attr);
//     element.innerHTML = `<div class="card clothes-card" data-id="${item.id}">
//     //             <div class="card-img-top">
//     //             <img src=${item.img} alt=${item.name} class="img-fluid">
//     //             <div class="card-icon"><i class="fas fa-times" style="color: #6B6B6B;"></i></i></div>
//     //             </div>

//     //             <div class="card-body d-flex align-items-center justify-content-between">

//     //                     <h5 class="card-title">${item.name}</h5>
//     //                     <p class="card-text">${item.price}$</p>

//     //             </div>
//     //         </div>`;

//     const deleteBtn = element.querySelector('.delete-btn');
//     deleteBtn.addEventListener('click', deleteItem);


//     favoritesContainer.appendChild(element);
// }



// function displayClothes(items) {

//     let displayClothes = items.map(item => {
//         return ` <div class="col-md-3 col-6">
//         <div class="card clothes-card" data-id="${item.id}">
//             <div class="card-img-top">
//             <img src=${item.img} alt=${item.name} class="img-fluid">
//             <div class="card-icon"><i class="fas fa-times" style="color: #6B6B6B;"></i></i></div>
//             </div>

//             <div class="card-body d-flex align-items-center justify-content-between">

//                     <h5 class="card-title">${item.name}</h5>
//                     <p class="card-text">${item.price}$</p>

//             </div>
//         </div>
//     </div>`
//     })

//     let result = displayClothes.join("");
//     favoritesContainer.innerHTML = result;

//     // remove from favorites
//     // const closeIcons = document.querySelectorAll(".card-icon i");
//     // closeIcons.forEach(icon => {
//     //     icon.addEventListener("click", (e) => {
//     //         let dataId = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
//     //         const card = e.target.parentNode.parentNode.parentNode;
//     //         let items = JSON.parse(localStorage.getItem('allEntries'));
//     //         for (let i = 0; i < items.length; i++) {
//     //             if (items[i].id === +dataId) {
//     //                 items.splice(i, 1);
//     //                 card.style.display = "none";
//     //                 break;
//     //             }
//     //         }
//     //         localStorage.setItem("allEntries", JSON.stringify(items));
//     //     })
//     // })
// }

// function addElement(e) {
//     const dataId = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");
//     addToLocalStorage(dataId)
// }


// compareIds(localStorageList, clothes);
openSignIn();
closeSignIn();