import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import './App.css';
import InteractiveMap from './Components/InteractiveMap/InteractiveMap';

const themeDark = createTheme({
    palette: {
        mode: 'dark',
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
