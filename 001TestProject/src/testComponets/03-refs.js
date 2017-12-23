import React, { Component} from 'react'
import PropTypes from 'prop-types';


export default class PropsTest extends React.Component {

  constructor(props) {
    super(props)
    this.state={value: ''}
    this.focusTextInput = this.focusTextInput.bind(this)
    this.blurText = this.blurText.bind(this)
  }

  focusTextInput(){
    this.input.focus();
  };

  blurText(){
    this.input.blur();
  }




  render() {
      return(
          <div>
            <input type="text"
            ref = {(input) => {this.input = input}}/>
             <input type="button" value = {"clickMe"}
             onClick = {this.focusTextInput}/>

             <input type="button" value = {"blru"}
             onClick = {this.blurText}/>
         </div>
      )
   }

   componentDidMount(){


   }



}
