import Types from '../types/types';

const initialState = {
    breadcrumbs: [{
        name: 'Home/',
        url: '/'
    },
    {
        name: 'Product Detail',
        url: '/product-details/:id'
    }],
    currentUrl: [{
        name: 'Home/',
        url: '/'
    }],
}

export const breadcrumbsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.getBreadcrumbs:
            return {
                ...state,
                currentUrl: action.payload === state.breadcrumbs[0].url ? [state.breadcrumbs[0]] : state.breadcrumbs
            }
        default:
            return state;
    }
}