import { render } from 'react-dom';
import React from 'react';
import Post from './Post';

// get each data point into Post
// render image in Post

const Feed = props => {
	const { data } = props;
	let postArr = [];

	postArr.push(
    data.map(element => {
	return <Post id={element.id} url={element.url} />;
})
  );

	console.log(postArr);
	return <div>{postArr}</div>;

  // array of Posts
};

export default Feed;
