import React from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Navigation from './components/nav/Navigation';
import { EditorProvider, NotesProvider } from './context';
import Editor from './components/editor';
import { Container } from 'react-bulma-components';

function App() {

  return (
    <NotesProvider>
      <Container 
      className="App container p-0 mx-0 is-fullhd is-widescreen is-fluid">
        <EditorProvider>
          <Navigation/>
            <Editor />
        </EditorProvider>
      </Container>
    </NotesProvider>
    );
}

export default App;
