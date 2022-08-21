import React from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Navigation from './components/Navigation';
import { EditorProvider, NotesProvider } from './context';
import Editor from './components/notes/Editor';
import { Container } from 'react-bulma-components';

function App() {

  return (
    <NotesProvider>
      <div className="is-widescreen is-fluid is-fullwidth">
        <Navigation/>
        <EditorProvider>
          <Editor />
        </EditorProvider>
      </div>
      {/* <Container marginless max className="App"> */}
      {/* </Container> */}
   
    </NotesProvider>
    );
}

export default App;
