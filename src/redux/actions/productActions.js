import { ActionTypes } from "../contants/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selecteProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    };
};
export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};
export const filterProductsCategory = (product) => {
    return {
        type: ActionTypes.FILTER_PRODUCTS_BY_CATEGORY,
        payload:product,
    };
};
export const TabCasses = (product) => {
    return {
        type: ActionTypes.TAB_CASSES_COVID,
        payload:product,
    };
};