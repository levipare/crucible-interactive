import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import './App.css';
import InteractiveMap from './Components/InteractiveMap/InteractiveMap';

const themeDark = createTheme({
    palette: {
        background: {
            default: '#222222',
        },
        text: {
            primary: '#ffffff',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline /> <InteractiveMap />
        </ThemeProvider>
    );
}

export default App;
