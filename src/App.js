import diceButton from "./images/icon-dice.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";

function App() {
  return (
    <div className="container">
      <h1 id="advice" className="container__advice">
        Advice #
      </h1>
      <p id="text" className="container__text"></p>
      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="divider" class="container__divider" />
      </picture>
      <div class="container__btn">
        <button class="container__btn-dice" id="btn">
          <img src={diceButton} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default App;
