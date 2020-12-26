import React from 'react';
import Folder from '../Folder/Folder';
import NoteContext from '../NoteContext';
import PropTypes from 'prop-types';

class FolderList extends React.Component {
    static contextType = NoteContext;
    
    render() {

    let temp = this.context.folders.map((folder) => {
        return (
            <Folder 
                key={folder.id}
                id={folder.id}
                name={folder.name}
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

export default FolderList;

FolderList.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
  };