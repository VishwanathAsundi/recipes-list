 import React, { Component } from 'react';
 import {recipe} from '../tempDetails'
 
 class Recipe extends Component {
   render() {
     const {recipe, image_url, title, publisher, source_url} = this.props;
     return (
       <React.Fragment>
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
              <img src={image_url} 
                className="img-card-top"
                height={{height:"14rem"}}
                alt="recipe"
                />
                <div className="card-body text-capitalize">
                <h6>{title}</h6>
                
                <h6 className="text-warning text-slanted">
                  provided by {publisher}
                </h6>
                </div>
                <div className="card-footer">
                  <button type="button" className="btn btn-primary text-capitalize">Details</button>
                  <a href={source_url} className="btn btn-success mx-2 text-capitalize" target="_blank"  rel="noopener noreferrer">Recipe URL</a>
                
                </div>
              
              
            </div>
          </div>
       </React.Fragment>
     )
   }
 }
 
 export default  Recipe;