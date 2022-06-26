function toCamelCase(str){
  if (!str.length) return '';
  const delimiter = str.includes('-') ? '-' : '_';
  const strArr = str.split(delimiter);
  const transformedArr = strArr.map((word, index) => {
    if (index > 0) {
      return `${word.substr(0,1).toUpperCase()}${word.substr(1)}`;
    } else {
      return word;
    }
  });
  
  return transformedArr.join('');
}
