const helper = {
  isNull(a) {
    return a === null ? true : false
  },
  isEqualObj(a, b) {
    let s1 = JSON.stringify(a),
      s2 = JSON.stringify(b)

    return s1 === s2
  },
  filterCombination(data, id) {
    let returnData = [];

    if (!data.fetching) {
      data.data.forEach(item => {
        if (item.id === parseInt(id, 10)) {
          returnData = item.associations.product_option_values.slice();
        }
      })
    }

    return returnData;
  },
  filterProductValue(data, id) {
    let returnData = [];

    if (!data.fetching) {
      data.data.forEach(item => {
        if (item.id === parseInt(id, 10)) {
          returnData = item.name[0].value;
        }
      })
    }

    return returnData;
  }
}

export default helper
