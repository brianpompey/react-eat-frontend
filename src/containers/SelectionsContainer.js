import React, { Component } from 'react';
import {connect} from 'react-redux'
import OrderSelection from '../components/OrderSelection.js'

class SelectionsContainer extends Component {


    render() {
      return (
        <div>
            <OrderSelection restaurant={this.props.restaurant}/><br/>
        </div>
      )
  
    }
  
  }
  
  export default SelectionsContainer;

