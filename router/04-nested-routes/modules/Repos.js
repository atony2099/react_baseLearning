import React from 'react'

export default React.createClass({
  render() {
    const {params} = this.props;
    return <div>{params.name}   {params.age}</div>
  }
})
