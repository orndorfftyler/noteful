import React from 'react';
import Note from '../Note/Note';
import NoteContext from '../NoteContext';


class SingleNote extends React.Component {
    static contextType = NoteContext;

    
    render() {
        //console.log('this.context.notes' + JSON.stringify(this.context.notes));
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