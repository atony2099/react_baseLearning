import React, { Component } from 'react'
import PropTypes from 'prop-types'
class ThemeSwitch extends Component {
  static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
      super()
      this.state = { themeColor: '' }
    }

    componentWillMount () {
      this._updateThemeColor()
      const store = this.context.store;
      store.subscribe(()=>this._updateThemeColor())
    }

    _updateThemeColor () {
      const { store } = this.context
      const state = store.getState()
      this.setState({ themeColor: state.themeColor })
    }

    handleSwitch(color){
      const store = this.context.store;
      store.dispatch({
        type:"CHANGE_COLOR",
        themeColor:color
      })
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

export default ThemeSwitch
