
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "../style";
import { Home, Person, List, PhotoCamera, PlayCircleOutline, Bookmark, TabletMac, Storefront, Settings, ExitToApp } from "@mui/icons-material";

function RightBar() {
    const classes = useStyles();

    return (
        <Container className="sticky top-0 pt-20 bg-blue-500 !h-screen !w-full text-white sm:bg-transparent sm:text-[#555] sm:border-l sm:border-[#f8f8f8 ]">
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <Home className="" />
                <Typography className="hidden sm:block !text-sm">
                    خانه
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <Person className="" />
                <Typography className="hidden sm:block !text-sm">
                    دوستان
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <List className="" />
                <Typography className="hidden sm:block !text-sm">
                    لیست ها
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <PhotoCamera className="" />
                <Typography className="hidden sm:block !text-sm">
                    دوربین
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <PlayCircleOutline className="" />
                <Typography className="hidden sm:block !text-sm">
                    ویدیو
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <TabletMac className="" />
                <Typography className="hidden sm:block !text-sm">
                    اپ
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <Bookmark className="" />
                <Typography className="hidden sm:block !text-sm">
                    مجموعه ها
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <Storefront className="" />
                <Typography className="hidden sm:block !text-sm">
                    بازار
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <Settings className="" />
                <Typography className="hidden sm:block !text-sm">
                    تنظیمات
                </Typography>
            </div>
            <div className="flex flex-row gap-x-2 items-center mb-8 sm:mb-6 sm:text-sm cursor-pointer">
                <ExitToApp className="" />
                <Typography className="hidden sm:block !text-sm">
                    خروج
                </Typography>
            </div>
        </Container>
    );
}

export default RightBar;