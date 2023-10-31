import * as React from 'react';
import Button from '@mui/material/Button'
import { Person } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange, red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.text
  }
}));

function App() {
  const classes = useStyles();

  const outerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });
  
  const innerTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });

  return (
    <div className={classes.button}>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl'>Test text 5 xl</h1>
        <h1 className='text-4xl'>Test text 4 xl</h1>
        <h1 className='text-3xl'>Test text 3 xl</h1>
        <h1 className='text-2xl'>Test text 2 xl</h1>
        <h1 className='text-xl'>Test text xl</h1>
        <h1 className='text-sm'>Test text sm</h1>
      </div>

      <div className='border-t border-t-gray-300 flex flex-col items-center justify-center mt-12 pt-5 child:!mt-4'>
        <p className='text-3xl font-bold'>
          Sample Buttons
        </p>
        <Button variant="text" color="primary">
          Test Button Text Primary
        </Button>

        <Button variant="outlined" color="primary">
          Test Button outlined Primary
        </Button>

        <Button variant="contained" color="secondary">
          Test Button contained secondary
        </Button>

        <Button variant="contained" color="error">
          Test Button contained error
        </Button>

        <Button variant="contained" color="success">
          Test Button contained success
        </Button>

        <Button variant="contained" color="warning">
          Test Button contained warning
        </Button>

        <Button variant="contained" color="info">
          Test Button contained info
        </Button>

        <Button variant="contained" color="primary" startIcon={ <Person /> } size='large' style={{ backgroundColor: "red", color: "blue" }}>
          Test Button contained primary startIcon
        </Button>

        <Button variant="contained" color="primary" startIcon={ <Person /> } size='large' className='!bg-red-500'>
          Test Button contained primary startIcon
        </Button>

        <Button variant="contained" color="primary" startIcon={ <Person /> } size='small' className= { classes.button }>
          Test Button contained primary startIcon 1
        </Button>

        <ThemeProvider theme={outerTheme}>
          <Checkbox defaultChecked />
          <ThemeProvider theme={innerTheme}>
            <Checkbox defaultChecked />
          </ThemeProvider>
        </ThemeProvider>

      </div>

    </div>
  );
}

export default App;