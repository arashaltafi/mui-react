import { makeStyles } from '@mui/styles';
import { hover } from '@testing-library/user-event/dist/hover';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text
    },
    footer: {

    },
    button: {
        color: "white !important",
        backgroundColor: theme.palette.primary.main + " !important",
        border: "5px dashed" + theme.palette.primary.text + "!important",
        borderRadius: "50% !important",
        padding: "15px 50px !important",
        "&:hover": {
            backgroundColor: "#ffff55 !important"
        }
    }
}));