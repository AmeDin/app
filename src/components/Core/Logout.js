import React, { Component } from "react";
import { connect } from "react-redux";
import { NavItem } from "reactstrap";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/authActions";
import { NavLink } from "react-router-dom";
import LogoutButton from "../../assets/1x/btn_LogOutIconDoor.png";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <NavItem className="noBullet">
        <NavLink onClick={this.props.logout} to="#">
          <img src={LogoutButton} alt="logo" />
        </NavLink>
      </NavItem>
    );
  }
}

export default connect(null, { logout })(Logout);
