import { useStyles } from "../style";
import { Tooltip, Fab, Snackbar, Alert, Modal, Box, TextField, MenuItem, Select, RadioGroup, Radio, InputLabel, FormLabel, FormControl, FormControlLabel, Button } from '@mui/material';
import { Add as AddIcon, Cancel } from '@mui/icons-material';
import { useState } from "react";
import { Container } from "@material-ui/core";

function Add() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [openErrorAlert, setOpenErrorAlert] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenErrorAlert = () => setOpenErrorAlert(true);
    const handleCloseErrorAlert = () => setOpenErrorAlert(false);

    const handleOpenSuccessAlert = () => setOpenSuccessAlert(true);
    const handleCloseSuccessAlert = () => setOpenSuccessAlert(false);

    const handleSend = () => {
        handleClose();
        setTimeout(() => {
            handleOpenSuccessAlert();
        }, 500);
    }
    const handleCancel = () => {
        handleClose();
        setTimeout(() => {
            handleOpenErrorAlert();
        }, 500);
    }

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
                <Container className="w-screen sm:w-1/3 h-screen sm:h-min bg-white absolute inset-0 m-auto">
                    <div className="flex flex-col items-center justify-center mt-6">
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            className="w-full p-3"
                        >
                            <div className="mb-6">
                                <TextField id="standard-basic" placeholder="عنوان" variant="standard" className="w-full" />
                            </div>
                            <div className="mb-6">
                                <TextField id="outline-multiline-static" label="پیام شما" defaultValue="داستان خودت را بگو ..." variant="outlined" multiline rows={5} className="w-full" />
                            </div>
                            <div className="mb-6">
                                <FormControl fullWidth variant="standard">
                                    <InputLabel id="demo-simple-select-label" className="w-screen">انتخاب</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value="123"
                                        label="نوع دسترسی"
                                    >
                                        <MenuItem key="public" value="عمومی">
                                            عمومی
                                        </MenuItem>
                                        <MenuItem key="private" value="خصوصی">
                                            خصوصی
                                        </MenuItem>
                                        <MenuItem key="friends" value="نمایش برای دوستان">
                                            نمایش برای دوستان
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-6">
                                <FormLabel id="demo-radio-buttons-group-label">دسترسی کامنت گذاری</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="everybody" control={<Radio size="small" />} label="برای همه" />
                                    <FormControlLabel value="friend" control={<Radio size="small" />} label="برای دوستان" />
                                    <FormControlLabel value="nobody" control={<Radio size="small" />} label="هیچکس" />
                                    <FormControlLabel disabled value="premium" control={<Radio size="small" />} label="سفارشی" />
                                </RadioGroup>
                            </div>
                            <div className="flex flex-row gap-x-2 mb-6">
                                <Button variant="outlined" color="primary" onClick={handleSend}>ارسال</Button>
                                <Button variant="outlined" color="secondary" onClick={handleCancel}>انصراف</Button>
                            </div>
                        </Box>
                    </div>
                </Container >
            </Modal >
            <Snackbar open={openSuccessAlert} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleCloseSuccessAlert}>
                <Alert onClose={console.log("Alert closed")} severity="success" sx={{ width: '100%' }}>
                    پست با موفقیت ارسال شد!
                </Alert>
            </Snackbar>

            <Snackbar open={openErrorAlert} autoHideDuration={5000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={handleCloseErrorAlert}>
                <Alert onClose={console.log("Alert Error closed")} severity="error" sx={{ width: '100%' }}>
                    شما از ارسال پست انصراف دادید!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Add;