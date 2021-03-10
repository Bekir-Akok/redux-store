import React from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {getProducts } from '../../Redux/Actions/actions';
import ProductCard from '../ProductCard/ProductCard';


const Home = props => {

    useEffect(() => {
    
        props.getProducts()
        
      }, [])

    return (
        <>
        <Header/>
        <div className="App">
        {props.isLoading ? <img src="https://sezeromer.com/wp-content/uploads/2019/09/Infinity-1s-200px.gif"/>
          :props.products.map(product => (
            <>
              <ProductCard
               id={product.id}
               image={product.image}
               title={product.title}
               description={product.description}
               price={product.price}
                />
            </>
          ))
        }
      </div>
      </>
    )
}
const mapStateToProps = state => {
    return {
      products: state.products ,
      isLoading: state.isLoading
    }
  }
  
  export default connect(mapStateToProps , {getProducts})(Home);