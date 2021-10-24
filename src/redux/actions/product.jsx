import clientAxios from "../../utils/axios";
import Types from '../types/types';

export const startGetProducts = () => {
    return async (dispatch) => {
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

        console.log("startGetProducts");
    }
}

export const startGetDetailProduct = (id) => {
    return async (dispatch) => {
        // dispatch(loadData(true));
        try {
            const response = await clientAxios.get(`product/${id}`);

            const { status, data } = response;
            console.log(data);
            if (status === 200) {
                dispatch(getDetailProduct(data))
            }
            // dispatch(loadData(false));

        } catch (error) {
            dispatch(loadData(false));
        }

        console.log("startGetDetailsProducts");
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

export const filterProducts = (filter) => {
    return {
        type: Types.filterProducts,
        payload: filter,
      };
}