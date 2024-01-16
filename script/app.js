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
        brand: "Ibanez JEM Jr",
        subname: "Steve Vai sugnature model",
        desc: "American series",
        picture: "pic1.jpg",
        price: 250000,
        inStock: true,
    },
    {
        id: 2,
        brand: "Fender Startocaster",
        subname: "Black",
        desc: "American series",
        picture: "pic2.jpg",
        price: 134500,
        inStock: true,
    },
    {
        id: 3,
        brand: "Gibson Les Paul",
        subname: "Standard",
        desc: "American series",
        picture: "pic3.jpg",
        price: 670000,
        inStock: true,
    },
    {
        id: 4,
        brand: "Gibson SG",
        subname: "Standard",
        desc: "American series",
        picture: "pic4.jpg",
        price: 400000,
        inStock: true,
    },
    {
        id: 5,
        brand: "Ibanez PIA3761",
        subname: "Steve Vai Signature Pia",
        desc: "American series",
        picture: "pic5.jpg",
        price: 350000,
        inStock: true,
    },
    {
        id: 6,
        brand: "Ibanez JS2GD ",
        subname: "Joe Satriani sugnature model",
        desc: "American series",
        picture: "pic6.jpg",
        price: 987000,
        inStock: true,
    },
    {
        id: 7,
        brand: "Ibanez PS3",
        subname: "Paul Stanley sugnature model",
        desc: "American series",
        picture: "pic7.jpg",
        price: 1235000,
        inStock: true,
    },
    {
        id: 8,
        brand: "Ibanez JIVA JR",
        subname: "Nita Strauss sugnature model",
        desc: "American series",
        picture: "pic8.jpg",
        price: 300000,
        inStock: true,
    },
]



/* render function */
const produtctSection = document.getElementById('products');


guitars.forEach(guitar => {
    produtctSection.innerHTML += `
    <div class="products__card">
    <img src="./img/${guitar.picture}" alt="gitár kép">
    <h2>${guitar.brand}</h2>
    <p>${guitar.subname}</p>
    <h3>${guitar.price} Ft</h3>
    <a id=${guitar.id} class="btn addToCart"><i class="fi-shopping-cart" id="card__cart-icon"></i>Kosárba</a>
    </div>
    `
})

/*  cart management */

const cart = {};

const addToCartButtons = document.getElementsByClassName('addToCart');
const buttonsCount = addToCartButtons.length;
for (let i = 0; i < buttonsCount; i++) {
   
    addToCartButtons[i].addEventListener('click', (event) => {
        if (cart[event.target.id] === undefined) {
            cart[event.target.id] = 1;
        } else  {
            cart[event.target.id]++;
        }
    })
}

/*  display cart and products  */
const cartIcon = document.getElementById('cart-icon');
const cartContent = document.getElementById('cart-content');
const cartItems = document.getElementById('cart-items');

cartIcon.addEventListener('click', ()=> {
    cartContent.classList.toggle('active');
    cartIcon.classList.toggle('fi-shopping-cart');
    cartIcon.classList.toggle('fi-arrow-up');

    for (const id in cart) {
        const currentProduct = guitars.find(guitar => guitar.id == id);
        cartItems.innerHTML +=`<li>
        ${cart[id]} db -
        ${currentProduct.brand} -
        ${currentProduct.price} Ft/db
        </li>`
    
    }
})