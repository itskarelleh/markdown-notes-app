import React from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Navigation from './components/nav/Navigation';
import { EditorProvider } from './context/EditorProvider';
import { NotesProvider } from './context/NotesProvider';
import Editor from './components/editor';
import { Container } from 'react-bulma-components';
import { ThemeProvider } from './context/ThemeProvider';

function App() {

  return (
    <NotesProvider>
      <ThemeProvider>
      <Container 
      className="App container p-0 mx-0 is-fullhd is-widescreen is-fluid">
        <EditorProvider>
            <Navigation/>
            <Editor />
        </EditorProvider>
      </Container>
      </ThemeProvider>
    </NotesProvider>
    );
}

export default App;
