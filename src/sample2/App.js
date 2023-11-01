import * as React from 'react';
import Navbar from './component/Navbar';
import { useStyles } from './style';
import { Card, CardActions, CardContent, Typography, Button, Grid } from '@material-ui/core';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';
import Feed from './component/Feed';

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className='w-full'>
                <Navbar />

                <Grid container>
                    <Grid item sm={3} className='hidden sm:block'>
                        <RightBar />
                    </Grid>
                    <Grid item sm={7} xs={10}>
                        <Feed />
                    </Grid>
                    <Grid item sm={2} xs={2}>
                        <LeftBar />
                    </Grid>
                </Grid>


                {/* <Card className='mt-32 bg-red-300'>
                    <CardContent className='bg-green-400'>
                        <Typography>
                            Test
                        </Typography>
                    </CardContent>
                    <CardActions className='bg-yellow-400'>
                        <Button>
                            Test
                        </Button>
                    </CardActions>
                </Card> */}
            </div>
        </div>
    );
}

export default App;