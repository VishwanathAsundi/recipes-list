import React, { Component } from 'react'
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';
 
class RecipeList extends Component {
  render() {
    const {recipes} = this.props;
    console.log("recipe from RL",recipes)
    return (
      <React.Fragment>
          <RecipeSearch />
            <div className="container my-5">
                {/*Title */}        
              <div className="row">
                <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                  <h1 className="text-slanted">Recipe list</h1>
                </div>
              </div>
                {/*end of the Title */}        
              <div className="row">
                {recipes.map(recipe => {
                  return (
                    <Recipe 
                      key={recipe.recipe_id}
                      recipe={recipe}
                      image_url={recipe.image_url}
                      title={recipe.title}
                      publisher={recipe.publisher}
                      source_url={recipe.source_url}
                    />
                    
                  )
                })}
              </div>
            </div>

      </React.Fragment>
    )
  }
}

export default  RecipeList;