import React, { Component } from 'react';
import WastefulReaction from './WastefulReaction';

class WastefulComment extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div className="comment">
        <p>
          <strong>Random User</strong>
          Woooo
          <WastefulReaction />
          <button className="remove-comment">
            ×
          </button>
        </p>
      </div>
		);
	}
}

export default WastefulComment;
