const categories = document.getElementById('categories');

const categoryBox = document.querySelector('.category-box');

categories.addEventListener('mousemove', () => {
    categoryBox.style.display = "flex";
})

categories.addEventListener('mouseout', () => {
    categoryBox.style.display = "none";
})

categoryBox.addEventListener('mousemove', () => {
    categoryBox.style.display = "flex";
})
categoryBox.addEventListener('mouseout', () => {
    categoryBox.style.display = "none";
})

// ----------------------------------------------------------------------------------

const create = document.getElementById('create');

const createBox = document.querySelector('.create-box');

create.addEventListener('mousemove', () => {
    createBox.style.display = "block"
})

create.addEventListener('mouseout', () => {
    createBox.style.display = "none"
})

createBox.addEventListener('mousemove', () => {
    createBox.style.display = "block";
})
createBox.addEventListener('mouseout', () => {
    createBox.style.display = "none";
})




// burger box
const burger = document.querySelector(".burger");
const burgerBox = document.querySelector(".burger-box");
const navItems = document.querySelector('.nav-items');

burger.addEventListener('click', () => {

    if (burgerBox.style.display === "flex") {
        // none kr denge to transition effect nahi aayega
        burgerBox.style.display = "block";
        // setTimeout(() => {
        burgerBox.style.height = "0vh";
        // }, 200);

    } else {
        burgerBox.style.display = "flex";

        setTimeout(() => {
            burgerBox.style.height = "40vh";
        }, 100);
        burgerBox.innerHTML = navItems.innerHTML;
    }
})