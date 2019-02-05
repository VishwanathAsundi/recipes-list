import React, { Component } from 'react'
import ReceipeSearch from './ReceipeSearch';
import Receipe from './Receipe';
 
class ReceipeList extends Component {
  render() {
    return (
      <React.Fragment>
          <p>ReceipeList</p>
          <ReceipeSearch />
          <Receipe />
      </React.Fragment>
    )
  }
}

export default  ReceipeList;