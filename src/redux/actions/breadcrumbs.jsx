import Types from '../types/types';

export const getBreadcrumbs = (currentUrl) => {
    return {
        type: Types.getBreadcrumbs,
        payload:currentUrl
    };
}