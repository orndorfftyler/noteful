import React from 'react';
import NoteContext from '../NoteContext';
import FolderNameErr from '../ErrorComps/FolderNameErr';


class AddFolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
        }
    }
    static contextType = NoteContext;

    addFolderRequest(e,name,cb) {
        e.preventDefault();
    
        const { uuid } = require('uuidv4');
        name.id = uuid();
    
        fetch('http://localhost:8000/api/folders', {
            method: 'POST',
            body: JSON.stringify(name),
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
                cb(name);
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

    validateName() {
        const name = this.state.name.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length < 3) {
            return 'Name must be at least 3 characters long';
        }
    }
            
    render() {
        return (
            
            <form className="folder" onSubmit={e => this.addFolderRequest(e, this.state, this.context.addFolder)}>
            <h2>Add a new folder</h2>
              <label htmlFor="name">Folder Name</label>
              <input type="text" 
                name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                {(
                    <FolderNameErr message={this.validateName()}/>
                )}
     
            <div >
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button 
                type='submit'
                disabled={this.validateName()}
            >
              Save
            </button>
            </div>
          </form>
        )
    }

}

export default AddFolder;
