import React from "react";
import "./Singlecard.css";

const Singlecard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} />
        <img className="back" src="/img/cover.png" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Singlecard;
