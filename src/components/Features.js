import React from "react";

export default function Features() {
  return (
    <section className="ftco-section bg-light ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate fadeInUp ftco-animated">
            <div className="d-block">
              <div className="iconn d-flex mr-2">
                <span className="flaticon-accounting-1"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Digitalizado</h3>
                <p>
                  Obtén acceso a tus libros con un click. Disponibles online,
                  listos para imprimir.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate fadeInUp ftco-animated">
            <div className="d-block">
              <div className="iconn d-flex mr-2">
                <span className="flaticon-tax"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Actualizados con la Ley</h3>
                <p>
                  Mantenemos a todo el equipo informado de lo último de la SAT.
                  Al día con tus libros y con la ley.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate fadeInUp ftco-animated">
            <div className="d-block">
              <div className="iconn d-flex mr-2">
                <span className="flaticon-loan"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Ahorra Dinero</h3>
                <p>
                  Te cobramos el mejor precio, no importa cuántas facturas.
                  <br></br>
                  Profesionales: Q250<br></br>
                  Peq. Contribuyente: Q100
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate fadeInUp ftco-animated">
            <div className="d-block">
              <div className="iconn d-flex mr-2">
                <span className="flaticon-budget"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Crecimiento Constante</h3>
                <p>
                  Crecemos junto a ti y tus ahorros. Crecemos en servicio y
                  rapidez. Lo único que no crece es nuestro precio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
