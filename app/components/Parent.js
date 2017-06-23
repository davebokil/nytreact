// Include React
import React from 'react'

// Create the Parent Component
class Parent extends React.Component {

    // Here we render the function
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h2>All my children: A Tale of Reactive Components</h2>
                    </div>
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Parent</h3>
                            </div>
                            <div className="panel-body text-center">
                                <h1>Hi</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


// Export the component back for use in other files
export default Parent;
