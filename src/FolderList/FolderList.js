import React from 'react';
import Folder from '../Folder/Folder';

function FolderList(props) {
    let temp = props.folders.map((folder) => {
        return (
            <Folder 
                key={folder.id}
                id={folder.id}
                name={folder.name}
                folderSelected={props.folderSelected}
                folderSelect={props.folderSelect}
            />
            );
    });

    return (
        <div className='list'>
            {temp}
        </div>
    );
}

export default FolderList;