import React from 'react'
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {connect} from 'react-redux';

const Header = props => {
    return (
        <div className="header">
            <Link to="/"><h2>Be-Pin</h2></Link> 
            <Link to="/Card"><a><ShoppingBasketIcon/>Card {props.cart.length}</a></Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header)
