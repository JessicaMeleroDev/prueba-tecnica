import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import Types from '../../../redux/types/types';

import {startGetProducts} from '../../../redux/actions/product';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);


const initialValue = {
    products: [],
    detailsProduct: null,
    mount:0,
    setProductBasketSuccess:false,
    loadData: false,
    loadDataGetDetails:false
}

describe('Testing action', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    it('startGetProducts should call his action', async () => {

        await store.dispatch(startGetProducts(initialValue));

        const actions = store.getActions();

        expect( actions[1].type ).toEqual(Types.setProducts);

    });
})