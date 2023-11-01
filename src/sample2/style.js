import { alpha } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    // search: {
    //     display: "flex",
    //     alignItems: "center",
    //     backgroundColor: alpha("#ffffff", 0.15),
    //     '&:hover': {
    //         backgroundColor: alpha("#ffffff", 0.25)
    //     },
    //     borderRadius: 4,
    //     width: "50%",
    //     [theme.breakpoints.down("sm")]: {
    //         display: "none"
    //     }
    // },
}));