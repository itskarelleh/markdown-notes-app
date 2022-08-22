import React from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Navigation from './components/Navigation';
import { EditorProvider, NotesProvider } from './context';
import { Editor } from './components/editor';
import { Container } from 'react-bulma-components';

function App() {

  return (
    <NotesProvider>
      <Container backgroundColor='light' className="App is-widescreen is-fluid is-fullwidth">
        <EditorProvider>
          <Navigation/>
          <div className="editor">
            <Editor />
          </div>
        </EditorProvider>
      </Container>
      {/* <Container marginless max className="App"> */}
      {/* </Container> */}
   
    </NotesProvider>
    );
}

export default App;
