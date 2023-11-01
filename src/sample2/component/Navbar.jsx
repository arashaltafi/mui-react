import { Search } from "@mui/icons-material";
import { useStyles } from "../style";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { InputBase } from "@material-ui/core";

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary">
          <Toolbar>
            {/* <Typography variant="h6" component="h2" className="hidden sm:block">
                وبلاگ آرش
            </Typography>
            <Typography variant="h6" component="h2" className="block sm:hidden">
                آرش
            </Typography> */}
            <Typography variant="h6" component="h2" className={ classes.logoLg }>
                وبلاگ آرش
            </Typography>
            <Typography variant="h6" component="h2" className={ classes.logoSm }>
                آرش
            </Typography>
            <div className={ classes.search }>
              <Search />
              <InputBase placeholder="جستجو ..." />
            </div>
          </Toolbar>
        </AppBar>
    );
}

export default Navbar;