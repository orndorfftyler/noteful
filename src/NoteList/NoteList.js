import React from 'react';
import Note from '../Note/Note';

function NoteList(props) {
    let temp = props.notes.map((note) => {
        return (
            <Note 
                key={note.id}
                id={note.id}
                folderId={note.folderId}
                name={note.name}
                modified={note.modified}
                noteSelected={props.noteSelected} 
                noteSelect={props.noteSelect}
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

export default NoteList;