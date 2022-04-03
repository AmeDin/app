import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardGroup,
  Button,
  Input,
  Label,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResales } from "../../actions/resaleActions";
import RegionImg from "../../assets/1x/icon_Region.png";
import FlatImg from "../../assets/1x/icon_FlatType.png";
import SizeImg from "../../assets/1x/icon_Size.png";
import PriceImg from "../../assets/1x/icon_Price.png";
import CompletionImg from "../../assets/1x/icon_CompletionYear.png";
import NoFavImg from "../../assets/1x/btn_AddToFavourite.png";
import FavImg from "../../assets/1x/btn_RemoveFromFavourite.png";

class Resale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstAccordion: true,
      SecondAccordion: true,
      ThirdAccordion: true,
      selectedTypeOption: "",
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
    const data = {
      limit: 10,
      q: this.state.selectedTypeOption,
    };
    this.props.getResales(data);
    console.log(this.props);
  }

  currencyFormat(num) {
    console.log(num);
    return (
      "S$" +
      parseFloat(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }

  truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  toggleAccordion = (param) => (e) => {
    console.log(e);
    console.log(param);
    // this.setState({
    //   FirstAccordion: param === 1 ? true : false,
    //   SecondAccordion: param === 2 ? true : false,
    //   ThirdAccordion: param === 3 ? true : false,
    // });
    console.log("toggleFilter");
  };

  onRadioTypeChange(event) {
    const q = event.target.value == "All" ? "" : event.target.value;
    const data = {
      limit: 5,
      q: q,
    };
    this.setState(
      {
        selectedTypeOption: q,
      },
      () => this.props.getResales(data)
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
  renderInfo(town, flat_type, floor_area_sqm, lease_commence_date, price) {
    return (
      <Container>
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <div className="cardText">
            Town: &emsp; &emsp;
            {town.replace("BEDOK", "YISHUN").replace("SERANGOON", "YISHUN")}
          </div>
          <div className="cardText">Flat Type: &nbsp; {flat_type}</div>
          <div className="cardText">Floor Area: {floor_area_sqm}</div>
          <div className="cardText">Build Year: {lease_commence_date}</div>
        </Row>
        <Row className="p-1">
          <Col xs="8">
            <h3 style={{ color: "#67BA4C" }}>{this.currencyFormat(price)}</h3>
          </Col>
          <Col xs="4">
            <Button
              style={{
                float: "right",
                backgroundColor: "#fbab01",
                border: "none",
              }}
              onClick={() => {
                this.props.history.push("/details");
              }}
            >
              See More
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    console.log(this.state);
    const { resales } = this.props.resale;
    console.log(resales);
    return (
      <div>
        <Container>
          <Row>
            <Col xs="4">
              <div className="accordion">
                <div className="filterWrapper">
                  <h2 className="filterHeader">
                    <img src={RegionImg} alt="flatImg" className="imgicon" />
                    <label>Region</label>
                  </h2>
                  <div
                    className={
                      this.state.FirstAccordion
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                  >
                    <div
                      className="accordion-body"
                      style={{ textAlign: "left" }}
                    >
                      <Row>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Ang Mo Kio"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Ang Mo Kio</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Eunos"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Eunos</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Punggol"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Punggol</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Bishan"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Bishan</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Geylang"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Geylang</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Serangoon"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Serangoon</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Boon Lay"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Boon Lay</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Harbourfront"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Harbourfront</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Tampines"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Tampines</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Bedok"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Bedok</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Hougang"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Hougang</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Toa Payoh"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Toa Payoh</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Choa Chu Kang"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Choa Chu Kang</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Novena"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Novena</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Woodlands"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Woodlands</Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Clementi"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Clementi</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Paya Lebar"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Paya Lebar</Label>
                        </Col>
                        <Col xs="1">
                          <Input
                            type="checkbox"
                            value="Yishun"
                            onChange={this.onCheckboxChecked}
                            className="checkboxy"
                          />
                        </Col>
                        <Col xs="3">
                          <Label check>Yishun</Label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="filterWrapper">
                  <h2 className="filterHeader">
                    <img src={FlatImg} alt="flatImg" className="imgicon" />
                    <label>Flat Type</label>
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
                        <Col xs="1">
                          <input
                            type="radio"
                            value="All"
                            checked={this.state.selectedTypeOption === "All"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor="All">All</label>
                        </Col>
                        <Col xs="1">
                          <input
                            type="radio"
                            value="5 Room"
                            checked={this.state.selectedTypeOption === "5 Room"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor="5 Room">5 Room</label>
                        </Col>
                        <Col xs="1">
                          <input
                            type="radio"
                            value="4 Room"
                            checked={this.state.selectedTypeOption === "4 Room"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor="4 Room">4 Room</label>
                        </Col>
                        <Col xs="1">
                          <input
                            type="radio"
                            value="3 Room"
                            checked={this.state.selectedTypeOption === "3 Room"}
                            onChange={this.onRadioTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor="3 Room">3 Room</label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="filterWrapper">
                  <h2 className="filterHeader">
                    <img src={SizeImg} alt="SizeImg" className="imgicon" />
                    <label>Size</label>
                  </h2>
                  <div
                    className={
                      this.state.SecondAccordion
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <Row>
                        <Col xs="1">
                          <input
                            type="radio"
                            value="All"
                            checked={this.state.selectedTypeOption === "All"}
                            onChange={this.onRadioSizeTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor="All">All</label>
                        </Col>
                        <Col xs="1">
                          <input
                            type="radio"
                            value="50-100"
                            checked={this.state.selectedTypeOption === "50-100"}
                            onChange={this.onRadioSizeTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor="50-100">50-100</label>
                        </Col>
                        <Col xs="1">
                          <input
                            type="radio"
                            value="<50"
                            checked={this.state.selectedTypeOption === "<50"}
                            onChange={this.onRadioSizeTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor="<50">&lt; 50</label>
                        </Col>
                        <Col xs="1">
                          <input
                            type="radio"
                            value=">100"
                            checked={this.state.selectedTypeOption === ">100"}
                            onChange={this.onRadioSizeTypeChange}
                          />
                        </Col>
                        <Col
                          xs="2"
                          style={{ textAlign: "left" }}
                          className="m-0 p-0"
                        >
                          <label htmlFor=">100">&gt; 100</label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="filterWrapper">
                  <h2 className="filterHeader">
                    <img src={PriceImg} alt="flatImg" className="imgicon" />
                    <label>Price</label>
                  </h2>
                  <div
                    className={
                      this.state.ThirdAccordion
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                  >
                    <div className="accordion-body">
                      <Row>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            className="p-0 mt-2"
                            style={{ marginLeft: "8px" }}
                          >
                            S$
                          </Label>
                        </Col>
                        <Col xs="4" className="p-0 m-0">
                          <Input
                            type="text"
                            name="min"
                            id="min"
                            placeholder="200,000"
                            className="customInput"
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            for="min"
                            className="p-0 mt-2"
                            style={{ marginRight: "8px" }}
                          >
                            Min
                          </Label>
                        </Col>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            className="p-0 mt-2"
                            style={{ marginLeft: "10px" }}
                          >
                            S$
                          </Label>
                        </Col>
                        <Col xs="4" className="p-0 m-0">
                          <Input
                            type="text"
                            name="max"
                            id="max"
                            placeholder="1,000,000"
                            className="customInput"
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            for="max"
                            className="p-0 mt-2 ml-1"
                            style={{ marginRight: "8px" }}
                          >
                            Max
                          </Label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="filterWrapper">
                  <h2 className="filterHeader">
                    <img
                      src={CompletionImg}
                      alt="flatImg"
                      className="imgicon"
                    />
                    <label>Completion Year</label>
                  </h2>
                  <div
                    className={
                      this.state.ThirdAccordion
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                  >
                    <div className="accordion-body">
                      <Row>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            className="p-0 mt-2"
                            style={{ marginLeft: "8px" }}
                          >
                            Yr
                          </Label>
                        </Col>
                        <Col xs="4" className="p-0 m-0">
                          <Input
                            type="text"
                            name="min"
                            id="min"
                            placeholder="1980"
                            className="customInput"
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            for="min"
                            className="p-0 mt-2"
                            style={{ marginRight: "8px" }}
                          >
                            Min
                          </Label>
                        </Col>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            className="p-0 mt-2"
                            style={{ marginLeft: "10px" }}
                          >
                            Yr
                          </Label>
                        </Col>
                        <Col xs="4" className="p-0 m-0">
                          <Input
                            type="text"
                            name="max"
                            id="max"
                            placeholder="2018"
                            className="customInput"
                            onChange={this.onChange}
                          />
                        </Col>
                        <Col xs="1" className="p-0 m-0">
                          <Label
                            for="max"
                            className="p-0 mt-2 ml-1"
                            style={{ marginRight: "8px" }}
                          >
                            Max
                          </Label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="8">
              <Container>
                <Row>
                  <div style={{ textAlign: "left", color: "#959595" }}>
                    Showing {resales.length} results
                  </div>
                </Row>
                <Row>
                  <CardGroup style={{ textAlign: "left" }}>
                    {resales.map(
                      ({
                        _id,
                        town,
                        street_name,
                        storey_range,
                        resale_price,
                        remaining_lease,
                        month,
                        lease_commence_date,
                        floor_area_sqm,
                        flat_type,
                        flat_model,
                        block,
                      }) => (
                        <div className="cardInfo p-1" key={_id}>
                          <div className="row border">
                            <div className="col-4 col-md-4 p-0">
                              {this.renderCard(
                                "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              )}
                            </div>
                            <div className="col-8 col-md-8 p-0">
                              <Container>
                                <Row style={{ marginTop: "15px" }}>
                                  <Col xs="10">
                                    <h6 className="m-1">
                                      Blk {block},{" "}
                                      {street_name
                                        .replace("YISHUN AVE 3", "YISHUN AVE 4")
                                        .replace("BEDOK", "YISHUN")
                                        .replace("SERANGOON", "YISHUN")}{" "}
                                    </h6>
                                  </Col>
                                  <Col xs="2">
                                    <img
                                      src={NoFavImg}
                                      alt="SizeImg"
                                      className="imgicon"
                                      style={{ float: "right" }}
                                    />
                                  </Col>
                                </Row>
                              </Container>
                              {this.renderInfo(
                                town,
                                flat_type,
                                floor_area_sqm,
                                lease_commence_date,
                                resale_price
                              )}
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

export default connect(mapStateToProps, { getResales })(Resale);
