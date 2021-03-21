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
import { Container, Row } from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Navbars from "./IndexSections/Navbars.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Progress from "./IndexSections/Progress.js";
import Typography from "./IndexSections/Typography.js";
import Modals from "./IndexSections/Modals.js";
import Icons from "./IndexSections/Icons.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
          <main ref="main">
            <Hero />
            <section className="section section-components">
              <Container>
                <Row className="row-grid justify-content-between align-items-center mt-lg">
                  <Progress />  
                </Row>  
              </Container>
              <CardsFooter />
            </section>
          </main>
        <SimpleFooter />  
      </>
    );
  }
}

export default Index;
