import React, { Component } from 'react';
import Image from './Image';

class Photogrid extends Component {
	render() {
    //	<pre>
    //		{JSON.stringify(this.props.posts, null, ' ')}
    //	</pre>
		return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Image {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
		);
	}
}

export default Photogrid;
