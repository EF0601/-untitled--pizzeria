let nameInput = document.querySelector('.nameInput');

setInterval(() => {
  if (nameInput.value == "Untitled") {
    nameInput.value = "Change the name by clicking here!";
    setTimeout(() => {
      if (nameInput.value == "Change the name by clicking here!") {
        nameInput.value = "Untitled";
      }
    }, 2700);
  }
}, 2700);
