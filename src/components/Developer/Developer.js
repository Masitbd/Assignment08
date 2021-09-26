import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Developer.css";

const Developer = (props) => {
  const { name, gender, age, salary, img, country } = props.information;

  return (
    <div className="display-card">
      <img src={img} alt="" height="200" width="100%" />
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Salary: {salary}</h4>
      <h4>Country: {country}</h4>
      <button
        onClick={() => props.handleAddToCard(props.information)}
        className="btn-regular"
      >
        <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
      </button>
    </div>
  );
};

export default Developer;
