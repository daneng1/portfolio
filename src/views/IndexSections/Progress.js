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
import Dan from 'assets/img/myImages/Dan_Engel_2020.jpg';

// reactstrap components
import { Progress, Col } from "reactstrap";

class ProgressSection extends React.Component {
  render() {
    return (
      <>
        <Col lg="5">
         <div>
          <h3 className="h2 text-success font-weight-bold mb-4">About</h3>
            <img
              alt="..."
              className="img-fluid"
              src={Dan}
              style={{ width: "200px" }}
              />
            <h3 className="h4 text-default font-weight-bold mb-4">Who IS this guy?</h3>  
            <p> I'm a Full-Stack Developer in Seattle and I have a serious passion for finding simple solutions to complex problems.</p>
            <p> I have a background in commmercial photography which has helped me develop an eye for layout and design.</p>
            <p className="mb-6"> I hope to ulitize my experience working in Marketing teams within large organizations to build beautiful and functional user-facing software solutions.</p>
          </div>
        </Col>
        <Col lg="5">
        
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span><h4>JavaScript</h4></span>
              </div>
              <div className="progress-percentage">
                <span>80%</span>
              </div>
            </div>
            <Progress max="100" value="80" color="info" />
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span><h4>HTML</h4></span>
              </div>
              <div className="progress-percentage">
                <span>70%</span>
              </div>
            </div>
            <Progress max="100" value="70" color="warning"/>
          </div>
          <div className="progress-wrapper">
            <div className="progress-info">
              <div className="progress-label">
                <span><h4>CSS</h4></span>
              </div>
              <div className="progress-percentage">
                <span>60%</span>
              </div>
            </div>
            <Progress max="100" value="60" color="success"/>
          </div>
          <div className="progress-wrapper mb-2">
            <div className="progress-info">
              <div className="progress-label">
                <span><h4>React</h4></span>
              </div>
              <div className="progress-percentage">
                <span>30%</span>
              </div>
            </div>
            <Progress max="100" value="30" color="danger" />
          </div>
       
        </Col>
      </>
    );
  }
}

export default ProgressSection;
