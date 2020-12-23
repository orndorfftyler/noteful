import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import NoteContext from '../NoteContext';

//import { withRouter } from 'react-router-dom';


class SingleFolder extends Component {
    static contextType = NoteContext;


    render() {
        let selectedFolder = this.context.folders.find(item => item.id === this.context.folderSelected);

    return (
        <div className="list">
            <Folder 
                key={selectedFolder.id}
                id={selectedFolder.id}
                name={selectedFolder.name}
            />
            <button onClick={this.props.history.goBack}>Back</button>
        </div>
        );
    }
}

export default SingleFolder;