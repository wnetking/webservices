import GET from '../GET'
let get = new GET('content_management_system');
let P   = Promise;

const cms = {
  all() {
    return get.collections()
  }
}

export default cms;