import { makeStyles } from '@mui/styles';

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

    }
}));