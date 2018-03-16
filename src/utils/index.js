export default {
  l(data, lang) {
    if (!lang || lang.data === null) return data;

    if (!lang || lang.data.length === 1) {
      return data;
    }

    return data[lang.active].value;
  }
};
