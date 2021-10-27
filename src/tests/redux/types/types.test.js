import Types from "../../../redux/types/types";

describe("Pruebas con nuestros tipos", () => {
  test("debe de tener estos tipos", () => {
    expect(Types).toEqual({
      setProducts: "[Products] getting products",
      setDetailProduct: "[Product] getting detail product",
      setProductBasket: "[Product] setProductBasket",
      filterProducts: "[Products] filter products",
      refreshProductBasket: "[Products] refreshProductBasket",
      getBreadcrumbs: "[Breadcrumbs] getBreadcrumbs",
      setLoadData: "[Loading] Loading products",
      setLoadDataGetDetails: "[Loading] setloadDataGetDetails",
    });
  });
});
