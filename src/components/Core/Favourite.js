import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FavImg from "../../assets/1x/fav.PNG";

class Favourite extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row>
          <Col xs="1"></Col>
          <Col xs="9" style={{ marginLeft: "60px" }}>
            <img src={FavImg} alt="SizeImg" className="imgdetail" />
          </Col>
          <Col xs="1"></Col>
        </Row>
      </Container>
    );
  }
}

export default Favourite;
