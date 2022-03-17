import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardGroup } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResales } from "../../actions/resaleActions";

class Resale extends Component {
  static propTypes = {
    getResales: PropTypes.func.isRequired,
    resale: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  componentDidMount() {
    console.log("Resale");
    this.props.getResales();
    console.log(this.props);
  }

  renderCard(src) {
    return (
      <Card>
        <CardImg
          style={{ margin: "auto" }}
          src={src}
          fluid={true ? 1 : 0}
          alt="Card Image"
        />
      </Card>
    );
  }
  renderInfo(description, price) {
    return (
      <ul className="list-unstyled">
        <li>
          <div>{description}</div>
        </li>
        <li>
          <h3>{price}</h3>
        </li>
      </ul>
    );
  }

  render() {
    console.log(this.props.resale);
    const { resales } = this.props.resale;
    return (
      <div>
        <Container>
          <Row>
            <Col xs="3">Left</Col>
            <Col xs="9">
              <Container>
                <CardGroup>
                  {resales.map(
                    ({ _id, type, price, img, address, description }) => (
                      <div className="cardInfo p-1">
                        <div className="row border">
                          <div className="col-4 col-md-4 p-0">
                            {this.renderCard(img)}
                          </div>
                          <div className="col-8 col-md-8 p-0">
                            <h2>{address}</h2>
                            {this.renderInfo(description, price)}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </CardGroup>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  resale: state.resale,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getResales })(Resale);
