import React, { Component } from 'react';
import './App.css';
import ReceipeList from './components/ReceipeList';
import ReceipeDetails from './components/ReceipeDetails';
import { receipe } from './tempList'
import axios from 'axios'

class App extends Component {
  state = {
    recipes: [],
    url: 'https://www.food2fork.com/api/search?key=618236eb4a30670eeb464d768575fcee',
  }

   getRecipes = async () => {
    const data  = await axios(this.state.url)
    console.log(data.data)
    this.setState({
      recipes: data.data.recipes
    })
  }
  
  componentDidMount(){
    this.getRecipes()
  }

  render() {
    console.log("receipes",this.state.recipes)
    return (
     <React.Fragment>
       Hello from App
       <ReceipeList />
       <ReceipeDetails/>
     </React.Fragment>
    );
  }
}

export default App;
