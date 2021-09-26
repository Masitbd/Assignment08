import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = (props) => {
  console.log(props);
  const { card } = props;
  let total = 0;

  for (const information of card) {
    total = total + information.salary;
  }
  return (
    <div>
      {
        <h3>
          <span className="user">
            <FontAwesomeIcon icon={faUser} />
          </span>
          Developers Added: {card.length}
        </h3>
      }
      {<h3>Total Salary: {total}</h3>}

      {card.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default Card;
