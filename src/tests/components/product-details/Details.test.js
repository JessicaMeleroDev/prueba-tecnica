import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import Details  from '../../../components/product-details/Details';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    products: [],
    detailsProduct: null,
    mount:0,
    setProductBasketSuccess:false,
    loadData: false,
    loadDataGetDetails:true
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store }>
        <MemoryRouter>
            <Details /> 
        </MemoryRouter>
    </Provider>

)

describe('Pruebas en <Details />', () => {

    beforeEach(()=> {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrarse el mensaje de que no se han encontrado productos', () => {
        expect(wrapper.find('p').text()).toBe('La búsqueda no ha encontrado datos');
    })
        
})