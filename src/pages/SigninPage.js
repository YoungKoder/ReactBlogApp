import React, { PureComponent } from "react";
import AuthSignin from "../components/auth/AuthSignin";
import Button from "../components/common/Button";
import Input from "../components/common/input/Input";

export default class SigninPage extends PureComponent {
  render() {
    const { onChange, onSubmit, onLogin } = this.props;
    return (
      <form className="form" onSubmit={onSubmit}>
        <div className="form__section">
          <input
            label="Email"
            value={this.props.user.email}
            type="text"
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="form__section">
          <input
            label="Password"
            value={this.props.user.password}
            type="text"
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="form__section">
          <Button type="submit" onClick={onLogin} content="Submit" />
        </div>
      </form>
    );
  }
}
