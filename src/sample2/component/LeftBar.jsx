import { Container } from "@material-ui/core";
import { useStyles } from "../../sample1/style";
import { Avatar, AvatarGroup, Typography, ImageList, ImageListItem, Link, Divider } from '@mui/material';

function LeftBar() {
    const classes = useStyles();

    return (
        <Container className="sticky top-0 py-20 !h-screen !w-full !border-r !border-gray-100 overflow-y-auto">
            <Typography gutterBottom className="text-base !font-bold text-[#555]">دوستان آنلاین</Typography>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="https://arashaltafi.ir/Social_Media/story-00.jpg" />
                <Avatar alt="Travis Howard" src="https://arashaltafi.ir/Social_Media/story-01.jpg" />
                <Avatar alt="Cindy Baker" src="https://arashaltafi.ir/Social_Media/story-02.jpg" />
                <Avatar alt="Agnes Walker" src="https://arashaltafi.ir/Social_Media/story-03.jpg" />
                <Avatar alt="Trevor Henderson" src="https://arashaltafi.ir/Social_Media/story-04.jpg" />
            </AvatarGroup>

            <Typography gutterBottom className="text-base !font-bold text-[#555] !mt-8">گالری</Typography>
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
                        className="left-auto right-0 translate-x-0 rounded-lg"
                    />
                </ImageListItem>
                <ImageListItem cols={3} rows={1}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-01.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0 rounded-lg"
                    />
                </ImageListItem>
                <ImageListItem cols={2} rows={2}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-02.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0 rounded-lg"
                    />
                </ImageListItem>
                <ImageListItem cols={2} rows={3}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-03.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0 rounded-lg"
                    />
                </ImageListItem>
                <ImageListItem cols={2} rows={2}>
                    <img
                        src="https://arashaltafi.ir/Social_Media/story-04.jpg"
                        alt="alt"
                        loading="lazy"
                        className="left-auto right-0 translate-x-0 rounded-lg"
                    />
                </ImageListItem>
            </ImageList>

            <Typography gutterBottom className="text-base !font-bold text-[#555] !mt-8">دسته بندی ها</Typography>
            <div className="flex flex-col items-center justify-center">
                <Link href="#" underline="none" className="!text-lg text-[#555] w-full text-center border-b border-gray-300 !pb-2 !mb-2">
                    ورزشی
                </Link>
                <Link href="#" underline="hover" className="!text-lg text-[#555] w-full text-center border-b border-gray-300 !pb-2 !mb-2">
                    سیاسی
                </Link>
                <Link href="#" underline="always" className="!text-lg text-[#555] w-full text-center border-b border-gray-300 !pb-2 !mb-2">
                    علمی
                </Link>
                <Link href="#" underline="always" className="!text-lg text-[#555] w-full text-center">
                    هنری
                </Link>
            </div>

        </Container>
    );
}

export default LeftBar;