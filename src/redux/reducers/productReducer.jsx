import Types from '../types/types';

const initialState = {
    products: [],
    detailsProduct: null,
    loadData: false
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.setProducts:
            return {
                ...state,
                products: action.payload
            }

        case Types.setDetailProduct:
            return {
                ...state,
                detailsProduct: action.payload
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