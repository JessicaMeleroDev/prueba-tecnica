import clientAxios from "../../utils/axios";
import { checkCron } from "../../utils/cleanCache";
import Types from '../types/types';

export const startGetProducts = () => {
    return async (dispatch) => {

        checkCron();

        const localProducts = localStorage.getItem('products');

        if(!localProducts){
            dispatch(loadData(true));
            try {
                const response = await clientAxios.get("product");
    
                const { status, data } = response;
    
                if (status === 200) {
                    dispatch(getProducts(data))
                }
                dispatch(loadData(false));
    
            } catch (error) {
                dispatch(loadData(false));
            }
        }else {
            dispatch(getProducts(JSON.parse(localProducts)))
        }
    }
}

export const startGetDetailProduct = (id) => {
    return async (dispatch) => {

        dispatch(loadDataGetDetails(true));
        try {
            const response = await clientAxios.get(`product/${id}`);

            const { status, data } = response;

            if (status === 200) {
                dispatch(getDetailProduct(data))
            }


            dispatch(loadDataGetDetails(false));

        } catch (error) {
            dispatch(loadDataGetDetails(false));
        }
    }
}

/* 
    product: {
        id: 0001,
        colorCode: 1,
        storageCode: 2
    }
*/
export const startInsertProductBasket = (product) => {
    return async (dispatch) => {

        try {
            const response = await clientAxios.post('cart',product);

            const {count}  = response.data;

            if(count){
                dispatch(insertProductBasket(count));
            }

            setTimeout(() => {
                dispatch(refreshProductBasket(false));
            }, 2500);

        } catch (error) {
            
        }
    }
}

export const insertProductBasket = (mount) => {
    return {
        type: Types.setProductBasket,
        payload: mount
    }
}

export const refreshProductBasket = (isSucces) => {
    return {
        type: Types.refreshProductBasket,
        payload: isSucces
    }
}
export const getProducts = (products = []) => {
    return {
        type: Types.setProducts,
        payload: products
    }
}

export const getDetailProduct = (detailsProduct = []) => {
    return {
        type: Types.setDetailProduct,
        payload: detailsProduct
    }
}

export const loadData = (isLoandingData) => {
    return {
        type: Types.setLoadData,
        payload: isLoandingData
    }
}

export const loadDataGetDetails = (isLoandingData) => {
    return {
        type: Types.setLoadDataGetDetails,
        payload: isLoandingData
    }
}

export const filterProducts = (filter) => {
    return {
        type: Types.filterProducts,
        payload: filter,
    };
}
