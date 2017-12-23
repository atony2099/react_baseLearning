import React, { Component} from 'react'
import PropTypes from 'prop-types'

export default class SelectBox extends React.Component {
    constructor(props) {
      super(props)
      this.state={value: ''}
    }

    handleChange = (e) => {
      this.setState({value: e.target.value})
      console.log(this.state.value) // previous
      e.persist();
      this.setState(((preState) => {
         // console.log(preState,props,e.target.value);
        return {value:e.target.value};
      }),(()=> {
        // console.log(this.state.value);
      })
     )
    }
    componentDidUpdate(){
      console.log(this.state.value);
    }


render() {
    return(
       <div>
           <select onChange={this.handleChange} value={this.state.value}>
              <option value="JavaScript" key={1}>JavaScript</option>
              <option value="Angular2" key={2}>Angular2</option>
              <option value="React" key={3}>React</option>
           </select>
           <h1>{this.state.value}</h1>
       </div>
    )
 }
}
