
import React, { Component, Fragment } from 'react';
import {
    Collapse, Navbar, NavbarToggler, 
    NavItem,  Container
} from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';

import Login from '../Core/Login';
import Logout from '../Core/Logout';

class TopNavBar extends Component {
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeNavBartoggle = () => {
        if(this.state.isOpen){
            this.toggle()
        }
    }

    render(){
        console.log(this.props)
        const { isAuthenticated } = this.props.auth

        const authLinks = (
                
            <Fragment>
                <NavItem className="noBullet">   
                    <NavLink to="/resale" onClick={this.closeNavBartoggle}>
                        Resale
                    </NavLink>
                </NavItem>
                <NavItem className="noBullet">
                    <NavLink to="/rental" onClick={this.closeNavBartoggle}>
                        Rental
                    </NavLink>
                </NavItem>
                <NavItem className="noBullet">
                    <NavLink to="/mortage" onClick={this.closeNavBartoggle}>
                        Mortage
                    </NavLink>
                </NavItem>
                <NavItem className="noBullet">
                    <NavLink to="/about" onClick={this.closeNavBartoggle}>
                        About Us
                    </NavLink>
                </NavItem>
                <Logout />
            </Fragment>
        );

        const guestLinks = (
                
            <Fragment>
                <NavItem className="noBullet">   
                    <NavLink to="/resale" onClick={this.closeNavBartoggle}>
                        Resale
                    </NavLink>
                </NavItem>
                <NavItem className="noBullet">
                    <NavLink to="/rental" onClick={this.closeNavBartoggle}>
                        Rental
                    </NavLink>
                </NavItem>
                <NavItem className="noBullet">
                    <NavLink to="/mortage" onClick={this.closeNavBartoggle}>
                        Mortage
                    </NavLink>
                </NavItem>
                <NavItem className="noBullet">
                    <NavLink to="/about" onClick={this.closeNavBartoggle}>
                        About Us
                    </NavLink>
                </NavItem>
                <Login />
        </Fragment>
        );

        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <NavLink to="/" exact className="navbar-brand">Logo</NavLink>
                            { isAuthenticated ? authLinks : guestLinks } 
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default compose(
    withRouter,
    connect(mapStateToProps)
  )(TopNavBar);