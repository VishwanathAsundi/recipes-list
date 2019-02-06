import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { recipes } from './tempList'
import axios from 'axios'

class App extends Component {
  state = {
    recipes: recipes,
    url: 'https://www.food2fork.com/api/search?key=618236eb4a30670eeb464d768575fcee',
  }

  //  getRecipes = async () => {
  //   const data  = await axios(this.state.url)
  //   const res = data.data.recipe
  //   this.setState({
  //     recipes: res
  //   })
  // }
  
  // componentDidMount(){
  //   this.getRecipes()
  // }

  render() {
    console.log("recipes",this.state.recipes)
    return (
     <React.Fragment>
       Hello from App
       <RecipeList recipes={this.state.recipes}/>
       <RecipeDetails/>
     </React.Fragment>
    );
  }
}

export default App;
