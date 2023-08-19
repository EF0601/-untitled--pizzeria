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
