import * as React from 'react';
import Navbar from './component/Navbar';
import { useStyles } from './style';
import { Card, CardActions, CardContent, Typography, Button, Grid } from '@material-ui/core';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import Feed from './component/Feed';
import Add from './component/Add';

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className='w-full'>
                <Navbar />

                <Grid container>
                    <Grid item sm={2} xs={2}>
                        <RightBar />
                    </Grid>
                    <Grid item sm={7} xs={10}>
                        <Feed />
                    </Grid>
                    <Grid item sm={3} className='hidden sm:block'>
                        <LeftBar />
                    </Grid>
                </Grid>

                <Add />
            </div>
        </div>
    );
}

export default App;