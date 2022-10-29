let button = document.querySelector(".main__button");


button.addEventListener("click", () => {
  if (button.innerText === "Sprawdź naszą niespodziankę na wyjazd !") {
    button.innerText = "Darmowe piwo marki Harnaś przez cały wyjzazd dla kazdego uczestnika ! "
  }
})