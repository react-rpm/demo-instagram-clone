import React, { Component } from 'react';
import { Link } from 'react-router';
import Login from './Login';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page_state: 'login_page'
		};
	}

	clickLoginButton() {
		this.setState({ page_state: 'app_page' });
	}

	render() {
		if (this.state.page_state === 'app_page') {
			return (
        <div>
          <h1>
            <Link to="/">Instagram Clone</Link>
          </h1>
          {React.cloneElement(this.props.children, this.props)}
        </div>
			);
		} else if (this.state.page_state === 'login_page') {
			return <Login clickLoginButton={this.clickLoginButton.bind(this)} />;
		}
	}
}

export default Main;
