import { productReducer } from '../../../redux/reducers/productReducer';
import Types from '../../../redux/types/types';


describe('Pruebas en productReducer', () => {
    
    test('setProductBasket debe de cambiar el estado correctamente', () => {

        const initState = {};

        const action = {
            type: Types.setProductBasket,
            payload: {
                mount: '1',
            }
        };

        const state = productReducer( initState, action );

        expect( state ).toEqual({
            mount: { mount: '1' }, setProductBasketSuccess: true 
        })

        
    })


})