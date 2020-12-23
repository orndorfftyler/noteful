import React from 'react';
import {Link} from 'react-router-dom';
import NoteContext from '../NoteContext';


class Folder extends React.Component {
    static contextType = NoteContext;
    render() {
    return (
        <Link to={`/folder/${this.props.id}`}>
            <div key={this.props.id} id={this.props.id} 
            className={this.context.folderSelected===this.props.id ? 'selected listItem':'listItem'}
            onClick={() => this.context.folderSelect(this.props.id)}>
                <h2>{this.props.name}</h2>
            </div>
        </Link>
    )
    }
}



export default Folder;