import React, { Component } from 'react';
import Image from './Image';
import Comments from './Comments';
import WastefulComment from './WastefulComment';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wastefulArr: [],
    };
  this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleSubmit(e) {
    // stop page from refreshing
		e.preventDefault();
		let { wastefulArr } = this.state;
		wastefulArr.push(<WastefulComment />);
		this.setState({ wastefulArr });
		// console.log(this.state.wastefulArr);
		// this.refs.commentForm.reset();
	}

	render() {
    // set variable for postId
		const { postId } = this.props.params;
    // find index of the post
    // access the post code in the url
		const i = this.props.posts.findIndex(post => post.code === postId);
    // get us the post
		const post = this.props.posts[i];
    // get us the comments for the post
		const postComments = this.props.comments[postId] || [];
		return (
      <div className="single-photo">
        <Image i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} handleSubmit={this.handleSubmit} wastefulArr={this.state.wastefulArr}/>
      </div>
		);
	}
}

export default Single;
