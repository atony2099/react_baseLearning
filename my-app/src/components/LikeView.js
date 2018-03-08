import React, { Component } from 'react';

class LikeView  extends Component {
  render() {
    let {like} = this.props;
    like = 'chile'
    return (
      <h1>{like}</h1>
    );
  }
}

export default LikeView;
