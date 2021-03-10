
export const getProducts = () => dispatch => {

    dispatch({type: 'GET_PRODUCT_STARTED' })
    
   fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => dispatch({type: 'GET_PRODUCTS_SUCCESS' , payload: json}))
    .catch(error => dispatch({type: 'GET_PRODUCTS_ERROR' , payload: error}))
}

export const addtoBasket = (id, description , image , title , price) => {
    return {type: 'ADD_TO_BASKET' , payload: {id , description, image , title  , price}}
}

export const removeToBasket = product => {
    return {type: 'REMOVE_FROM_BASKET' , payload: product }
}