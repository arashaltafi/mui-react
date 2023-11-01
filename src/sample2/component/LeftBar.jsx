import { Container, Typography } from "@material-ui/core";
import { useStyles } from "../style";
import { Home } from "@mui/icons-material";

function LeftBar() {
    const classes = useStyles();

    return (
        <Container className="pt-2 bg-blue-500 !h-screen !w-full text-white">
            <div className="flex flex-row items-center mb-8 sm:mb-6 cursor-pointer">
                <Home className="" />
                <Typography className="hidden sm:block">
                    خانه
                </Typography>
            </div>
            <div className="flex flex-row items-center mb-8 sm:mb-6 cursor-pointer">
                <Home className="" />
                <Typography className="hidden sm:block">
                    خانه
                </Typography>
            </div>
            <div className="flex flex-row items-center mb-8 sm:mb-6 cursor-pointer">
                <Home className="" />
                <Typography className="hidden sm:block">
                    خانه
                </Typography>
            </div>
        </Container>
    );
}

export default LeftBar;