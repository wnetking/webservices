const helper = {
  isNull(a) {
    return a === null ? true : false
  },
  isEqualObj(a, b) {
    let s1 = JSON.stringify(a),
      s2 = JSON.stringify(b)

    return s1 === s2
  }
}

export default helper
