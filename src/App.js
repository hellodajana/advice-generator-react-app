import { useState, useEffect } from "react";
import diceButton from "./images/icon-dice.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState([]);
  const loadAdvice = async () => {
    const API_LINK = "https://api.adviceslip.com/advice";
    const res = await fetch(API_LINK, { cache: "no-cache" });
    const data = await res.json();
    const show = data.slip;

    setAdvice(show);
  };

  useEffect(() => {
    loadAdvice();
  }, []);

  return (
    <div className="container">
      <h1 id="advice" className="container__advice">
        Advice #{advice.id}
      </h1>
      <p id="text" className="container__text">
        {advice.advice}
      </p>
      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="divider" className="container__divider" />
      </picture>
      <div className="container__btn">
        <button onClick={loadAdvice} className="container__btn-dice" id="btn">
          <img src={diceButton} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default App;
