let Storage = window.localStorage
let prefix = 'ps_'

const localStorage = {
  add(key, value){
    Storage.setItem(prefix + key, value)
  },
  get(key){
    return Storage.getItem(prefix + key) !== null ? Storage.getItem(prefix + key) : false;
  },
  remove(key){
    Storage.removeItem(prefix + key);
  },
  clear(){
    Storage.clear();
  }
}

export default localStorage;