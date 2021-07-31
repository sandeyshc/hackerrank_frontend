import Card from '@material-ui/core/Card';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    ri:{
        backgroundColor:"#145DA0",
        color:"#ffffff",
        fontSize: 30,
    },
    rm:{
        fontSize: 30,
    }
  });

//   export default function MediaCard() {
export default function Cards(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.ri}>
        <CardActionArea >
          <CardContent align="left" className={classes.rm}>
              <Typography variant="body2" color="#ffffff" component="p">username: {props.propss.username}</Typography>
              <Typography variant="body2" color="#ffffff" component="p">weights: {props.propss.weights}</Typography>
              <Typography variant="body2" color="#ffffff" component="p">Body fat: {props.propss.body_fat}</Typography>
              <Typography variant="body2" color="#ffffff" component="p">Activity Levels: {props.propss.activity_levels}</Typography>
              <Typography variant="body2" color="#ffffff" component="p">TDEE: {props.propss.TDEE}</Typography>
              <Typography variant="body2" color="#ffffff" component="p">BMR: {props.propss.BMR}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
//   const [state, setState] = useState({
//     weight: 0,
//     body_fat: 0,
//     activity_levels:1.2,
//     username:""
//   })
// const [mystate,setmystate]=useState({
//     TDEE: "",
//     BMR: ""
// })
//   <Typography gutterBottom variant="h5" component="h2">
//   Lizard
// </Typography>
// <Typography variant="body2" color="textSecondary" component="p">
//   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//   across all continents except Antarctica
// </Typography>

            {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}

                  {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}