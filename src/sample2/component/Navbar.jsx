import { useStyles } from "../style";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="warning">
          <Toolbar>
            <Typography variant="h6" component="h2">
                test
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default Navbar;