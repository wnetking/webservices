import config from "../config.json"

export const combinations = {
  getAll(array){
    let returnData = [];

    return new Promise((resolve, reject) => {
      array.forEach(item => {
        this.getCombination(item.id).then(d => {
          returnData.push(d)

          if (returnData.length === array.length) {
            resolve(returnData);
          }
        }).catch(err => reject(err))
      })
    })
  },

  getCombination(id){
    return fetch(`${config.apiUrl}/combinations/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(response => {
        return response.json();
      }).then(data => data.combination);
  }
}