import { useStyles } from "../style";
import { Tooltip, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function Add() {
    const classes = useStyles();

    return (
        <>
            <Tooltip title="افزودن پست" aria-label="add">
                <Fab className="!fixed !bottom-10 !right-10 !bg-pink-400 !text-white">
                    <AddIcon />
                </Fab>
            </Tooltip>
        </>
    );
}

export default Add;