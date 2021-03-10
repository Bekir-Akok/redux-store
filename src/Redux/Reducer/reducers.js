const initialState = {
    products: [] , 
    message:'' ,
    cart: [] , 
    isLoading: false
} 

export const reducer = (state=initialState , action) => {

    switch(action.type) {

        case 'GET_PRODUCT_STARTED':
            return {...state , isLoading: true , message:''}

        case 'GET_PRODUCTS_SUCCESS':
            return {...state, products: action.payload , isLoading:false}
        
        case 'GET_PRODUCTS_ERROR': 
            return {...state , message: action.payload ,isLoading:false}

        case 'ADD_TO_BASKET':
            return {...state , cart: [...state.cart, action.payload]}

        case 'REMOVE_FROM_BASKET':
            return {...state , cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}

        default: return state
    }
    
}