import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {wordLimit} from "../../Helpers/helpers";
import { addtoBasket } from '../../Redux/Actions/actions'
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20, 
  },
  media: {
    height: 140,
  },
});

const MediaCard = props => {

  const classes = useStyles();

  return (
    <Card className={classes.root} key={props.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {wordLimit(props.title , 40)} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {wordLimit(props.description , 100)}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            {props.price + " $"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.addtoBasket(props.id , props.description , props.image , props.title, props.price)  } >
          Add To Basket
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

  export default connect(mapStateToProps , {addtoBasket})(MediaCard);