import React, { PureComponent } from "react";
import SigninPage from "../../pages/SigninPage";
import Button from "../common/Button";

export default class AuthLogin extends PureComponent {
  constructor() {
    super();

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  loginHandler = () => {};
  render() {
    return (
      <div>
        <SigninPage
          {...this.state}
          onChange={this.handleInputChange}
          onLogin={this.loginHandler}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
