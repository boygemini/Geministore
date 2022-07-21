"use strict"

let images = document.querySelectorAll(".imgs");
let intro = document.getElementById("intro");
let intro2 = document.getElementById("intro2");
let gradient = document.getElementById("gradient");
let intoText = document.getElementById("introtext")
let lm = document.getElementById("lm");
let counter = -1 ;
let introContent = [
  "Welcome to the world of ",
  "Check out the new ",
  "Check out the latest ",
  "Check out the latest ",
  "Check out the new ",
];

let intro2Content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quibusdam.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sequi!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae!",
  "Lorem ipsum, sit amet consectetur adipisicing elit. Repudiandae!",
];

let lmContent = ["New!", "New!", "New!", "New!", "New!"];

let gradientContent = [
  "Electronics",
  "iPhone 13 Pro Max",
  "JBL Flip 6",
  "Mackbook Pro Core M2",
  "Oraimo Airpod",
];


images[0].style.display = "block";
const startSlide = () => {
  disOther();
  increSlide();
};


const disOther = () => {
  try {
    for (let i = 0; i <= images.length; i++) {
      images[i].style.display = "none";
    }
  } catch (error) {};
};


const increSlide = () => {
  disOther();
  counter++;
  if (counter === 5) {
    counter = 0;
  }
placing()
};


// const decreSlide = () => {
//     disOther();
//     counter--;
//     if (counter <= -1) {
//       counter = 4;
//     }
//     console.log(counter);
//     placing()
//   };


const placing = () => {
  images[counter].style.display = "block";
  images[counter].style.opacity = "0";
  intro.innerHTML = introContent[counter];
  intro2.innerHTML = intro2Content[counter];
  lm.innerText = lmContent[counter];
  gradient.innerHTML = gradientContent[counter];
  setTimeout(()=>{
    intoText.className += " rollin"
    intoText.className = intoText.className.replace(" rollin", " rollout")
    setTimeout(() => {
      intoText.className = intoText.className.replace(" rollout", " rollin")
    },400);
  },8500)
}

startSlide();
setInterval(startSlide, 9000);

const shopNow = () => {
  window.location = "gemshop.html"
}

//End of Hero

//Selected For you

let Gaming = [
  {
    "name": "XBOX 1",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "XBOX 2",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$984"
  },
  {
    "name": "XBOX 3",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$1,230",
    "oldItemPrice": ""
  },
  {
    "name": "XBOX 4",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$1,130",
    "oldItemPrice": "$1,050"
  },
  {
    "name": "XBOX 5",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor",
    "newItemPrice": "$1,930.99",
    "oldItemPrice": "$2,050"
  },
  {
    "name": "XBOX 6",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$1,130",
    "oldItemPrice": "$1,050"
  },
  {
    "name": "XBOX 7",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor",
    "newItemPrice": "$1,930.99",
    "oldItemPrice": "$2,050"
  },
  {
    "name": "PS 3",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor",
    "newItemPrice": "$1,930.99",
    "oldItemPrice": "$2,050"
  },
  {
    "name": "PS 4",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$1,130",
    "oldItemPrice": "$1,050"
  },
  {
    "name": "PS 4",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor",
    "newItemPrice": "$1,930.99",
    "oldItemPrice": "$2,050"
  }
];


let cellPhones = [
  {
    "name": "iPhone 12 mini",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem as",
    "newItemPrice": "$630.59",
    "oldItemPrice": "$544"
  },
  {
    "name": "iPhone 12 Pro Max",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "iPhone 11",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$850",
    "oldItemPrice": ""
  },
  {
    "name": "iPhone 11 Pro Max",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "iPad Pro",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$1,030",
    "oldItemPrice": "$1,200"
  },
  {
    "name": "iPhone 12 mini",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem as",
    "newItemPrice": "$630.59",
    "oldItemPrice": "$544"
  },
  {
    "name": "iPhone 12 Pro Max",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "iPhone 11",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$850",
    "oldItemPrice": ""
  },
  {
    "name": "iPhone 11 Pro Max",
    "itemImg" : "/IMAGES/frontIpad.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "iPad Pro",
    "itemImg" : "/IMAGES/ipad2.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$1,030",
    "oldItemPrice": "$1,200"
  }
];

