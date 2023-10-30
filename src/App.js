import { Snackbar } from '@mui/material';
import Button from '@mui/material/Button'
import * as React from 'react';


function App() {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="App flex items-center justify-center flex-col m-5">

        <h1 className="text-3xl text-red-500 font-bold underline mb-6">
          Hello world!
        </h1>

        <h1>سلام دنیا</h1>

        <Button>
          test button
        </Button>

        <Button variant='contained' color='primary'>
          test button contained primary
        </Button>

        <Button variant='outlined' color='error'>
          test button outlined error
        </Button>

        <Button variant='contained' color='secondary'>
          test button outlined secondary
        </Button>

        <Button variant='contained' color='warning'>
          test button outlined warning
        </Button>

        <Button variant='contained' color='info'>
          test button outlined info
        </Button>

        <Button variant='contained' color='success'>
          test button outlined success
        </Button>

        <Button onClick={handleClick}>Open simple snackbar</Button>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          message="Note archived"
        />

    </div>
  );
}

export default App;
