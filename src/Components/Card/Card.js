import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import wordLimit from '../../Helpers/helpers';
import {removeToBasket} from '../../Redux/Actions/actions';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin:20 ,
    },
    media: {
        height: 140,
    },
});


const Cards = props => {

    const classes = useStyles();

    return (
        <>
            <Header />
            <div className="card-wrapper">
            {props.cart.length > 0 ?
                props.cart.map(product =>
                    <>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={wordLimit(product.title , 60)}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {wordLimit(product.description , 120)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => props.removeToBasket(product)} >
                                    Remove {wordLimit(product.title , 10)}
                                </Button>
                            </CardActions>
                        </Card>
                    </>
                )
                : <h1>Basket is Empty</h1>
            }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps , {removeToBasket})(Cards)
