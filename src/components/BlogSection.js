import React from "react";

export default function BlogSection() {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
            {/* <span className="subheading">News &amp; Blog</span> */}
            <h2>Noticias de Nuestro Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="blog-entry align-self-stretch">
              <a
                href="#"
                className="block-20 rounded"
                id="blog-post-1"
                style={{ backgroundImage: "url('../img/image_1.jpg');" }}
              ></a>
              <div className="text p-4">
                <div className="meta mb-2">
                  <div>
                    <a href="#">Febrero 24, 2020</a>
                  </div>
                  {/* <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="fa fa-comment"></span> 3
                    </a>
                  </div> */}
                </div>
                <h3 className="heading">
                  <a href="#">
                    Conoce las nueva forma de facturar: Facturas Electrónicas
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="blog-entry align-self-stretch">
              <a
                href="#"
                className="block-20 rounded"
                id="blog-post-2"
                style={{ backgroundImage: "url('../img/image_2.jpg');" }}
              ></a>
              <div className="text p-4">
                <div className="meta mb-2">
                  <div>
                    <a href="#">Enero 11, 2020</a>
                  </div>
                  {/* <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="fa fa-comment"></span> 3
                    </a>
                  </div> */}
                </div>
                <h3 className="heading">
                  <a href="#">
                    ¿Qué facturas exactamente puedo usar para deducir IVA?
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="blog-entry align-self-stretch">
              <a
                href="#"
                className="block-20 rounded"
                id="blog-post-3"
                style={{ backgroundImage: "url('../img/image_3.jpg');" }}
              ></a>
              <div className="text p-4">
                <div className="meta mb-2">
                  <div>
                    <a href="#">Diciembre 19, 2019</a>
                  </div>
                  {/* <div>
                    <a href="#">Admin</a>
                  </div>
                  <div>
                    <a href="#" className="meta-chat">
                      <span className="fa fa-comment"></span> 3
                    </a>
                  </div> */}
                </div>
                <h3 className="heading">
                  <a href="#">
                    ¿Qué me pide la SAT? Contabilidad para profesionales
                    explicada en 2 minutos
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
