import React from "react";

export default function CTAButton({ text }) {
  // const handleClick = () => {
  //   alert("call or email CTA! eventually to payment processing");
  // };
  return (
    <div className="cta-button d-flex justify-content-center align-content-center">
      <a
        className="cta-phonecall"
        href="https://wa.me/50237620782"
        // onClick={handleClick}
      >
        {""}
      </a>
      <a
        href="https://wa.me/50237620782"
        className="cta-email"
        // onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {""}
      </a>
      <h4>{text}</h4>
    </div>
  );
}
