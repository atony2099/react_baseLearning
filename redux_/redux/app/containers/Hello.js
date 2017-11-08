import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActionsfromother from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.log({
            userid: 'abc',
            city: 'beijing'
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.user
    }
}



function mapDispatchToProps(dispatch) {
    return {
        userinfoActions:bindActionCreators(userinfoActionsfromother,dispatch)
      }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)
