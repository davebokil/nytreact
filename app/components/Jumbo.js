// Include React
import React from 'react';

// Create the Child Component
class Jumbo extends React.Component {

    // Child has a state that follows the number of clicks
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>New York Times Article Scrubber</strong></h1>
                        <h3 className="text-center">Search for and annotate articles of interest</h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="search-term" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Jumbo;
