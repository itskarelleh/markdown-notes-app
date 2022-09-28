import React, { useContext } from 'react';
import "./App.css";
import 'bulma/css/bulma.min.css';
import Navigation from './components/nav/Navigation';
import { EditorProvider } from './context/EditorProvider';
import { NotesProvider } from './context/NotesProvider';
import Editor from './components/editor';
import { Container } from 'react-bulma-components';
import { ThemeProvider, light, dark, ThemeContext } from './context/ThemeProvider';

function App() {

  const { toggle } = useContext(ThemeContext);

  return (
    <NotesProvider>
      <ThemeProvider>
        <Container 
        className={`App container p-0 mx-0 is-fullhd is-widescreen is-fluid 
        ${toggle ? light.background.className : dark.background.className}`}>
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
