import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import Appbar from './components/Appbar';
import Notes from './components/Notes';
import { NotesProvider, NotesContext } from './context';

function App() {

  return (
    <NotesProvider>
        <Appbar />
        <Notes />
    </NotesProvider>
    );
}

export default App;
