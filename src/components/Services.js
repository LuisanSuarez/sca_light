import React from "react";
import CTAButton from "./CTAButton";

export default function Services() {
  return (
    <section className="ftco-section ftco-no-pt bg-light ftco-faqs services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-faqs w-100">
              <div
                className="img img-1 mb-4 mb-sm-0"
                id="services-img-1"
                // style={{ backgroundImage: "url(../img/about-2.jpg);" }}
              ></div>
              <div
                className="img img-2 mb-4 mb-sm-0 hide-mobile"
                id="services-img-2"
                // style={{ backgroundImage: "url(../img/about-1.jpg);" }}
              ></div>
              <div
                className="img img-3 mb-4 mb-sm-0"
                id="services-img-3"
                // style={{ backgroundImage: "url(../img/about-1.jpg);" }}
              ></div>
            </div>
          </div>
          <div className="col-lg-6 pl-lg-5">
            <div className="heading-section mb-5 mt-5 mt-lg-0">
              {/* <span className="subheading">FAQs</span> */}
              <h2 className="mb-3 hide-mobile">¿Por qué empezó S.C.A?</h2>
              <h3 id="subtitle-1" className="hide-mobile">
                A los profesionales nos <br></br>están dando atol con el dedo.
              </h3>
              <p className="hide-mobile">
                Los contadores saben de la contabilidad. Los demás,
                generalmente, sabemos muy poco. Los contadores saben esto y
                aprovechan para cobrarnos caro.
              </p>
              <p className="hide-mobile">
                Eso no es 100% cierto. Es verdad que los contadores saben más
                que nosotros, pero no todos están intentando estafarte. Lo que
                pasa es que su tiempo es valioso.{" "}
              </p>
              <p className="hide-mobile">
                Las empresas grandes llevan una contabilidad muy complicada.
                Toma mucho tiempo y conocimiento asegurar que esos números estén
                correctos. Para un contador vale más la pena trabajar con
                empresas grandes por una simple razón: el conocimiento y el
                esfuerzo se reflejan en el precio.
              </p>
              <h3 className="hide-mobile">
                ¡Pero si yo sólo facturo! No quiero una contabilidad compleja
              </h3>
              <p className="hide-mobile">
                Y tienes toda la razón. Como profesional, tu contabilidad es
                mucho más simple. Requiere conocimientos de contabilidad y
                mantenerse al día con las últimas leyes, pero no es ni cerca de
                lo que requiere una empresa. No tienes por qué pagar lo mismo.
              </p>
              <h2 id="subtitle-3">Una solución sólo para profesionales</h2>
              <p>
                Tu contadora no se tarda mucho a veces (¡o se le olvida!) porque
                no le importas. Tu contador no te cobra caro por ser malo. Están
                distraídos con clientes más grandes que necesitan mucha atención
                y pagan caro.
              </p>
              <p>Nosotros no.</p>
              <p>
                <span className="highlight">
                  Nosotros nos dedicamos exclusivamente a profesionales como tú.
                </span>
                Ponemos toda nuestra atención a la contabilidad que tú
                necesitas. No nos distraemos con empresas u otro tipo de
                clientes. Ese enfoque nos permite entregarte tu contabilidad:
              </p>
              <ul>
                <li>Bien hecha</li>
                <li>Temprano</li>
                <li>A un precio justo</li>
              </ul>
            </div>
            {/* <div
              id="accordion"
              className="myaccordion w-100"
              aria-multiselectable="true">
              <div className="card">
                <div className="card-header p-0" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      href="#collapseOne"
                      className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <p className="mb-0">How to fixed a problem?</p>
                      <i className="fa" aria-hidden="true"></i>
                    </button>
                  </h2>
                </div>
                <div
                  className="collapse"
                  id="collapseOne"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                  // style=""
                >
                  <div className="card-body py-3 px-0">
                    <ol>
                      <li>Far far away, behind the word mountains</li>
                      <li>Consonantia, there live the blind texts</li>
                      <li>
                        When she reached the first hills of the Italic Mountains
                      </li>
                      <li>Bookmarksgrove, the headline of Alphabet Village</li>
                      <li>Separated they live in Bookmarksgrove right</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header p-0" id="headingTwo" role="tab">
                  <h2 className="mb-0">
                    <button
                      href="#collapseTwo"
                      className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <p className="mb-0">How to manage your business loans?</p>
                      <i className="fa" aria-hidden="true"></i>
                    </button>
                  </h2>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-body py-3 px-0">
                    <ol>
                      <li>Far far away, behind the word mountains</li>
                      <li>Consonantia, there live the blind texts</li>
                      <li>
                        When she reached the first hills of the Italic Mountains
                      </li>
                      <li>Bookmarksgrove, the headline of Alphabet Village</li>
                      <li>Separated they live in Bookmarksgrove right</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header p-0" id="headingThree" role="tab">
                  <h2 className="mb-0">
                    <button
                      href="#collapseThree"
                      className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <p className="mb-0">
                        How to grow your investments funds?
                      </p>
                      <i className="fa" aria-hidden="true"></i>
                    </button>
                  </h2>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-body py-3 px-0">
                    <ol>
                      <li>Far far away, behind the word mountains</li>
                      <li>Consonantia, there live the blind texts</li>
                      <li>
                        When she reached the first hills of the Italic Mountains
                      </li>
                      <li>Bookmarksgrove, the headline of Alphabet Village</li>
                      <li>Separated they live in Bookmarksgrove right</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header p-0" id="headingFour" role="tab">
                  <h2 className="mb-0">
                    <button
                      href="#collapseFour"
                      className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <p className="mb-0">
                        What are those requirements for businesses?
                      </p>
                      <i className="fa" aria-hidden="true"></i>
                    </button>
                  </h2>
                </div>
                <div
                  className="collapse"
                  id="collapseFour"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-body py-3 px-0">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="main-cta">
          <h3 className="text-center mb-4">Olvida tu contabilidad</h3>
          <p>
            Estamos para servirte. Entendemos que lo último que quieres hacer
            con tus horas libres es ver números. Estás aquí porque quieres dejar
            de preocuparte por la SAT, y de tu contador. Quieres la tranquilidad
            de saber que tu contabilidad está bien hecha y está al día, y que
            así estará siempre.{" "}
          </p>
          <p>Lo tenemos muy claro.</p>
          <h6 className="text-center">
            Nos preocupamos de tu contabilidad para que tú no te preocupes.
          </h6>
          <CTAButton text="Despreocúpame" />
        </div>
      </div>
    </section>
  );
}
