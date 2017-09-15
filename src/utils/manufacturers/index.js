import GET from '../GET'
let get = new GET('manufacturers');

export const manufacturer = {
  getInfo(id){
    return get.one(id);
  }
}