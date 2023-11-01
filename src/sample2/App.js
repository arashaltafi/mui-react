import * as React from 'react';
import Navbar from './component/Navbar';
import {useStyles} from './style';

function App() {
    const classes = useStyles();

    return (
        <div className= { classes.root }>
            <div>
                <Navbar />
            </div>
        </div>
    );
}

export default App;