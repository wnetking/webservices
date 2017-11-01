import config from '../config.js'
let P = Promise

const features = {
  getAll(array) {
    let returnData = []

    return new P((resolve, reject) => {
      array.forEach(item => {
        features.getFeaturesName(item.id).then(data => {
          features.getFeaturesValue(item.id_feature_value).then(d => {
            returnData.push({
              name: data,
              value: d
            })

            if (returnData.length === array.length) {
              resolve(returnData)
            }
          }).catch(err => reject(err))
        }).catch(err => reject(err))
      })
    })
  },

  getFeaturesName(id) {
    return fetch(`${config.apiUrl}/product_features/?display=[name]
    &filter[id]=${id}
    &ws_key=${config.apiKey}&${config.dataType}`.replace(/\s+/g, ''))
      .then(res => res.json()).then(d => d.product_features[0].name)
  },

  getFeaturesValue(id) {
    return fetch(`${config.apiUrl}/product_feature_values/?display=[value]
    &filter[id]=${id}
    &ws_key=${config.apiKey}&${config.dataType}`.replace(/\s+/g, ''))
      .then(res => res.json()).then(d => d.product_feature_values[0].value)


    // return getValue.one(id).then(data => data.product_feature_value[0].value)
  }
}

export default features
