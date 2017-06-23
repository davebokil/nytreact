// Include React
import React from 'react'

// Here we include all of the sub-components
import Jumbo from"./Jumbo";

// Create the Parent Component
class Parent extends React.Component {

    // Here we render the function
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">NYT Article Scrubber</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">Saved Articles</a></li>
                    </ul>
                </nav>
            {/* Jumbotron */}
                <Jumbo/>
            </div>
        );
    }
}


// Export the component back for use in other files
export default Parent;
