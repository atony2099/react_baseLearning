import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'


class ThemeSwitch extends Component {

  constructor(){
    super();
    this.state = {
      themeColor:''
    }
  }

    static PropTypes = {
      themeColor: PropTypes.string
    }

    handleSwitch(color){
      if(this.props.onSwitchColor){
        this.props.onSwitchColor(color);
      }
    }

    render () {
      return (
        <div>
          <button style={{ color: this.state.themeColor }} onClick = {this.handleSwitch.bind(this,'red')}>Red</button>
          <button style={{ color: this.state.themeColor}} onClick = {this.handleSwitch.bind(this,'blue')} >Blue</button>
        </div>
      )
    }
  }



const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch
