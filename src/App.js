import React from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Navigation from './components/Navigation';
import { NotesProvider } from './context';
import Editor from './components/notes/Editor';

function App() {

  return (
    <NotesProvider>
        <Navigation/>
        <Editor />
    </NotesProvider>
    );
}

export default App;
