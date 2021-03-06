import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import LoginButton from "../../assets/1x/btn_Login.png";

export class Login extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") this.setState({ msg: error.msg.msg });
      else this.setState({ msg: null });
    }

    if (this.state.modal) {
      if (isAuthenticated) this.toggle();
    }
  }

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    this.props.login(user);
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <NavItem className="noBullet" style={{ marginLeft: "40%" }}>
        <NavLink onClick={this.toggle} to="#">
          <img src={LoginButton} alt="logo" />
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Button
                  className="btn btn-warning"
                  style={{ marginTop: "2rem", color: "white" }}
                  block
                >
                  Login
                </Button>
                <Button
                  className="btn btn-secondary"
                  style={{ marginTop: "2rem", color: "white" }}
                  block
                >
                  Forget password
                </Button>
                <Button
                  className="btn btn-secondary"
                  style={{ marginTop: "2rem", color: "white" }}
                  block
                >
                  Sign up
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </NavItem>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
