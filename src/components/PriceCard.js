import React from "react";

export default function PriceCard({ productName, price }) {
  const handleClick = () => {
    console.log("call mobile, email desktop");
  };
  return (
    <div className="price-card">
      <h3>{price}</h3>
      <h5>{productName}</h5>
      <div className="price-card-cta" onClick={handleClick}>
        Llévenme mi conta
      </div>
      <a
        className="cta-phonecall"
        href="tel:+502-5766-5129"
        onClick={handleClick}
      >
        {""}
      </a>
      <a
        href="mailto:info@scacontabilidad.com"
        className="cta-email"
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {""}
      </a>
    </div>
  );
}
