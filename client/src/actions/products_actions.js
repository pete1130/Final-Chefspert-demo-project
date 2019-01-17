import axios from 'axios';
import {
   GET_PRODUCTS_BY_SELL,
   GET_MEALS,
   GET_PRODUCTS_TO_SHOP,
   ADD_PRODUCT,
   CLEAR_PRODUCT
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';
   

export function getProductsBySell(){
   const request = axios.get(`${PRODUCT_SERVER}/catalogs?sortBy=sold&order=desc&limit=3`) 
                     .then(response => response.data);

   return {
      type: GET_PRODUCTS_BY_SELL,
      payload: request
   }
}

//DIFFERENT MEAL TYPES
export function getMeals(){

   const request = axios.get(`${PRODUCT_SERVER}/meals`)
               .then(response => response.data );

   return {
       type: GET_MEALS,
       payload: request
   }

}

//PRODUCT
export function getProductsToShop(skip, limit,filters =[], previousState = []){
   const data = {
       limit,
       skip,
       filters
   }

   const request = axios.post(`${PRODUCT_SERVER}/shop`,data)
               .then(response => {
                   let newState = [
                       ...previousState,
                       ...response.data.catalogs
                   ];
                   return {
                       size: response.data.size,
                       catalogs: newState
                   }
               });

   return {
       type: GET_PRODUCTS_TO_SHOP,
       payload: request
   }

}

export function addProduct(datatoSubmit){

   const request = axios.post(`${PRODUCT_SERVER}/catalog`,datatoSubmit)
                   .then(response => response.data);

   return {
       type: ADD_PRODUCT,
       payload: request
   }
}

export function clearProduct(){
   return {
       type: CLEAR_PRODUCT,
       payload: ''
   }
}