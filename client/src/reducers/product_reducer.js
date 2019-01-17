import {
    GET_PRODUCTS_BY_SELL,
    GET_MEALS,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    CLEAR_PRODUCT
} from '../actions/types';



export default function (state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SELL:
            return {...state, bySell: action.payload}
        case GET_MEALS:
            return {...state, meals: action.payload }
    
        case GET_PRODUCTS_TO_SHOP:
            return {
                ...state,
                toShop: action.payload.catalogs,
                toShopSize: action.payload.size
            }
        case ADD_PRODUCT:
            return {...state,addProduct: action.payload}
        case CLEAR_PRODUCT:
            return {...state,addProduct: action.payload}
        default:
            return state;
    }
}