import React from 'react';
import NoteContext from '../NoteContext';
import NoteNameErr from '../ErrorComps/NoteNameErr';
import NoteFolderErr from '../ErrorComps/NoteFolderErr';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            folderId: '',
            content:'',
        }
    }
    static contextType = NoteContext;

    addFolderRequest(e,newNote,cb) {
        e.preventDefault();
    
        const { uuid } = require('uuidv4');
        newNote.id = uuid();
        let time = new Date();
        newNote.modified = time.toISOString();
    
        fetch('https://obscure-peak-49376.herokuapp.com/api/notes', {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
              'content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                return res.json()
                }
                throw new Error(res.status)
            })
            .then(data => {
                cb(newNote);
                this.props.history.push('/');
    
            })
            .catch(error => {
              console.error(error)
            })
            
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    };

    updateName(name) {
        this.setState({name: name});
    }

    updateFolder(folder) {
        this.setState({folderId: folder});
    }

    updateContent(content) {
        this.setState({content: content});
    }


    validateName() {
        const name = this.state.name.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length < 3) {
            return 'Name must be at least 3 characters long';
        }
    }

    validateFolder() {
        const name = this.state.folderId.trim();
        if (name.length === 0) {
            return 'Please select folder name';
        } 
    }


            
    render() {
        const options = this.context.folders
            .map(
            (folder, i) => <option value={folder.id} key={i}>{folder.name}</option>
        );

      return (
            
            <form className="folder" onSubmit={e => this.addFolderRequest(e, this.state, this.context.addNote)}>
            <h2>Add a new note</h2>

            <label htmlFor="name">Note Name</label>
            <input type="text" 
            name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
            
            {(
                <NoteNameErr message={this.validateName()}/>
            )}
            
            <label htmlFor="folder">Note Folder</label>
            <select
            id="folder"
            name="folder"
            onChange={e => this.updateFolder(e.target.value)}>
                <option value="None">Select one...</option>
                {options}
            </select>
            {(
                <NoteFolderErr message={this.validateFolder()}/>
            )}

            <label htmlFor="content">Note Content</label>
            <input type="text" 
                name="content" id="content" onChange={e => this.updateContent(e.target.value)}/>
                
            <div>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button 
                type='submit'
                disabled={this.validateName() || this.validateFolder()}
            >
              Save
            </button>
            </div>
          </form>
        )
    }


}

export default AddNote;
