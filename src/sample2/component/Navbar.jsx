import { Search, Mail } from "@mui/icons-material";
import { useStyles } from "../style";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { InputBase } from "@material-ui/core";
import { Badge } from "@mui/material";

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary">
          <Toolbar className="flex flex-row justify-between items-center">
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
              <InputBase placeholder="جستجو ..." className={ classes.input } />
            </div>
            <div classes = { classes.icon }>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </div>
          </Toolbar>
        </AppBar>
    );
}

export default Navbar;