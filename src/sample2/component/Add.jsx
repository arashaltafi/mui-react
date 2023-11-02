import { useStyles } from "../style";
import { Tooltip, Fab, Modal, Box, TextField, MenuItem, Select, RadioGroup, Radio, InputLabel, FormLabel, FormControl, FormControlLabel, Button } from '@mui/material';
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
                <Container className="w-screen sm:w-1/3 h-screen sm:h-2/3 bg-white absolute inset-0 m-auto">
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
                                <Button variant="outlined" color="primary">ارسال</Button>
                                <Button variant="outlined" color="secondary" onClick={handleClose}>انصراف</Button>
                            </div>
                        </Box>
                    </div>
                </Container >
            </Modal >
        </>
    );
}

export default Add;