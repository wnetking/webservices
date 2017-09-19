import GET from '../GET'
let get = new GET('homeslider_slidess');

const imageslider = {
  all() {
    return get.collections()
  }
}

export default imageslider;