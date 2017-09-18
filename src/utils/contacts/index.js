import GET from '../GET'
let get = new GET('contacts');

const contacts = {
  all() {
    return get.collections()
  }
}

export default contacts;