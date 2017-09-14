import config from "../config.json"

export const features = {
  getAll(array){
    let returnData = [];

    return new Promise((resolve, reject) => {
      array.forEach(item => {
        this.getFeaturesName(item.id).then(data => {
          this.getFeaturesValue(item.id_feature_value).then(d=> {
            returnData.push({
              name : data,
              value: d
            })

            if (returnData.length === array.length) {
              resolve(returnData);
            }
          }).catch(err => reject(err))
        }).catch(err => reject(err))
      })
    })
  },

  getFeaturesName(id){
    return fetch(`${config.apiUrl}/product_features/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(response => {
        return response.json();
      }).then(data => data.product_feature.name);
  },
  getFeaturesValue(id){
    return fetch(`${config.apiUrl}/product_feature_values/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(response => {
        return response.json();
      }).then(data => data.product_feature_value.value);
  },
}