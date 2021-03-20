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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";
import HornedBeasts from 'assets/img/myImages/horned_beasts.png';
import Regurgitate from 'assets/img/myImages/regurgitate.png';
import SalmonCookies from 'assets/img/myImages/salmon_cookies.png';
import Voyager from 'assets/img/myImages/voyager.png';


class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer >
          <Container className="container-lg">
          <h2 className="h2 container-lg text-success font-weight-bold mb-4">Portfolio</h2>
            <Row>
              <Col className="mb-5 mb-md-4" md="6">
                <Button
                   href="https://distracted-clarke-d80147.netlify.app/"
                  target="_blank">
                  <Card className="card-lift--hover shadow border-0">
                      <CardImg
                        alt="..."
                        src={HornedBeasts}
                        target="_blank"
                      />
                  </Card>
                </Button>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Button
                  href="https://daneng1.github.io/salmon_cookies/"
                  target="_blank">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={SalmonCookies}
                        />
                    </Card>
                </Button>  
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Button
                href="https://daneng1.github.io/SandwichShop/"
                target="_blank">
                  <Card className="card-lift--hover shadow border-0">
                      <CardImg
                        alt="..."
                        src={Voyager}
                      />
                  </Card>
                </Button>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Button
                  href="https://daneng1.github.io/regurgitate/"
                  target="_blank">
                  <Card className="card-lift--hover shadow border-0">
                      <CardImg
                        alt="..."
                        src={Regurgitate}
                      />
                  </Card>
                </Button>  
              </Col>
            </Row>
          </Container>
          
        </footer>
      </>
    );
  }
}

export default CardsFooter;
