import { Search, Mail, Notifications, Cancel } from "@mui/icons-material";
import { useStyles } from "../style";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { InputBase } from "@material-ui/core";
import { Avatar, Badge } from "@mui/material";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <AppBar position="static" className="!w-screen" color="primary">
      <Toolbar className="flex flex-row justify-between items-center">
        <Typography variant="h6" component="h2" className={classes.logoLg}>
          وبلاگ آرش
        </Typography>
        <Typography variant="h6" component="h2" className={classes.logoSm}>
          آرش
        </Typography>
        <div className={open ? "hidden" : "flex items-center w-[60%] rounded-[4px] bg-white/[0.15] hover:bg-white/25 sm:hidden sm:w-1/2"}>
          <Search />
          <InputBase placeholder="جستجو ..." className="w-full text-white mr-4" />
          <Cancel className="block sm:hidden" onClick={() => setOpen(true)} />
        </div>
        <div className={open ? "flex flex-row justify-center items-center gap-x-2" : "hidden"}>
          <Search className="ml-3 !block sm:!hidden" onClick={() => setOpen(false)} />
          <Badge badgeContent={4} color="error" className="px-2">
            <Mail />
          </Badge>
          <Badge badgeContent={3} color="secondary">
            <Notifications />
          </Badge>
          <Avatar alt="test alt" src="https://arashaltafi.ir/arash.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;