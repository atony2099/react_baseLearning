import React, { Component} from 'react'
import PropTypes from 'prop-types';


export default class PropsTest extends React.Component {
  static propTypes = {
      comments: PropTypes.any,
      onDeleteComment: PropTypes.func,
      name:PropTypes.string,
      money:PropTypes.string.isRequired
  }

  static defaultProps = {
    comments: []
  }


  render() {
      return(
         <div>
         {this.props.name}
         </div>
      )
   }
}
