import { Container } from "@material-ui/core";
import { useStyles } from "../style";

function Feed() {
    const classes = useStyles();

    return (
        <Container className="pt-2">
            <div className="">
                این بخش پست ها می باشد

            </div>
        </Container>
    );
}

export default Feed;