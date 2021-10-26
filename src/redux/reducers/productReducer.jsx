import Types from '../types/types';

const initialState = {
    products: [],
    detailsProduct: null,
    mount:0,
    setProductBasketSuccess:false,
    loadData: false,
    loadDataGetDetails:false
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.setProducts:
            localStorage.setItem('products',JSON.stringify(action.payload));
            return {
                ...state,
                products: action.payload
            }

        case Types.setDetailProduct:
            return {
                ...state,
                detailsProduct: action.payload
            }
        case Types.setProductBasket:
            return {
                ...state,
                mount:action.payload,
                setProductBasketSuccess:true
            }
        case Types.refreshProductBasket:
            return {
                ...state,
                setProductBasketSuccess:false
            }
        case Types.setLoadDataGetDetails:
            return {
                ...state,
                loadDataGetDetails: action.payload
            }
        case Types.setLoadData:
            return {
                ...state,
                loadData: action.payload
            }
        case Types.filterProducts:
            return {
                ...state,
                products: state.products.filter(
                    (product) =>
                        product.brand
                            .toLowerCase()
                            .includes(action.payload.toLowerCase()) ||
                        product.model
                            .toLowerCase()
                            .includes(action.payload.toLowerCase())
                ),
            };

        default:
            return state;
    }
}