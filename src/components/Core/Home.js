import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  NavLink,
  NavItem,
  Input,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MultiToggle from "react-multi-toggle-extra";

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

  componentDidMount() {
    const defaultSetting = {
      isHiragana: this.state.isHiragana,
      level: this.state.level,
    };
  }

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

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Container fluid style={{ maxWidth: "540px", margin: "0 auto" }}>
          <Form onSubmit={this.onSubmit}>
            <Row xs="2">
              <MultiToggle
                options={this.groupOptions}
                selectedOption={this.state.level}
                onSelectOption={this.onGroupSizeSelect}
              />
            </Row>
            <Row>
              <Col xs="2" className="plsi">
                <Dropdown
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
                          checked={this.state.selectedOption === "All"}
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
                          checked={this.state.selectedOption === "HDB"}
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
                          checked={this.state.selectedOption === "Condo"}
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
                          checked={this.state.selectedOption === "Landed"}
                          onChange={this.onRadioTypeChange}
                        />
                      </Col>
                      <Col xs="10">
                        <label htmlFor="Landed">Landed</label>
                      </Col>
                    </Row>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col xs="8" className="px-0">
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Postal Code to Search"
                  onChange={this.onChange}
                  style={{ margin: "auto", textAlign: "center" }}
                  autoFocus
                />
              </Col>
              <Col xs="2">
                <Button color="dark" block>
                  Pin
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Home);
