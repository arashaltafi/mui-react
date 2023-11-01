import * as React from 'react';
import Navbar from './component/Navbar';
import {useStyles} from './style';
import { Card, CardActions, CardContent, Typography , Button } from '@material-ui/core';

function App() {
    const classes = useStyles();

    return (
        <div className= { classes.root }>
            <div>
                <Navbar />

                <Card className='mt-32 bg-red-300'>
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
                </Card>
            </div>
        </div>
    );
}

export default App;