import { Container } from "@material-ui/core";
import { useStyles } from "../../sample1/style";

function LeftBar() {
    const classes = useStyles();

    return (
        <Container className="pt-20">
            <div className="">
                این ساید بار چپ می باشد.
            </div>
        </Container>
    );
}

export default LeftBar;