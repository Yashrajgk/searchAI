import { call, put, takeEvery } from "redux-saga/effects";
import { setFilteredProduct } from "../Slices/FilteredProduct";
import axios from "axios";
function* fetchFilteredProduct(action) {
  try {
    const apiUrl = `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/api/productByCategoryAndSubCategory?category=${action.payload.parentCategoryVar}&subcategory=${action.payload.cat}`;
    // const apiUrl="http://localhost:4000/api/Products"

    const response = yield call(axios.get, apiUrl);
    // const data = yield response.json();
    yield put(setFilteredProduct(response.data));
    // yield put(setFilteredProduct((response.data).slice(-8)));
  } catch (error) {
    console.error("Error fetching filtered product:", error);
  }
}
export function* watchFilterProducts() {
  yield takeEvery("FETCH_FILTER_PRODUCTS", fetchFilteredProduct);
}
