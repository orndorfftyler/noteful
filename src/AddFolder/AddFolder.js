import React from 'react';
import {Link} from 'react-router-dom';
import NoteContext from '../NoteContext';

const { uuid } = require('uuidv4');

function addFolderRequest(folder,cb) {

    const { uuid } = require('uuidv4');
    //console.log(uuid());
    folder.id = uuid();

    fetch('http://localhost:9090/folders', {
        method: 'POST',
        body: JSON.stringify(folder),
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
            cb(folder);
            
        })
        .catch(error => {
          console.error(error)
        })
      }
/*
class AddFolder extends React.Component {
    static contextType = NoteContext;
    render() {
        return (
                // give the post request and object with name property
        )
    }


}

export default AddFolder;
*/