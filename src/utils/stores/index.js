import GET from '../GET'
let get = new GET('stores');

const stores = {
  all() {
    return get.collections()
  }
}

export default stores;