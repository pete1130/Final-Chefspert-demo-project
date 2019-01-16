import axios from 'axios';
import {
   GET_PRODUCTS_BY_SELL
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';
   

export function getProductsBySell(){
   const request = axios.get(`${PRODUCT_SERVER}/catalog?sortBy=sold&order=desc&limit=4`) 
                     .then(response => response.data);

   return {
      type: GET_PRODUCTS_BY_SELL,
      payload: request
   }
}

