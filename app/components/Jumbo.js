// Include React
import React from 'react';

import Search from"./Search";

// Create the Child Component
class Jumbo extends React.Component {

    // Child has a state that follows the number of clicks

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>  New York Times Article Scrubber</strong></h1>

                </div>
            <Search/>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Jumbo;
