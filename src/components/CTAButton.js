import React from "react";

export default function CTAButton({ text }) {
  const handleClick = () => {
    alert("call or email CTA! eventually to payment processing");
  };
  return (
    <div
      className="cta-button d-flex justify-content-center align-content-center"
      onClick={handleClick}
    >
      <h4>{text}</h4>
    </div>
  );
}
