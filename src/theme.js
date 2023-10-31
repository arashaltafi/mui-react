import { createTheme } from '@mui/material/styles';
import { green, orange, red, blue, purple, grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            text: grey[500]
        }
    }
})