import React, { Component } from 'react';
import WastefulComment from './WastefulComment';

class Comments extends Component {
	constructor(props) {
		super(props);
	}
	renderComment(comment, i) {
		return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              i
            )}
          >
            ×
          </button>
        </p>
      </div>
		);
	}

  	shouldComponentUpdate(nextProps, nextState) {
		console.log('nextProps', nextProps);
		console.log('this.props', this.props);
		return (nextProps.postComments !== this.props.postComments) || (nextProps.wastefulArr !== this.props.wastefulArr);
	}

	render() {
    // console.log('props are',this.props);
    // console.log(this.props);
		return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}
        <WastefulComment />
        {this.props.wastefulArr}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.props.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
		);
	}
}

export default Comments;
