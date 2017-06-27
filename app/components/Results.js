// Include React
import React from 'react';

// Create the Child Component
class Results extends React.Component {

    // Child has a state that follows the number of clicks

    render() {
        return (
					
	   				<div className="panel">
	              <div className="panel-heading">
	                  <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Search Results</strong></h3>
	              </div>
	              <div className="panel-body" id="well-section">
	              THIS IS WHERE THE RESULTS WILL APPEAR
	              </div>
	          </div>        
					
        );
    }
}

// Export the component back for use in other files
export default Results;
