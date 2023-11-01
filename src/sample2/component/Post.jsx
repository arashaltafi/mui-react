import { Container } from "@material-ui/core";
import { useStyles } from "../style";

function Post() {
    const classes = useStyles();

    return (
        <Container className="pt-2">
            <div className="">
                این پست می باشد

            </div>
        </Container>
    );
}

export default Post;