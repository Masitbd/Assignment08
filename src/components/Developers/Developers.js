import React, { useEffect, useState } from "react";
import Developer from "../Developer/Developer";
import Card from "../Card/Card";
import "./Developers.css";

const Developers = () => {
  const [informations, setInformations] = useState([]);
  const [card, setCards] = useState([]);

  useEffect(() => {
    fetch("./developers.JSON")
      .then((response) => response.json())
      .then((data) => setInformations(data));
  }, []);
  const handleAddToCard = (information) => {
    console.log(information);
    const newCard = [...card, information];
    setCards(newCard);
  };

  return (
    <div className="developer-container">
      <div className="information-container">
        {informations.map((information) => (
          <Developer
            key={information.id}
            information={information}
            handleAddToCard={handleAddToCard}
          />
        ))}
      </div>
      <div className="card-container">
        <h2 className="cart-header">Add to cart</h2>
        <Card card={card} />
      </div>
    </div>
  );
};

export default Developers;
