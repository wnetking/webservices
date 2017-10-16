import GET from '../GET'
let get      = new GET('product_features');
let getValue = new GET('product_feature_values');
let P        = Promise;

export const features = {
  getAll(array){
    let returnData = [];

    return new P((resolve, reject) => {
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
    return get.one(id).then(d => d.product_feature.name);
  },

  getFeaturesValue(id){
    return getValue.one(id).then(data => data.product_feature_value.value);
  },
}