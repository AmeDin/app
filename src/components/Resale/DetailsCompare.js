import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BedImg from "../../assets/1x/bath.jpg";
import DiningImg from "../../assets/1x/dining.jpg";
import RoomImg from "../../assets/1x/room.jpg";
import DetailImg from "../../assets/1x/detail4.PNG";

class DetailsCompare extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="4">
            <img src={DiningImg} alt="SizeImg" className="imgdetail" />
          </Col>
          <Col xs="4">
            <img src={RoomImg} alt="SizeImg" className="imgdetail" />
          </Col>
          <Col xs="4">
            <img src={BedImg} alt="SizeImg" className="imgdetail" />
          </Col>
        </Row>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row>
          <Col xs="1"></Col>
          <Col xs="9" style={{ marginLeft: "60px" }}>
            <img
              src={DetailImg}
              alt="SizeImg"
              className="imgdetail"
              onClick={() => {
                this.props.history.push("/compare");
              }}
            />
          </Col>
          <Col xs="1"></Col>
        </Row>
      </Container>
    );
  }
}

export default DetailsCompare;
