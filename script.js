let menu = [
  {
    category: "breakfast",
    image: "../images/snack1.jpg",
    heading: "Delecious Burger",
    price: "$10",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "breakfast",
    image: "../images/snack2.jpg",
    heading: "Special Hotdog",
    price: "$5",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "breakfast",
    image: "../images/snack3.jpg",
    heading: "Cheese Chilli",
    price: "$10",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "breakfast",
    image: "../images/snack4.jpg",
    heading: "Delecious French Fries",
    price: "$4",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "beverages",
    image: "../images/beverage1.jpg",
    heading: "Ruabja Special",
    price: "$10",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "beverages",
    image: "../images/beverage2.jpg",
    heading: "Mojito With Flavours",
    price: "$15",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "beverages",
    image: "../images/beverage3.jpg",
    heading: "Apple and Green Juice",
    price: "$5",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "beverages",
    image: "../images/beverage4.jpg",
    heading: "Wiskey",
    price: "$20",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "dinner",
    image: "../images/dinner1.jpg",
    heading: "Fish Fray",
    price: "$49",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "dinner",
    image: "../images/dinner2.jpg",
    heading: "Special Salids",
    price: "$9",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "dinner",
    image: "../images/dinner3.jpg",
    heading: "Spicy Meat",
    price: "$199",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
  {
    category: "dinner",
    image: "../images/dinner4.jpg",
    heading: "Egg Omlet",
    price: "$19",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, rem. Molestias ratione quae sequi cumque adipisci voluptatem fugit ex rem.",
  },
];

let itemsCn = document.querySelector(".menu-items");
let btnCon = document.getElementById("btns");

//adding event on window load
window.addEventListener("DOMContentLoaded", () => {
  displayItems(menu);
  dynanicButtons();
});

// creating a function of desplaying items
function displayItems(array) {
  let items = array
    .map((item) => {
      return `<div class="item">
          <div class="img">
              <img src="${item.image}" alt="menu-img">
          </div>
          <div class="info">
              <div class="heading">
                  <h4>${item.heading}</h4>
                  <span>${item.price}</span>
              </div><hr>
              <div class="text">
                  <p>${item.text}</p>
              </div>
          </div>
      </div>`;
    })
    .join("");
    
  itemsCn.innerHTML = items;
}

//creating dynamic btn function
function dynanicButtons() {
  //extracting categories
  let indivCat = menu.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    },
    ["all"]
  );

  //making btns through individual categories
  let dynamicBtns = indivCat
    .map((element) => {
      return `<button class="btn" data-id=${element}>${element}</button>`;
    })
    .join("");
   
  btnCon.innerHTML = dynamicBtns;

  //target btns
  let btns = document.querySelectorAll(".btn");

  //adding a functionality on btns
  btns.forEach((btn) => {
    btn.addEventListener("click", (element) => {
      let currBtnCategory = element.currentTarget.dataset.id;
      let categoryItem = menu.filter((item) => {
        return item.category === currBtnCategory;
      });
      displayItems(categoryItem);
      if (currBtnCategory === "all") {
        displayItems(menu);
      }
    });
  });
}

