import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CompareImg from "../../assets/1x/mortage.PNG";

class Mortage extends Component {
  render() {
    return (
      <Container style={{ maxWidth: "680px" }}>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row>
          <Col xs="1"></Col>
          <Col xs="9" style={{ marginLeft: "60px" }}>
            <img src={CompareImg} alt="SizeImg" className="imgdetail" />
          </Col>
          <Col xs="1"></Col>
        </Row>
      </Container>
    );
  }
}

export default Mortage;
