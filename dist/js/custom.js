window.addEventListener("DOMContentLoaded", () => {
    displayClothes(clothes);

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

// functions

function displayClothes(items) {


    let displayClothes = items.map(item => {
        return ` <div class="col-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="card-img-top">
            <img src=${item.img} alt=${item.name} class="img-fluid">
            <div class="card-icon"><i class="far fa-heart"></i></div>
            </div>
            
            <div class="card-body d-flex align-items-center justify-content-between">
                <div>
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.price}</p>
                </div>
               
            </div>
        </div>
    </div>`
    })


    let result = displayClothes.join("");
    clothesContainer.innerHTML = result;
}


