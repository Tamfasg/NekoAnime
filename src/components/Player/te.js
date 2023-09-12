const arrayOfArrays = [
  [{ lang: 'English', value: 'Hello' }, { lang: 'Spanish', value: 'Hola' }],
  [{ lang: 'English', value: 'Goodbye' }, { lang: 'Spanish', value: 'Adiós' }]
];
const val = []
const mappedValues = arrayOfArrays.map(array => {
  const mappedObject = {};
  array.forEach(obj => {
    mappedObject[obj.lang] = obj.value;
  });
  return mappedObject;
});
mappedValues.map(lang =>{
  console.log(lang.English)
  val.push(lang.English)
})
console.log(val)
