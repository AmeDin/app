import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

class Profile extends Component {
  render() {
    return (
      <Container style={{ maxWidth: "380px", margin: "0 auto" }}>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email" className="grey">
              Email
            </Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="admin@ulala.com"
              className="mb-3"
              onChange={this.onChange}
            />
            <Label for="username" className="grey">
              Username
            </Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="admin"
              className="mb-3"
              onChange={this.onChange}
            />
            <Label for="pw" className="grey">
              Change Password
            </Label>
            <Input
              type="text"
              name="pw"
              id="pw"
              placeholder=""
              className="mb-3"
              onChange={this.onChange}
            />
          </FormGroup>
          <Row>
            <div className="spacer"></div>
          </Row>
          <Row>
            <Col xs="2"></Col>
            <Col xs="8">
              <Button className="btn btn-warning">Save changes</Button>
            </Col>
            <Col xs="2"></Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Profile;
