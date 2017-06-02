// comments
// likes
import { render } from 'react-dom';
import React from 'react';
import Image from './Image';
import CommentBox from './CommentBox';

const Post = props => {
	const { id, url } = props;
	return <div><Image id={id} url={url}/><CommentBox /></div>;
};

export default Post;
