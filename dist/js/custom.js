window.addEventListener("DOMContentLoaded", () => {
    displayClothes(clothes);
    filterClothes(clothes);
    sortClothes(clothes);
})

// Clothes Array

const clothes = [
    {
        id: 1,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/clothes/dress.jpeg",
        type: 'dress',
        stars: 5,

    },
    {
        id: 2,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/clothes/dress2.jpeg",
        type: 'dress',
        stars: 3.9,
    },
    {
        id: 3,
        name: "Cotton Dress",
        price: 17.99,
        img: "/dist/img/clothes/dress3.jpeg",
        type: 'dress',
        stars: 4.4,
    },
    {
        id: 4,
        name: "Bikini Top",
        price: 7.99,
        img: "/dist/img/clothes/bikini.jpeg",
        type: 'top',
        stars: 4.2,
    },
    {
        id: 5,
        name: "Cotton Blouse",
        price: 12.99,
        img: "/dist/img/clothes/blouse.jpeg",
        type: 'top',
        stars: 3.2,
    },
    {
        id: 6,
        name: "Hoodie",
        price: 27.99,
        img: "/dist/img/clothes/hoodie.jpeg",
        type: 'top',
        stars: 4.9,
    },
    {
        id: 7,
        name: "Jacket",
        price: 27.99,
        img: "/dist/img/clothes/jacket.jpeg",
        type: 'top',
        stars: 4,
    },
    {
        id: 8,
        name: "Pants",
        price: 15.99,
        img: "/dist/img/clothes/pants.jpeg",
        type: 'bottom',
        stars: 4.1,
    },
    {
        id: 9,
        name: "Pants",
        price: 15.99,
        img: "/dist/img/clothes/pants2.jpeg",
        type: 'bottom',
        stars: 3.8,
    },
    {
        id: 10,
        name: "Shorts",
        price: 15.99,
        img: "/dist/img/clothes/shorts.jpeg",
        type: 'bottom',
        stars: 4.6,
    },
    {
        id: 11,
        name: "Sweatshirt",
        price: 15.99,
        img: "/dist/img/clothes/sweatshirt.jpeg",
        type: 'top',
        stars: 3.1,
    },
    {
        id: 12,
        name: "Sweatshirt",
        price: 15.99,
        img: "/dist/img/clothes/sweatshirt2.jpeg",
        type: 'top',
        stars: 5,
    },
    {
        id: 13,
        name: "Top",
        price: 15.99,
        img: "/dist/img/clothes/top.jpeg",
        type: 'top',
        stars: 2.7,
    },
    {
        id: 14,
        name: "Top",
        price: 15.99,
        img: "/dist/img/clothes/top2.jpeg",
        type: 'top',
        stars: 4.2,
    },
    {
        id: 14,
        name: "Top",
        price: 15.99,
        img: "/dist/img/clothes/top3.jpeg",
        type: 'top',
        stars: 3.5,
    },
    {
        id: 15,
        name: "Top",
        price: 15.99,
        img: "/dist/img/clothes/top5.jpeg",
        type: 'top',
        stars: 4,
    },
    {
        id: 16,
        name: "Top",
        price: 15.99,
        img: "/dist/img/clothes/vest.jpeg",
        type: 'top',
        stars: 5,
    },
    {
        id: 18,
        name: "Pleated Skirt",
        price: 13.99,
        img: "/dist/img/clothes/skirt.jpeg",
        type: 'bottom',
        stars: 4.6,
    },
    {
        id: 19,
        name: "Cropped Sweatshirt",
        price: 23.99,
        img: "/dist/img/clothes/sweatshirt3.jpeg",
        type: 'top',
        stars: 4.9,
    },
    {
        id: 20,
        name: "Bodysuit",
        price: 23.99,
        img: "/dist/img/clothes/bodysuit.jpeg",
        type: 'top',
        stars: 4.1,
    },

]

// containers

const clothesContainer = document.querySelector(".clothes");
const signInContainer = document.querySelector(".signin-wrapper");

// event listeners
const signInBtns = document.querySelectorAll(".signin-btn");
signInBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        signInContainer.classList.add("open");
    })
})

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener('click', () => {
    signInContainer.classList.remove("open");
})

const filterBtns = document.querySelectorAll(".filter-btn");
const sortBtns = document.querySelectorAll(".sort-btn");

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

// FILTER FUNCTION
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
        } else {
            displayClothes(items);
        }

    }))
}

// toggles heart icon on click
function addToFavorites(items) {
    const heartIcons = document.querySelectorAll(".card-icon i");
    heartIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.target.classList.toggle("far");
            e.target.classList.toggle("fas");
            let dataId = e.target.parentNode.parentNode.parentNode.getAttribute("data-id");

            // let favoriteClothes = clothes[dataId - 1];
            // let myObj_serialized = JSON.stringify(favoriteClothes);
            // localStorage.setItem("favorites", myObj_serialized);

            // let myObj_deserialized = JSON.parse(localStorage.getItem("favorites"));
            // console.log(myObj_deserialized);
        })
    })
}



// let myObj = {
//     name: "Alena",
//     age: 29
// }

// let myObj_serialized = JSON.stringify(myObj);
// localStorage.setItem("myObj", myObj_serialized);

// let myobj_deserialized = JSON.parse(localStorage.getItem("myObj"));
// console.log(myobj_deserialized);






