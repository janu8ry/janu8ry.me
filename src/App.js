import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { NavBar } from './components';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Projects, Social, NotFound } from './pages';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac'
    }
};
const theme = extendTheme({ colors });

function App() {
    localStorage.setItem('chakra-ui-color-mode', 'dark');
    return (
        <ChakraProvider theme={theme}>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/social" component={Social} />
                <Route component={NotFound} />
            </Switch>
            {/* todo: footer */}
        </ChakraProvider>
    );
}

export default App;
