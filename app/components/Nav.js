// Include React
import React from 'react'

// Here we include all of the sub-components
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Saved from"./Saved";
import Results from"./Results";
import Jumbo from"./Jumbo";

// Create the Parent Component
class Parent extends React.Component {

    // Here we render the function
    render() {
        return (
            <Router>
            <div>
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <Link to="/results">
                        <a className="navbar-brand" href="/saved">NYT Article Scrubber</a>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav">
                    <li class="nav-item active">
                        <Link to="/saved">
                        <a class="nav-link" href="/saved">Saved Articles</a>
                        </Link>
                    </li>
                    </ul>
                </nav>
            {/* Jumbotron */}
                <Jumbo/>
                <div className="container">
                <Route path="/results" component={Results}/>
                <Route path="/saved" component={Saved}/>
                </div>
            </div>
            </Router>
        );
    }
}


// Export the component back for use in other files
export default Parent;
