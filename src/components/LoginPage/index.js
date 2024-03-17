import { Component } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

import "./index.css";

class LoginPage extends Component {
  state = { email: "", password: "", errorMsg: false };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitForm = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    if (email === "" && password === "") {
      this.setState({ errorMsg: true });
    } else {
      history.replace("/");
    }
  };

  render() {
    const { email, password, errorMsg } = this.state;
    return (
      <div className="login-container">
        <div className="board-container">
          <h1 className="board-heading">Board.</h1>
        </div>
        <div className="page-container">
          <h1 className="sign-heading">Sign In</h1>
          <p className="sign-description">Sign in to your account</p>
          <div className="account-container">
            <div className="account">
              <FaGoogle className="icon" />
              <p className="google">Sign in with Google</p>
            </div>
            <div className="account">
              <FaApple className="icon" />
              <p className="google">Sign in with Google</p>
            </div>
          </div>
          <form className="details-card" onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="email">
              Email address
            </label>
            <input
              id="label"
              className="input"
              type="text"
              placeholder="Please Enter Email"
              onChange={this.onChangeEmail}
              value={email}
            />

            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="input"
              type="text"
              placeholder="Please Enter Email"
              onChange={this.onChangePassword}
              value={password}
            />
            <span className="span">Forgot password?</span>
            <button className="sign-up-button" type="submit">
              Sign In
            </button>
            {errorMsg ? (
              <p className="error">*Please Entre Valid Field</p>
            ) : null}
            <p className="krishna">
              Don’t have an account? <span className="span">Register here</span>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginPage;
