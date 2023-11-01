import { Container, Typography } from "@material-ui/core";
import { useStyles } from "../style";
import { Home } from "@mui/icons-material";

function LeftBar() {
    const classes = useStyles();

    return (
        <Container className="pt-16">
            <div className="">
                <Home className="" />
                <Typography className="">
                    خانه
                </Typography>
            </div>
        </Container>
    );
}

export default LeftBar;