import React, { Component } from "react";
import { connect } from "react-redux";
import { NavItem } from "reactstrap";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import ProfileButton from "../../assets/1x/btn_Profile.png";

export class ProfileLink extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <NavItem className="noBullet">
        <NavLink to="/profile">
          <img src={ProfileButton} alt="logo" />
        </NavLink>
      </NavItem>
    );
  }
}

export default connect(null, {})(ProfileLink);
