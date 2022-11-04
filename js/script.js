{
  const welcome = () => {
    console.log("Witam serdecznie wszystkich developerów, którzy tu zaglądają.")
  };

  const onChangeTextClick = () => {
    if (button.innerText === "Sprawdź naszą niespodziankę na wyjazd !") {
      button.innerText = "Darmowe piwo marki Harnaś przez cały wyjzazd dla kazdego uczestnika ! "
    }
  };

  const button = document.querySelector(".main__button");

  const init = () => {
    button.addEventListener("click", onChangeTextClick);

    welcome();
  };

  init();
};



