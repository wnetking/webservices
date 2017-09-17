import config from "../config.json"
import GET from '../GET'
let get = new GET('products');
let getCategory = new GET('categories');
let P = Promise;

export const products = {
  all() {
    return get.collections();
  },
  one(id) {
    return get.one(id);
  },
  selected(array) {
    return get.selected(array);
  },
  getProductCategoryName(id) {
    return getCategory.one(id);
  }
}