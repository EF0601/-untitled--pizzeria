let statistics = {
  coins: 0,
  pizzas: 0,
  dough: 0,
  toppings: 0,
  sauce: 0,
  pizzaValue: 2,
};
const statisticsDisplay = {
  coins: document.querySelector('.coins'),
  pizzas: document.querySelector('.pizzas'),
  dough: document.querySelector('.dough'),
  toppings: document.querySelector('.toppings'),
  sauce: document.querySelector('.sauce'),
  pizzaValue: document.querySelector('.pizzaValue'),
};
function updateValues() {
  statisticsDisplay.coins.textContent = statistics.coins;
  statisticsDisplay.pizzas.textContent = statistics.pizzas;
  statisticsDisplay.dough.textContent = statistics.dough;
  statisticsDisplay.toppings.textContent = statistics.toppings;
  statisticsDisplay.sauce.textContent = statistics.sauce;
  statisticsDisplay.pizzaValue.textContent = statistics.pizzaValue;

  console.log("Values updated successfully.");
}
updateValues();
function codeSubmit() {
  switch (document.querySelector('.codeInput').value) {
    case 'Enter code for THIS game.':
      statistics.coins = statistics.coins + 100;
      statistics.pizzas = statistics.pizzas + 5;
      updateValues();
      disableCodes();
      break;
    case '0.2.0-alpha':
      statistics.coins = statistics.coins + 40;
      statistics.pizzas = statistics.pizzas + 2;
      statistics.dough = statistics.dough + 4;
      statistics.toppings = statistics.toppings + 4;
      statistics.sauce = statistics.sauce + 4;
      updateValues();
      disableCodes();
      break;
    default:
      const currentCodeEntry = document.querySelector('.codeInput').value;
      document.querySelector('.codeInput').value = "CODE IS INVALID!";
      setTimeout(() => {
        document.querySelector('.codeInput').value = currentCodeEntry;
      }, 750);
      break;
  }
}
function disableCodes() {
  document.querySelector('.codeInput').disabled = true;
  document.querySelector('.codeInput').style.borderBottom = "1px solid grey";
}
setInterval(() => {
  if (statistics.pizzas > 0) {
    document.querySelector('.soldPizzas').textContent = statistics.pizzas;
    document.querySelector('.soldPizzasValue').textContent = statistics.pizzas * statistics.pizzaValue;
    statistics.coins = statistics.coins + Number(document.querySelector('.soldPizzasValue').textContent);
    statistics.pizzas = 0;
    updateValues();
  }
  else{
    document.querySelector('.soldPizzas').textContent = 0;
    document.querySelector('.soldPizzasValue').textContent = 0;
  }
}, 1000);
function getItem(thing) {
  switch (thing) {
    case 'dough':
      statistics.dough++;
      break;
    case 'toppings':
      statistics.toppings++;
      break;
    case 'sauce':
      statistics.sauce++;
      break;
    default:
      break;

  }
  updateValues();
}
function makePizza() {
  if (statistics.dough >= 1 && statistics.toppings >= 2 && statistics.sauce >= 1) {
    statistics.pizzas++;
    statistics.dough--;
    statistics.sauce--;
    statistics.toppings = statistics.toppings - 2;
  }
  updateValues();
}
let targetBtn = '';
function autoClick(targetButton){
  targetBtn = targetButton;
}
setInterval(() => {
  switch (targetBtn) {
    case 'pizza':
      document.querySelector('.pizzaBtn').style.border = "10px solid black";
      document.querySelector('.doughBtn').style.border = "none";
      document.querySelector('.toppingsBtn').style.border = "none";
      document.querySelector('.sauceBtn').style.border = "none";
      makePizza();
      break;
    case 'dough':
      document.querySelector('.pizzaBtn').style.border = "none";
      document.querySelector('.doughBtn').style.border = "10px solid black";
      document.querySelector('.toppingsBtn').style.border = "none";
      document.querySelector('.sauceBtn').style.border = "none";
      getItem("dough");
      break;
    case 'toppings':
      document.querySelector('.pizzaBtn').style.border = "none";
      document.querySelector('.doughBtn').style.border = "none";
      document.querySelector('.toppingsBtn').style.border = "10px solid black";
      document.querySelector('.sauceBtn').style.border = "none";
      getItem("toppings");
      break;
    case 'sauce':
      document.querySelector('.pizzaBtn').style.border = "none";
      document.querySelector('.doughBtn').style.border = "none";
      document.querySelector('.toppingsBtn').style.border = "none";
      document.querySelector('.sauceBtn').style.border = "10px solid black";
      getItem("sauce");
      break;
    case '':
      document.querySelector('.pizzaBtn').style.border = "none";
      document.querySelector('.doughBtn').style.border = "none";
      document.querySelector('.toppingsBtn').style.border = "none";
      document.querySelector('.sauceBtn').style.border = "none";
      break;
    default:

      break;
  }
}, 250);
const priceLocations = {
  valuePrice: document.querySelector('.valuePrice'),
  makerPrice: document.querySelector('.makerPrice'),
  doughPrice: document.querySelector('.doughPrice'),
  toppingPrice: document.querySelector('.toppingPrice'),
  saucePrice: document.querySelector('.saucePrice'),
};
let prices = {
  valuePrice: 100,
  makerPrice: 75,
  doughPrice: 50,
  toppingPrice: 50,
  saucePrice: 50,
};
function updatePrices() {
  priceLocations.valuePrice.textContent = prices.valuePrice;
  priceLocations.makerPrice.textContent = prices.makerPrice;
  priceLocations.doughPrice.textContent = prices.doughPrice;
  priceLocations.toppingPrice.textContent = prices.toppingPrice;
  priceLocations.saucePrice.textContent = prices.saucePrice;
}
function buyUpgrades(thing){
  switch (thing) {
    case 'value':
      if (statistics.coins >= prices.valuePrice) {
        statistics.coins = statistics.coins - prices.valuePrice;
        prices.valuePrice = Math.round(prices.valuePrice * 1.65);
        statistics.pizzaValue++;
      }
      break;

    default:
      break;
  }
  updatePrices();
  updateValues();
}
function development() {
  document.querySelector('.devMode').style.display = "block";
  statistics.coins = 99999;
  statistics.dough = 99999;
  statistics.pizzas = 99999;
  statistics.toppings = 99999;
  statistics.sauce = 99999;
  updateValues();
}
