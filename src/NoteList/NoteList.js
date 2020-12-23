import React from 'react';
import Note from '../Note/Note';
import NoteContext from '../NoteContext';


class NoteList extends React.Component {
    static contextType = NoteContext;

    render() {

        let selectedNotes = [];
        if (this.context.folderSelected) {
            selectedNotes = this.context.notes.filter(item => item.folderId === this.context.folderSelected);
        } else {
            selectedNotes = this.context.notes;
        }

        let temp = selectedNotes.map((note) => {
            return (
                <Note 
                    key={note.id}
                    id={note.id}
                    folderId={note.folderId}
                    name={note.name}
                    modified={note.modified}
                    single={false}
                />
                );
            
    });
         

    return (
        <div className='list'>
            {temp}
        </div>
    );
    }
}

export default NoteList;