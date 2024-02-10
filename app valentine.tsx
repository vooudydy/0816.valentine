import { useState } from "react";

import "./App.css";

function App() {
  const [nocount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = nocount * 20 + 16;

  function handleNoClick() {
    setNoCount(nocount + 1);
  }
  function getNoButtonText() {
    const phrases = [
      "no ꘓꞋꞋ៰៰꣓ ",
      "nooo",
      "¿segura?",
      "¿muuuuy segura?",
      "¿segurísima?",
      "ay, embusteee",
      "pero...",
      "ándale, presiona que si",
      "¿pq no presionaste?",
      "¿no me quieres?૮ ྀི ◞  ◟ ა",
      "sigues sin presionar eh",
      "soy este mira ૮₍´˶◞  ◟⑅ ₎ა ",
      "que tristezaaa",
      "emilio dice q le des a si",
      "no se tú eh, yo le daría",
    ];
    return phrases[Math.min(nocount, phrases.length - 1)];
  }

  return (
    <div className="container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/ZG5El6_E9DMAAAAj/milk-and-mocha.gif"
          />
          <div className="text">ESOOO TE AMO!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://media.tenor.com/e52IqqJKaEoAAAAj/milk-mocha.gif"
          />
          <div className="">ari, will you be my valentine?</div>
          <div className="">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
              }}
            >
              SII
            </button>
            <button className="noButton" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
