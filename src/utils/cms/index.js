import GET from '../GET'
let get = new GET('content_management_system');

const cms = {
  all() {
    return get.collections()
  }
}

export default cms;