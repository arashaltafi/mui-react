import { useStyles } from "../style";
import { Tooltip, Fab, Modal } from '@mui/material';
import { Add as AddIcon, Cancel } from '@mui/icons-material';
import { useState } from "react";
import { Container } from "@material-ui/core";

function Add() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Tooltip title="افزودن پست" aria-label="add" onClick={handleOpen}>
                <Fab className="!fixed !bottom-10 !right-10 !bg-pink-400 !text-white">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container className="w-screen sm:w-1/3 h-screen sm:h-1/3 bg-white absolute inset-0 m-auto">
                    <div className="flex flex-col items-center justify-center mt-6">
                        <p className="">
                            این یک مدل می باشد.
                        </p>
                        <Cancel className="mt-4 text-red-500" onClick={ handleClose } />
                    </div>
                </Container>
            </Modal>
        </>
    );
}

export default Add;