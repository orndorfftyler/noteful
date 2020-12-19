import React from 'react';
import Note from '../Note/Note';

function SingleNote(props) {
    return (
        <div className="list">
            <Note 
                key={props.note.id}
                id={props.note.id}
                folderId={props.note.folderId}
                name={props.note.name}
                modified={props.note.modified}
                noteSelected={props.noteSelected} 
                noteSelect={props.noteSelect}
                folderSelect={props.folderSelect}

            />
            <p>{props.note.content}</p>
        </div>
        );

}

export default SingleNote;