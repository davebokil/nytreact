// Include React
import React from 'react';

import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Saved from"./Saved";
import Results from"./Results";

// Helper for making AJAX requests to the API

// Create the Child Component
class Search extends React.Component {

    // Child has a state that follows the number of clicks

    render() {
        return (
					<div>
					  <div className="panel">
					      <div className="panel-heading">
					          <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
					      </div>
					      <div className="panel-body">
					          <form role="form">
					              <div className="form-group">
					                  <label for="search">Search Term:</label>
					                  <input type="text" value="test" className="form-control" id="search-term"/>
					              </div>
					              <div className="form-group">
					                  <label for="start-year">Start Year (Optional):</label>
					                  <input type="text" className="form-control" value="test" id="start-year"/>
					              </div>
					              <div className="form-group">
					                  <label for="end-year">End Year (Optional):</label>
					                  <input type="text" className="form-control" value="test" id="end-year"/>
					              </div>
					              <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
					              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
					          </form>
					      </div>
					  </div>      
					</div>
        );
    }
}

// Export the component back for use in other files
export default Search;
