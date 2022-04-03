import React, { Component } from "react";
import { connect } from "react-redux";
import { NavItem } from "reactstrap";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/authActions";
import { NavLink } from "react-router-dom";
import FavButton from "../../assets/1x/btn_Favourites.png";

export class FavLink extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <NavItem className="noBullet" style={{ marginLeft: "35%" }}>
        "
        <NavLink to="/fav">
          <img src={FavButton} alt="logo" />
        </NavLink>
      </NavItem>
    );
  }
}

export default connect(null, { logout })(FavLink);
