import React from 'react'

const NoteContext = React.createContext({
  folders: [],
  notes: [],
  folderSelected: '',
  noteSelected: '',
  noteSelect: () => {},
  folderSelect: () => {},
  clearSelections: () => {},
  deleteNote: () => {},
  addFolder: ()  => {},
  addNote: ()  => {},
})

export default NoteContext