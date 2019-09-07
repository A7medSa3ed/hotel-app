export const getUnique = (items, value) => {
  // new Set --> it take an array or string or function then convert it to object with unique values.
  // EX--> const ahmed = new Set("aahmmed"),  console.log(ahmed) // OUT IS --> {"a","h","m","e","d"}
  return [...new Set(items.map(item => item[value]))];

  // previous line equal to -->

  // let uniqValue = new Set(items.map(item => item[value])); //return new object of returned items
  // uniqValue = [...uniqValue]; // convert object to array
  // return uniqValue;
};