let Speaker = [
  {
    "name": "JBl Flip 6",
    "itemImg" : "/IMAGES/jblflip6.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "JBl Headphone",
    "itemImg" : "/IMAGES/headphone.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$330",
    "oldItemPrice": "$444.50"
  },
  {
    "name": "JBl Flip 6",
    "itemImg" : "/IMAGES/jblflip6.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "JBl Headphone",
    "itemImg" : "/IMAGES/headphone.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$330",
    "oldItemPrice": "$444.50"
  },
  {
    "name": "JBl Flip 6",
    "itemImg" : "/IMAGES/jblflip6.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "JBl Headphone",
    "itemImg" : "/IMAGES/headphone.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$330",
    "oldItemPrice": "$444.50"
  },
  {
    "name": "JBl Flip 6",
    "itemImg" : "/IMAGES/jblflip6.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "JBl Headphone",
    "itemImg" : "/IMAGES/headphone.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$330",
    "oldItemPrice": "$444.50"
  },
  {
    "name": "JBl Flip 6",
    "itemImg" : "/IMAGES/jblflip6.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "$544"
  },
  {
    "name": "JBl Headphone",
    "itemImg" : "/IMAGES/headphone.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$330",
    "oldItemPrice": "$444.50"
  }
];

let Computers = [
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/bigmonitor.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "L",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum ",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/bigmonitor.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "L",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum ",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/bigmonitor.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "L",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "Apple Monitor",
    "itemImg" : "/IMAGES/bigmonitor.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "L",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  }
];

let TV = [
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv5.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv2.jpg",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv1.jpg",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv5.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv2.jpg",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv1.jpg",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv4.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  },
  {
    "name": "LG",
    "itemImg" : "/IMAGES/tv5.png",
    "description1": "Lorem ipsum dolor sit amet.",
    "description2": "Lorem ipsum dolor sit amet.",
    "newItemPrice": "$630",
    "oldItemPrice": "544"
  }
];

let itemName = document.querySelectorAll("#itemName"),
    mainDesc = document.querySelectorAll("#maindesc"),
    minDesc = document.querySelectorAll("#mindesc"),
    oldPrice = document.querySelectorAll("#oldprice"),
    newPrice = document.querySelectorAll("#newprice");

let Holder = document.getElementById("sel-container")

const createItem = (category) => {
  let itemCreated = " "
  for(let i in category){
    itemCreated += `<div class="sell-box sel-box">
    <div class="img-con">
        <img src=${category[i].itemImg} alt="">
    </div>
    <div class="sfu">
        <p class="itemName2"">${category[i].name}</p>
        <div class="description-box">
            <p class="item-description">${category[i].description1}</p>
            <p class="item-description">${category[i].description2}</p>
        </div>
        <div class="price-order">
            <span class="price-box">
                <span class="price">${category[i].newItemPrice}</span>
                <span class="old-price price">${category[i].oldItemPrice}</span>
            </span>
            <img id="add-to-cart-img" src="/IMAGES/add-to-cart.png" alt="">
        </div>
    </div>
</div>`
  }
  Holder.innerHTML = itemCreated;
}

createItem(Gaming)

let tab = [...document.querySelectorAll(".tab")]
tab[0].className = " active-li"
for(let x in tab){
  tab[x].addEventListener("click", (e)=>{
    event.target.className += " active-li"
  })
}
//end


//Selected for You

let boxCounter = 0;
let container = document.getElementById("sel-container")
let holder = document.getElementById("sel-holder")
let box = [...document.querySelectorAll(".sell-box")];

const moveRight = () => {
  holder.scrollLeft += holder.clientWidth
}

const moveLeft = () => {
  holder.scrollLeft -= holder.clientWidth
}
//end






//Menu

let menu = document.getElementById("menu"), mb = document.getElementById("mb")
let close = document.querySelectorAll("#close");
menu.style.display = "none"

const removePadding = () => {
  menu.style.height = "0px"
  menu.style.padding = "0px";
}

const openMenu = (e) => {
menu.style.display = "flex"
removePadding()
setTimeout(()=>{
  menu.style.paddingTop = "20px";
    menu.style.height = "400px";
  },20)
}

const closeMenu = () => {
removePadding()
setTimeout(() => {
  menu.style.display = "none"
}, 520);
}

document.addEventListener("click", (e)=>{
  if(e.target !== menu && menu.clientHeight > 0){
    removePadding()
  }
})
//end