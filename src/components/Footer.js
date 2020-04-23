import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <h1>FOOTER</h1>
      <Link to="/">Home</Link>
      <Link to="/nosotros">Sobre Nosotros</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/blog">Aprende mas</Link>

      <footer className="footer">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-md-12 py-md-5 py-4 aside-stretch-right pl-lg-5">
              <h2 className="footer-heading">Free consultation</h2>
              <form action="#" className="form-consultation">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control submit px-3">
                    Send A Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12 py-5">
            <div className="row">
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-10">
                    <div className="row">
                      <div className="col-md-3 mb-md-0 mb-3">
                        <Link to="/inicio">
                          <h2 className="footer-heading">Inicio</h2>
                        </Link>
                        <p>
                          {/* A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. */}
                        </p>
                        <ul className="ftco-footer-social p-0">
                          <li className="ftco-animate fadeInUp ftco-animated">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Twitter"
                            >
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                          <li className="ftco-animate fadeInUp ftco-animated">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Facebook"
                            >
                              <span className="fa fa-facebook"></span>
                            </a>
                          </li>
                          <li className="ftco-animate fadeInUp ftco-animated">
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Instagram"
                            >
                              <span className="fa fa-instagram"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 mb-md-0 mb-3">
                        <Link to="/nosotros">
                          <h2 className="footer-heading">Sobre Nosotros</h2>
                        </Link>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" className="py-1 d-block">
                              Market Analysis
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Accounting Advisor
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              General Consultancy
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Structured Assestment
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 mb-md-0 mb-3">
                        <Link to="/servicios">
                          <h2 className="footer-heading">Servicios</h2>
                        </Link>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" className="py-1 d-block">
                              About us
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Contract us
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Terms &amp; Conditions
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Policies
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 mb-md-0 mb-3">
                        <Link to="/blog">
                          <h2 className="footer-heading">Aprende más</h2>
                        </Link>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" className="py-1 d-block">
                              Security
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Global
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Charts
                            </a>
                          </li>
                          <li>
                            <a href="#" className="py-1 d-block">
                              Privacy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row mt-md-5">
							<div className="col-md-12">
								<p className="copyright"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
					  Copyright ©<script>document.write(new Date().getFullYear());</script>2020 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
					  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
							</div>
						</div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
