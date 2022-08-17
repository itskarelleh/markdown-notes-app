import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import { NotesProvider, NotesContext } from './context';

function App() {

  return (
    <NotesProvider>
        <Navigation/>
        <Notes />
    </NotesProvider>
    );
}

export default App;
