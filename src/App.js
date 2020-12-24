import React, { Component } from 'react';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import {Route, Link} from 'react-router-dom';
//import store from './store';
import SingleNote from './SingleNote/SingleNote';
import SingleFolder from './SingleFolder/SingleFolder';
import NoteContext from './NoteContext';
import Nav from './Nav/Nav';
//import AddNote from './AddNote/AddNote';
import AddFolder from './AddFolder/AddFolder';


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
    console.log('clearSelections called');
  }

  deleteNote = (id) => {
    let newNotes = this.state.notes.filter(obj => (obj.id !== id));
    this.setState({
      notes: newNotes,
    })
  }

  addFolder = (folder) => {
    this.setState({
      folders: [folder, ...this.state.folders], 
    })
    console.log('addFolder called');
    console.log(this.state.folders);
  }

  addNote = (note) => {
    this.setState({
      notes: [note, ...this.state.notes], 
    })
    console.log('addNote called');
    console.log(this.state.notes);
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
      addFolder: this.addFolder,
      addNote: this.addNote,
    };
  

  return (
    <div className="column">
      <NoteContext.Provider value={contextValue}>

        <header>
          <Nav />
          
        </header>
        <main >
          {/*
          <Route 
                path='/add-note'
                component={AddNote}
          />
          */}
          {/*
          <Route 
                path='/add-folder'
                component={AddFolder}
          />
          */}

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


        </main>
      </NoteContext.Provider>
    </div>
  );
}
}

export default App;