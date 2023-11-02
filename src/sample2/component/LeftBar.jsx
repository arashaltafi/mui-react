import { Container } from "@material-ui/core";
import { useStyles } from "../../sample1/style";
import { Avatar, AvatarGroup, Typography, ImageList, ImageListItem } from '@mui/material';

function LeftBar() {
    const classes = useStyles();

    return (
        <Container className="pt-20 !h-screen !w-full !border-r !border-gray-100">
            <Typography gutterBottom className="text-base font-medium text-[#555]">دوستان آنلاین</Typography>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="https://arashaltafi.ir/Social_Media/story-00.jpg" />
                <Avatar alt="Travis Howard" src="https://arashaltafi.ir/Social_Media/story-01.jpg" />
                <Avatar alt="Cindy Baker" src="https://arashaltafi.ir/Social_Media/story-02.jpg" />
                <Avatar alt="Agnes Walker" src="https://arashaltafi.ir/Social_Media/story-03.jpg" />
                <Avatar alt="Trevor Henderson" src="https://arashaltafi.ir/Social_Media/story-04.jpg" />
            </AvatarGroup>

            <Typography gutterBottom className="text-base font-medium text-[#555] !mt-5">گالری</Typography>
            <ImageList
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                <ImageListItem cols={1} rows={1}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-00.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0"
                    />
                </ImageListItem>
                <ImageListItem cols={3} rows={1}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-01.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0"
                    />
                </ImageListItem>
                <ImageListItem cols={2} rows={2}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-02.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0"
                    />
                </ImageListItem>
                <ImageListItem cols={2} rows={3}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-03.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0"
                    />
                </ImageListItem>
                <ImageListItem cols={2} rows={2}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-04.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0"
                    />
                </ImageListItem>
            </ImageList>

        </Container>
    );
}

export default LeftBar;