const fs = require('fs')


const getData = (fileName, type) => {
  new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(parsetInt(data))
    })
  })

  const promise1 = getData('numero1',"utf-8")
  const promise2 = getData('numero2',"utf-8")

  Promise.all([promise1],[promise2])
    .then(ArrayValues =>{
      const sum = arrayValues.reduce((sum, x) => parseInt(sum)+parseInt(x))
      console.log(`Caso con PromiseAll finalizado`)
    })
    .catch(err => console.log(err))

/*getData('numero1', 'utf-8')
  .then(numero1 => {
    primernumero=numero1
    return getData('numero2')
  })
  .then(numero2 => {
    console.log(`El resultado de la suma es ${numero1 + numero2}`)
  })
  .catch(err => console.log(err))

console.log('hola')*/
