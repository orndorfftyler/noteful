import React, { Component } from 'react';
import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import {Route, Link} from 'react-router-dom';
import store from './store';
import SingleNote from './SingleNote/SingleNote';
import SingleFolder from './SingleFolder/SingleFolder';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: store.folders,
      notes: store.notes,
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

  render() {
  return (
    <div className="column">
      <header>
        <Link to='/'><h1 onClick={this.clearSelections}>Noteful </h1></Link>
      </header>
      <main >
      {/* main route */}
      <Route 
            exact path='/'
            render={() => {
              return (
                <>
                <FolderList 
                  folders={this.state.folders}
                  folderSelected={this.state.folderSelected}
                  folderSelect={this.folderSelect}
                />
                <NoteList 
                  notes={this.state.notes}
                  noteSelected={this.state.noteSelected}
                  noteSelect={this.noteSelect}
                  folderSelect={this.folderSelect}
                />
                </>
                  )}
            }
      />
      {/* folder route */}
      <Route 
            path='/folder/:folderId'
            render={() => {
              let selectedNotes = this.state.notes.filter(item => item.folderId === this.state.folderSelected);
              return (
                <>
                <FolderList 
                  folders={this.state.folders}
                  folderSelected={this.state.folderSelected}
                  folderSelect={this.folderSelect}
                />
                <NoteList 
                  notes={selectedNotes}
                  noteSelected={this.state.noteSelected}
                  noteSelect={this.noteSelect}
                  folderSelect={this.folderSelect}
                />
                </>
                  )}
            }
      />
      {/* note route */}
      <Route 
            path='/note/:noteId'
            render={({ history }) => {
              let selectedNote = this.state.notes.find(item => item.id === this.state.noteSelected);
              let selectedFolder = this.state.folders.find(item => item.id === this.state.folderSelected);

              return (
                <>
                <SingleFolder 
                  folder={selectedFolder}
                  folderSelected={this.state.folderSelected}
                  folderSelect={this.folderSelect}
                  goBack={() => history.goBack()}
                />
                <SingleNote 
                  note={selectedNote}
                  noteSelected={this.state.noteSelected}
                  noteSelect={this.noteSelect}
                  folderSelect={this.folderSelect}
                />
                </>
                  )}
            }
      />

      </main>

    </div>
  );
}
}

export default App;