import { Typography, Card, CardMedia, CardActions, CardContent } from "@material-ui/core";
import { useStyles } from "../style";
import { CardActionArea, Button } from '@mui/material';

function Post() {
    const classes = useStyles();

    return (
        <Card className="my-6 shadow-lg">
            <CardActionArea>
                <CardMedia
                    className="h-[150px] sm:h-[250px]"
                    component="img"
                    image="https://arashaltafi.ir/arash.jpg"
                    title="Arash 1"
                    alt="arash altafi"
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    پست اول
                </Typography>
                <Typography variant="body" color="text.secondary">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </Typography>
            </CardContent>
            <CardActions>
                <Button className="!mx-1 !bg-rose-500" variant="contained" size="small">
                    بیشتر بخوانید
                </Button>
                <Button className="!mx-1" variant="outlined" size="small" color="warning">
                    اشتراک گذاری
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;