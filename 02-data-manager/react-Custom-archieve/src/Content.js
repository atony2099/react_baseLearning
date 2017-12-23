import React, { Component} from 'react'
import ThemeSwitch from './ThemeSwitch.js'
import PropTypes from 'prop-types'
import {connect} from './Connect.js'

class Content extends Component {
  static PropTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

// 告诉高阶组件需要的数据
const mapStateToProps = (state)=> {
  return{
    themeColor:state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)
export default Content
