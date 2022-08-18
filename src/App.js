import React from 'react';
import 'bulma/css/bulma.min.css';
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import { NotesProvider } from './context';

function App() {

  return (
    <NotesProvider>
        <Navigation/>
        <Notes />
    </NotesProvider>
    );
}

export default App;
