import React from 'react';

export default class AddNoteEB extends React.Component {
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
        <h2>Error in AddNote Component</h2>
        );
    }
    return this.props.children;    
    }
                    

}