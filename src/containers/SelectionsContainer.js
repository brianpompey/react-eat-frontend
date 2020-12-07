import React, { Component } from 'react';


class SelectionsContainer extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          selections: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/v1/restaurants/26/selections')
            .then(response => response.json())
            .then(orderData => this.setState({ selections: orderData.selections }))
    }

    renderSelections = () => {
        return this.state.selections.map(selection => {
          return (
            <div className="selection">
              <h3>{ selection.order }</h3>
            </div>
          )
        })
      }
     
      render() {
        return (
          <div className="selection-list">
            { this.renderSelections() }
          </div>
        )
      }
    }
export default SelectionsContainer;