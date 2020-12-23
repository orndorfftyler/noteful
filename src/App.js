import React, { Component } from 'react';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import {Route, Link} from 'react-router-dom';
//import store from './store';
import SingleNote from './SingleNote/SingleNote';
import SingleFolder from './SingleFolder/SingleFolder';
import NoteContext from './NoteContext';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      folderSelected: '',
      noteSelected: ''
    }
  }


  noteSelect = (id) => {
    this.setState({
      noteSelected: id
    })
  }

  folderSelect = (id) => {
    this.setState({
      folderSelected: id
    })
  }

  clearSelections = () => {
    this.setState({
      noteSelected: '',
      folderSelected: ''
    })
  }

  deleteNote = (id) => {
    let newNotes = this.state.notes.filter(obj => (obj.id !== id));
    this.setState({
      notes: newNotes,
    })
  }

  componentDidMount = () => {

    fetch('http://localhost:9090/folders')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(res.status)
      })
      .then(resJson =>
        //console.log(resJson)
        
        this.setState({
          folders: resJson
        })
        
        )
      .catch(error => console.log({ error }))
  

    fetch('http://localhost:9090/notes')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res.status)
    })
    .then(resJson =>
      //console.log(resJson)
      
      this.setState({
        notes: resJson
      })
      
      )
    .catch(error => console.log({ error }))
  }

  

  render() {

    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      folderSelected: this.state.folderSelected,
      noteSelected: this.state.noteSelected,
      noteSelect: this.noteSelect,
      folderSelect: this.folderSelect,
      clearSelections: this.clearSelections,
      deleteNote: this.deleteNote,
    };
  

  return (
    <div className="column">
      <header>
        <Link to='/'><h1 onClick={this.clearSelections}>Noteful </h1></Link>
      </header>
      <main >
        <NoteContext.Provider value={contextValue}>
          {/* main route */}
          <Route 
                exact path='/'
                component={FolderList}
          />
          <Route 
                exact path='/'
                component={NoteList}
          />
          {/* folder route */}
          <Route 
                path='/folder/:folderId'
                component={FolderList}
          />
          <Route 
                path='/folder/:folderId'
                component={NoteList}
          />

          {/* note route */}
          <Route 
                path='/note/:noteId'
                component={SingleFolder}
          />
          <Route 
                path='/note/:noteId'
                component={SingleNote}
          />


        </NoteContext.Provider>
      </main>

    </div>
  );
}
}

export default App;