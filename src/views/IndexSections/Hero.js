/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section  section-hero section-shaped">
            {/* Background circles */}
            <div className="shape bg-success">
            </div>
            <Container  className=" mt-8 shape-container d-flex align-items-center">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col sm="9">
                    <h1 className=" text-default display-3 text-center mb-0">Hello, I'm Dan Engel.</h1>
                  </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <p className="display-3 text-center mb-0 text-white">
                      I'm a full-stack software developer.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="1280 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
