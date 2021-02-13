import React from 'react';
import {Link} from 'react-router-dom';
import NoteContext from '../NoteContext';
import PropTypes from 'prop-types';

function deleteNoteRequest(id,cb) {
    fetch('https://obscure-peak-49376.herokuapp.com/api/notes' + `/${id}`, {
        method: 'DELETE',
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
        })
        .then(data => {
            cb(id);
            
        })
        .catch(error => {
          console.error(error)
        })
      }

class Note extends React.Component {
    static contextType = NoteContext;
    render() {

    let button = (this.props.single) 
        ? <Link to='/' onClick={this.context.clearSelections}><button onClick={() => {
             deleteNoteRequest(this.props.id,this.context.deleteNote)}}>Delete</button></Link>
        : <button onClick={() => {deleteNoteRequest(this.props.id,this.context.deleteNote)}}>Delete</button>;
    return (
        <>
        <Link to={`/note/${this.props.id}`}>
            <div key={this.props.id} id={this.props.id} 
            className={'listItem'}
            onClick={() => {this.context.noteSelect(this.props.id);
                this.context.folderSelect(this.props.folderId);}}>
                <h2>{this.props.name}</h2>
                <p>{this.props.modified}</p>
            </div>
        </Link>
        {button}
        </>
    )
            }
}

export default Note;

Note.propTypes = {
    id: PropTypes.string,
    folderId: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string,
    single: PropTypes.bool
  };