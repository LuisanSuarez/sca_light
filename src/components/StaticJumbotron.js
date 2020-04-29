import React from "react";

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
          <h1 style={{ width: "100%", textAlign: "center" }}>
            Olvídate de tu Contabilidad
          </h1>
          <h3 style={{ width: "100%", textAlign: "center" }}>
            Nos preocupamos de tu contabilidad para que tú no te preocupes
          </h3>
        </div>
      </div>
    </div>
  );
}
