import React from 'react';
import Note from '../Note/Note';
import NoteContext from '../NoteContext';


class SingleNote extends React.Component {
    static contextType = NoteContext;
    
    render() {
        let selectedNote = this.context.notes.find(item => item.id === this.context.noteSelected);
        return (
        <div className="list">
            <Note 
                key={selectedNote.id}
                id={selectedNote.id}
                folderId={selectedNote.folderId}
                name={selectedNote.name}
                modified={selectedNote.modified}
                single={true}

            />
            <p>{selectedNote.content}</p>
        </div>
        );
    }

}

export default SingleNote;