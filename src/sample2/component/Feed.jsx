import { Container } from "@material-ui/core";
import { useStyles } from "../style";
import Post from "./Post";

function Feed() {
    const classes = useStyles();

    return (
        <Container className="pt-2">
            <Post />
        </Container>
    );
}

export default Feed;