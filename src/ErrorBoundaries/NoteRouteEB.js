import React from 'react';

export default class MainRouteEB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
      }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    render() {

    if (this.state.hasError) {      
        return (
        <h2>Error in Note view</h2>
        );
    }
    return this.props.children;    
    }
                    

}