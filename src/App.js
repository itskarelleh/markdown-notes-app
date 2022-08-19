import React from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Navigation from './components/Navigation';
import { NotesProvider } from './context';
import Editor from './components/notes/Editor';
import { Container } from 'react-bulma-components';

function App() {


  return (
    <NotesProvider>
      <Container className="App" widescreen={true}>
        <Navigation/>
        <Editor />
      </Container>
   
    </NotesProvider>
    );
}

export default App;
