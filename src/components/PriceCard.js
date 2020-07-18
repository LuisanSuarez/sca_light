import React from "react";

export default function PriceCard({ productName, price, identifier }) {
  return (
    <div className={`price-card ${identifier}`}>
      <h3>
        {price}
        <span className="tiny-text">/m</span>
      </h3>

      <h5>{productName}</h5>
      <div className="price-card-cta">Llévenme mi conta</div>
      <a className="cta-phonecall" href="https://wa.me/50257665129">
        {""}
      </a>
      <a
        href="https://wa.me/50257665129"
        className="cta-email"
        target="_blank"
        rel="noopener noreferrer"
      >
        {""}
      </a>
    </div>
  );
}
