import React from 'react';
import {Link} from 'react-router-dom';

function Note(props) {

    return (
        <Link to={`/note/${props.id}`}>
            <div key={props.id} id={props.id} 
            className={'listItem'}
            onClick={() => {props.noteSelect(props.id);
            props.folderSelect(props.folderId);}}>
                <h2>{props.name}</h2>
                <p>{props.modified}</p>
            </div>
        </Link>
    )
}



export default Note;