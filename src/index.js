const objectToString = (obj) => {
  const arr = (a) => {
    let str = '';
    a.forEach((i) => {
      str += '"' + i + '",\n';
    });
    return str;
  };

  const ooo = (obj) => {
    let str = '';
    Object.keys(obj).forEach((i) => {
      switch (typeof obj[i]) {
        case 'string':
          str += i + ': "' + obj[i] + '",\n';
          break;
        case 'object':
          if (Array.isArray(obj[i])) {
            str += i + ': [\n' + arr(obj[i]) + '],\n';
          } else {
            str += i + ': {\n' + ooo(obj[i]) + '},\n';
          }
          break;
        default:
          str += i + ': ' + obj[i] + ',\n';

      }
    });
    return str;
  };

  return 'const result = {\n' + ooo(obj) + '\n}';
};

export default objectToString;