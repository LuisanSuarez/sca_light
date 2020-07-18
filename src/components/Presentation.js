import React, { useState, useEffect } from "react";

export default function Presentation() {
  const [test, setTry] = useState(0);
  useEffect(() => {
    console.log({ test });
    setTry("string value");
    console.log({ test });
  }, []);

  const handleClick = () => {
    console.log({ test });
    setTry({ object: "value" });
    console.log({ test });
  };
  return (
    <div onClick={handleClick}>
      <section className="ftco-section ftco-no-pt bg-light presentation">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 d-flex">
              <div
                className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
                id="presentation-img"
              ></div>
            </div>
            <div className="col-md-6 pl-md-5 py-md-5">
              <div className="heading-section pl-md-4 pt-md-5">
                <h2 className="mb-4">
                  Contabilidad para profesionales ocupados
                </h2>
                <span className="subheading">{"   "}</span>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-accountant"></span>
                </div>
                <div className="text pl-4">
                  <h4>Presentamos tus formularios</h4>
                  <p>
                    Nunca más visitarás el portal de la SAT. Deja la
                    contabilidad a los profesionales que lo disfrutan.
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-free"></span>
                </div>
                <div className="text pl-4">
                  <h4>100% gratis si no facturas</h4>
                  <p>
                    Sea un mes o un año entero, si no facturas no te cobramos
                    absolutamente nada.
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-teamwork"></span>
                </div>
                <div className="text pl-4">
                  <h4>Recogemos tus facturas</h4>
                  <p>
                    Incluido en nuestro precio. Con mensajero, por correo, o por
                    WhatsApp. Como tú prefieras.
                  </p>
                </div>
              </div>
              <div className="services-2 w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-accounting"></span>
                </div>
                <div className="text pl-4">
                  <h4>Puntual. Preciso. Transparente</h4>
                  <p>
                    Trabajamos rápido. Calculamos al centavo. Al pie de la letra
                    de la ley, y puedes revisar tus datos en cualquier momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show-mobile-only presentation-buffer">
          <h3>
            Nos dedicamos <span style={{ fontStyle: "italic" }}>sólo</span> a
            los que facturan
          </h3>
        </div>
      </section>
    </div>
  );
}
