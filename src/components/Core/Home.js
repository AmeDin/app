import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
  Input,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import MultiToggle from "react-multi-toggle-extra";
import ButtonSearch from "../../assets/1x/btn_Search.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      level: 1,
      isHiragana: true,
      groupSize: 3,
      isOpen: false,
      dropdownAOpen: false,
      selectedTypeOption: "All",
    };

    this.onRadioTypeChange = this.onRadioTypeChange.bind(this);
  }

  groupOptions = [
    {
      displayName: "Resale",
      selectedDisplayName: "Resale",
      value: 1,
    },
    {
      displayName: "Rental",
      selectedDisplayName: "Rental",
      value: 2,
    },
  ];

  static propTypes = {};

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log("toggle");
  };

  toggleFilter = (e) => {
    e.preventDefault();
    this.setState({
      filterOpen: !this.state.filterOpen,
    });
    console.log("toggleFilter");
  };

  closeNavBartoggle = () => {
    if (this.state.isOpen) {
      this.toggle();
    }
    console.log("closeNavBartoggle");
  };

  componentDidMount() {}

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(this.state.search);
  };

  onRadioTypeChange(event) {
    this.setState({
      selectedTypeOption: event.target.value,
    });
    console.log(this.state.selectedTypeOption);
    console.log(event.target.value);
  }

  onGroupSizeSelect = (value) => {
    this.setState({ level: value }, () => {
      console.log(this.state.level);
    });
  };

  onCheckboxChecked(event) {
    this.setState({
      selectedTypeOption: event.target.value,
    });
    console.log(this.state.selectedTypeOption);
    console.log(event.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Container fluid style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Form onSubmit={this.onSubmit}>
            <Row xs="12">
              <h1 className="home-header">FIND YOUR PERFECT HOME</h1>
            </Row>
            <Row xs="12">
              <Col xs="2" className="plsi">
                {/* <Dropdown
                  isOpen={this.state.filterOpen}
                  toggle={this.toggleFilter}
                  className="px-0"
                >
                  <DropdownToggle caret>Filter</DropdownToggle>
                  <DropdownMenu>
                    <Row>
                      <Col xs="2">
                        <input
                          type="radio"
                          value="All"
                          checked={this.state.selectedTypeOption === "All"}
                          onChange={this.onRadioTypeChange}
                        />
                      </Col>
                      <Col xs="10">
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
                      <Col xs="10">
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
                      <Col xs="10">
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
                      <Col xs="10">
                        <label htmlFor="Landed">Landed</label>
                      </Col>
                    </Row>
                  </DropdownMenu>
                </Dropdown> */}
              </Col>
              <Col xs="8" className="px-0 region">
                <Row style={{ textAlign: "left" }}>
                  <h3 className="region-header">Select Region</h3>
                </Row>
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
                <Row>
                  <div className="spacer"></div>
                </Row>
              </Col>
              <Col xs="2">
                <Button
                  block
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    marginTop: "5em",
                  }}
                >
                  <img src={ButtonSearch} alt="btnSearch" />
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <div className="bg"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Home);
