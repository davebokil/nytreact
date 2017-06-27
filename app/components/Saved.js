// Include React
import React from 'react';

// Create the Child Component
class Saved extends React.Component {

    // Child has a state that follows the number of clicks

    render() {
        return (
					
	   				<div className="panel">
	              <div className="panel-heading">
	                  <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
	              </div>
	              <div className="panel-body" id="well-section">
	              THIS IS WHERE THE SAVED ARTICLES GO
	              </div>
	          </div>        
					
        );
    }
}

// Export the component back for use in other files
export default Saved;
