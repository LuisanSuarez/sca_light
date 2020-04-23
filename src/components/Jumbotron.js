import React from "react";

export default function Jumbotron() {
  return (
    <>
      <div className="hero-wrap">
        <div className="home-slider owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-4557px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "10635px",
              }}
            >
              <div className="owl-item" style={{ width: "1519.2px" }}>
                <div className="slider-item" id="slider-item-1">
                  <div className="overlay"></div>
                  <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                      <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                        <div className="text w-100 text-center">
                          <h2>We Support Business</h2>
                          <h1 className="mb-4">The Best Business Support</h1>
                          <p>
                            <a href="#" className="btn btn-white">
                              Connect with us
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: "1519.2px" }}>
                <div className="slider-item" id="slider-item-2">
                  <div className="overlay"></div>
                  <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                      <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                        <div className="text w-100 text-center">
                          <h2>We Give Advice</h2>
                          <h1 className="mb-4">Expert Financial Advice</h1>
                          <p>
                            <a href="#" className="btn btn-white">
                              Connect with us
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: "1519.2px" }}>
                <div className="slider-item" id="slider-item-3">
                  <div className="overlay"></div>
                  <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                      <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                        <div className="text w-100 text-center">
                          <h2>We Business Grow</h2>
                          <h1 className="mb-4">
                            We Help You Businesses Innovate and Grow
                          </h1>
                          <p>
                            <a href="#" className="btn btn-white">
                              Connect with us
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="owl-item active" style={{ width: "1519.2px" }}>
              <div
                className="slider-item"
                id="slider-item-1"
              >
                <div className="overlay"></div>
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                      <div className="text w-100 text-center">
                        <h2>We Support Business</h2>
                        <h1 className="mb-4">The Best Business Support</h1>
                        <p>
                          <a href="#" className="btn btn-white">
                            Connect with us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1519.2px" }}>
              <div
                className="slider-item"
                id="slider-item-1"
              >
                <div className="overlay"></div>
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                      <div className="text w-100 text-center">
                        <h2>We Give Advice</h2>
                        <h1 className="mb-4">Expert Financial Advice</h1>
                        <p>
                          <a href="#" className="btn btn-white">
                            Connect with us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "1519.2px" }}>
              <div
                className="slider-item"
                id="slider-item-1"
              >
                <div className="overlay"></div>
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                      <div className="text w-100 text-center">
                        <h2>We Business Grow</h2>
                        <h1 className="mb-4">
                          We Help You Businesses Innovate and Grow
                        </h1>
                        <p>
                          <a href="#" className="btn btn-white">
                            Connect with us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "1519.2px" }}> */}
              {/* <div className="slider-item" id="slider-item-1">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-8 ftco-animate fadeInUp ftco-animated">
                      <div className="text w-100 text-center">
                        <h2>We Support Business</h2>
                        <h1 className="mb-4">The Best Business Support</h1>
                        <p>
                          <a href="#" className="btn btn-white">
                            Connect with us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
            </div>
            <div className="owl-nav">
              <button role="presentation" className="owl-prev">
                <span className="ion-ios-arrow-back"></span>
              </button>
              <button role="presentation" className="owl-next">
                <span className="ion-ios-arrow-forward"></span>
              </button>
            </div>
            <div className="owl-dots">
              <button className="owl-dot">
                <span></span>
              </button>
              <button className="owl-dot active">
                <span></span>
              </button>
              <button className="owl-dot">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
