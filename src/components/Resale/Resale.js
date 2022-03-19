import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardGroup,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResales } from "../../actions/resaleActions";
import { getResalesByType } from "../../actions/resaleActions";

class Resale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstAccordion: true,
      SecondAccordion: false,
      ThirdAccordion: false,
      selectedTypeOption: "All",
    };
    this.onRadioTypeChange = this.onRadioTypeChange.bind(this);
  }
  static propTypes = {
    getResales: PropTypes.func.isRequired,
    resale: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    console.log("Resale");
    this.props.getResalesByType(this.state.selectedTypeOption);
    console.log(this.props);
  }

  currencyFormat(num) {
    return "S$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  toggleAccordion = (param) => (e) => {
    console.log(e);
    console.log(param);
    this.setState({
      FirstAccordion: param === 1 ? true : false,
      SecondAccordion: param === 2 ? true : false,
      ThirdAccordion: param === 3 ? true : false,
    });
    console.log("toggleFilter");
  };

  onRadioTypeChange(event) {
    this.setState(
      {
        selectedTypeOption: event.target.value,
      },
      () => this.props.getResalesByType(this.state.selectedTypeOption)
    );
  }

  renderCard(src) {
    return (
      <Card className="fit">
        <CardImg
          style={{
            margin: "auto",
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
          src={src}
          fluid={true ? 1 : 0}
          alt="Card Image"
        />
      </Card>
    );
  }
  renderInfo(description, price) {
    return (
      <Container>
        <Row>
          <div className="p-1 m-1">{this.truncate(description, 200)}</div>
        </Row>
        <Row className="p-1">
          <Col xs="8">
            <h3>{this.currencyFormat(price)}</h3>
          </Col>
          <Col xs="4">
            <Button style={{ float: "right" }}>More</Button>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    console.log(this.state);
    const { resales } = this.props.resale;
    return (
      <div>
        <Container>
          <Row>
            <Col xs="3">
              <div className="accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={
                        this.state.FirstAccordion === true
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      type="button"
                      onClick={this.toggleAccordion(1)}
                    >
                      Property Type
                    </button>
                  </h2>
                  <div
                    className={
                      this.state.FirstAccordion
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                  >
                    <div className="accordion-body">
                      <Row>
                        <Col xs="2">
                          <input
                            type="radio"
                            value="All"
                            checked={this.state.selectedTypeOption === "All"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col xs="10" style={{ textAlign: "left" }}>
                          <label htmlFor="All">All</label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="2">
                          <input
                            type="radio"
                            value="HDB"
                            checked={this.state.selectedTypeOption === "HDB"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col xs="10" style={{ textAlign: "left" }}>
                          <label htmlFor="HDB">HDB</label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="2">
                          <input
                            type="radio"
                            value="Condo"
                            checked={this.state.selectedTypeOption === "Condo"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col xs="10" style={{ textAlign: "left" }}>
                          <label htmlFor="Condo">Condo</label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="2">
                          <input
                            type="radio"
                            value="Landed"
                            checked={this.state.selectedTypeOption === "Landed"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col xs="10" style={{ textAlign: "left" }}>
                          <label htmlFor="Landed">Landed</label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={
                        this.state.SecondAccordion
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      type="button"
                      onClick={this.toggleAccordion(2)}
                    >
                      Price
                    </button>
                  </h2>
                  <div
                    className={
                      this.state.SecondAccordion
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">Body2</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={
                        this.state.ThirdAccordion
                          ? "accordion-button"
                          : "accordion-button collapsed"
                      }
                      type="button"
                      onClick={this.toggleAccordion(3)}
                    >
                      Size
                    </button>
                  </h2>
                  <div
                    className={
                      this.state.ThirdAccordion
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                  >
                    <div className="accordion-body">Body3</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="9">
              <Container>
                <Row>
                  <div style={{ textAlign: "left" }}>
                    Showing all 10 results
                  </div>
                </Row>
                <Row>
                  <CardGroup style={{ textAlign: "left" }}>
                    {resales.map(
                      ({ _id, type, price, img, address, description }) => (
                        <div className="cardInfo p-1" key={_id}>
                          <div className="row border">
                            <div className="col-4 col-md-4 p-0">
                              {this.renderCard(img)}
                            </div>
                            <div className="col-8 col-md-8 p-0">
                              <Container>
                                <Row>
                                  <Col xs="10">
                                    <h2 className="m-1">{address}</h2>
                                  </Col>
                                  <Col xs="2">Love</Col>
                                </Row>
                              </Container>
                              {this.renderInfo(description, price)}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </CardGroup>
                </Row>
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

export default connect(mapStateToProps, { getResales, getResalesByType })(
  Resale
);
