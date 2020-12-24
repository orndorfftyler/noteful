import React from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';

export default class Nav extends React.Component {
    static contextType = NoteContext;
    render() {
        return (
            <nav className='Nav'>
                <Link to='/' onClick={this.context.clearSelections}><h1>Noteful </h1></Link>      
                {' '}
            <Link to={'/add-note'}>
                Add Note
            </Link>
            <Link to={'/add-folder'}>
                Add Folder
            </Link>

            </nav>
        );
    }
}
