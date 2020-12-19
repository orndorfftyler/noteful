import React from 'react';
import Folder from '../Folder/Folder';
//import { withRouter } from 'react-router-dom';


function SingleFolder(props) {
    return (
        <div className="list">
            <Folder 
                key={props.folder.id}
                id={props.folder.id}
                name={props.folder.name}
                folderSelected={props.folderSelected}
                folderSelect={props.folderSelect}
            />
            <button onClick={props.goBack}>Back</button>
        </div>
        );

}

export default SingleFolder;