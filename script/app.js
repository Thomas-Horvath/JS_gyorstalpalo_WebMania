const nav = document.getElementById('nav');
const menu = document.querySelector('#hamburgerMenu');
const links = document.querySelectorAll('.link');

menu.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
    menu.classList.toggle('fi-align-justify');
    menu.classList.toggle('fi-arrow-left');
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
        menu.classList.toggle('fi-align-justify');
        menu.classList.toggle('fi-arrow-left');
    })
});


/* shop products' datas */
const guitars = [
    {
        id: 1,
        brand: "Ibanez JEM Jr - Yellow",
        subname: "Steve Vai sugnature model",
        desc: "American series",
        picture: "../img/pic1",
        price: 250000,
        inStock: true,
    },
    {
        id: 2,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic2",
        price: 250000,
        inStock: true,
    },
    {
        id: 3,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic3",
        price: 250000,
        inStock: true,
    },
    {
        id: 4,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic4",
        price: 250000,
        inStock: true,
    },
    {
        id: 5,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic5",
        price: 250000,
        inStock: true,
    },
    {
        id: 6,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic6",
        price: 250000,
        inStock: true,
    },
    {
        id: 7,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic7",
        price: 250000,
        inStock: true,
    },
    {
        id: 8,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic8",
        price: 250000,
        inStock: true,
    },
    {
        id: 9,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic9",
        price: 250000,
        inStock: true,
    },
    {
        id: 10,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic10",
        price: 250000,
        inStock: false,
    },
    {
        id: 11,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic11",
        price: 250000,
        inStock: true,
    },
    {
        id: 12,
        name: "Fender Stratocaster",
        subname: "ag-340",
        desc: "American series",
        picture: "../img/pic12",
        price: 250000,
        inStock: true,
    }
]

/* render function */
const produtctSection = document.getElementById('products');

/* produtctSection.innerHTML = `
<div><h2>${guitars[0].name}</h2>
</div>
` */