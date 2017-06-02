import React, { Component } from 'react';

const inline = {
	position: 'relative',
	display: 'inline-block',
	marginTop: '5px'
};

class Login extends Component {
	constructor(props) {
		super(props);

		this.clickLoginButton = this.props.clickLoginButton;
	}

	render() {
		return (
      <div className="login_container">
        <div id="username_container" className="block">
          <input
            type="text"
            placeholder="Username"
            placeholder="Username"
            className="input_text"
            style={inline}
          />
        </div>
        <div id="password_container" className="block">
          <input
            type="password"
            placeholder="Password"
            placeholder="Password"
            className="input_text"
            style={inline}
          />
        </div>
        <div id="loginButton_container" className="block">
          <button
            type="button"
            id="login_button"
            onClick={() => {
	this.clickLoginButton();
}}
          >
            Login
          </button>
        </div>
        <button type="button" id="login_button" onClick={this.clickLoginButton}>
          Create An Account
        </button>
      </div>
		);
	}
}

export default Login;
