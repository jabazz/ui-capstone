console.log("CTA-SHOP file loaded");

// HARD Coded Object
let categoryDetails = {
  women: {
    imgURL: "img/shop/kai-gabriel.jpg",
    productHeading: "Plain White Shirt",
    price: "$69.00",
  },
  men: {
    imgURL: "img/shop/arrul.jpg",
    productHeading: "Plain Grey Shirt",
    price: "$39.00",
  },
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryVal = urlParams.get("category");
// console.log(categoryVal);

// let imageVal = categoryDetails[categoryVal]["imgURL"];
// console.log(imageVal);
let imgEle = (document.querySelector(".shop-img-box img").src =
  categoryDetails[categoryVal]["imgURL"]);

// console.log(
//   document
//     .querySelector(".breadcrum-items li:nth-child(3)")
//     .innerHTML.toUpperCase()
// );
document.querySelector(".breadcrum-items li:nth-child(3)").innerHTML =
  categoryVal.toUpperCase();

document.querySelector(".shop-text-box .heading-tertiary").innerHTML =
  categoryDetails[categoryVal]["productHeading"];

document.querySelector(".price .discount-price").innerHTML =
  categoryDetails[categoryVal]["price"];
