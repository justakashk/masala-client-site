import React from "react";
import "./AvailableAt.css";
import flipkart from "../../assets/flipkart-logo.png";

const AvailableAt = () => {
  return (
    <section className="available">
      <h3 className="available-title">Available at</h3>

      <div className="platform-logos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/JioMart_logo.svg/1280px-JioMart_logo.svg.png"
          alt="Jio"
        />
        <img
          src={flipkart}
          alt="Flipkart"
        />
      </div>
    </section>
  );
};

export default AvailableAt;