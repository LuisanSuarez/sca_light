import React from "react";
import CTAButton from "./CTAButton";

export default function About() {
  return (
    <div className="vw-100 vh-100">
      <div
        className="vw-100 vh-100 d-flex justify-content-center align-content-center"
        // className=" d-flex justify-content-center align-content-center"
        // style={{ backgroundImage: "url(../img/bg_3.jpg)" }}
        id="static-jumbotron-img"
      >
        <div className="d-flex justify-content-center align-content-center flex-column">
          <h1 className="text-center" id="jumbo-title">
            Olvídate de tu Contabilidad
          </h1>
          <h3 className="text-center" id="jumbo-subtitle">
            Nos preocupamos de tu contabilidad para que tú no te preocupes
          </h3>
          <CTAButton text="Despreocúpame" />
        </div>
      </div>
    </div>
  );
}
