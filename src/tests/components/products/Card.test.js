import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import { Router } from "react-router-dom";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import "@testing-library/jest-dom";

import Card from "../../../components/products/Card.jsx";

const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  products: [],
  detailsProduct: null,
  mount: 0,
  setProductBasketSuccess: false,
  loadData: false,
  loadDataGetDetails: true,
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const mock = {
  id: "1",
  brand: "brand",
  model: "model",
  imgUrl: "imgUrl.jpg",
  price: "123",
};

const wrapper = mount(
  <Provider store={store}>
    <Router history={historyMock}>
      <Card
        id={mock.id}
        brand={mock.brand}
        model={mock.model}
        imgUrl={mock.imgUrl}
        price={mock.price}
      />
    </Router>
    ,
  </Provider>
);

describe("Pruebas en <Card />", () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("La imagen debe de tener la url correcta", () => {
    expect(wrapper.find("img").props().src).toBe(mock.imgUrl);
  });

  test("debe de llamar al history cuando hacemos click al button", () => {
    wrapper.find("button").simulate("click");
    expect(historyMock.push.mock.calls[0][0]).toEqual("/product-details/"+mock.id);
  });
});
