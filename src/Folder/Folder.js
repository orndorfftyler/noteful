import React from 'react';
import {Link} from 'react-router-dom';


function Folder(props) {

    return (
        <Link to={`/folder/${props.id}`}>
            <div key={props.id} id={props.id} 
            className={props.folderSelected===props.id ? 'selected listItem':'listItem'}
            onClick={() => props.folderSelect(props.id)}>
                <h2>{props.name}</h2>
            </div>
        </Link>
    )
}



export default Folder;