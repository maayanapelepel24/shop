const productContainer = document.getElementById("products-container");

const productsArray = [];

productsArray.push({
  name: "Black Tea",
  amount: 99,
  price: 20,
});

productsArray.push({
  name: "Coffe",
  amount: 2,
  price: 21,
});

productsArray.push({
  name: "Milk",
  amount: 100,
  price: 3,
});

productsArray.push({
  name: "Green Tea",
  amount: 70,
  price: 25,
});

for (let i = 0; i < productsArray.length; i++) {
  const productDIV = document.createElement("div");
  productDIV.classList.add("product");

  const productNameDIV = document.createElement("div");
  productNameDIV.innerHTML = productsArray[i].name;
  productDIV.appendChild(productNameDIV);

  const productAmountDIV = document.createElement("div");
  productAmountDIV.innerHTML = "Amount: " + productsArray[i].amount;
  productDIV.appendChild(productAmountDIV);

  productContainer.appendChild(productDIV);
}
