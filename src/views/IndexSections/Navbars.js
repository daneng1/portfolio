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
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import argonReact from "assets/img/brand/argon-react.png";

class Navbars extends React.Component {
  render() {
    return (
      <>
        <section>
          {/* Navbar danger */}
          <Navbar className="navbar-dark bg-default mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                About
              </NavbarBrand>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Portfolio
              </NavbarBrand>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Contact
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar-danger">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-danger">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={argonReact}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar-danger">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/dan.engel.94"
                      target="_blank"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none">
                        Instagram
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          
        </section>
      </>
    );
  }
}

export default Navbars;
