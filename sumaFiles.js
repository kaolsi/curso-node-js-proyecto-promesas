// SÍNCRONO:
/*
const fs = require('fs')
const numero1 = fs.readFileSync('./numero1', 'utf-8')
const numero2 = fs.readFileSync('./numero2', 'utf-8')
console.log(`El resultado de la suma es  ${parseInt(numero1)+parseInt(numero2)}`)
*/

// ASÍNCRONO (CALLBACK FUNCTIONS):

/* const fs = require('fs')

fs.readFile('./numero1', 'utf-8', (err, numero1) => {
  if (err) throw err
  fs.readFile('./numero2', 'utf-8', (err, numero2) => {
    if (err) throw err
    console.log(`El resultado de la suma es ${parseInt(numero1) + parseInt(numero2)}`)
  })
}) */
// node sumaFiles

// ASÍNCRONO CON ESTILO SÍNCRONO (PROMESAS):
const fs = require('fs-extra')

const customReadFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile('fileName', (err, data) => {
      if (err) reject(err)
      return resolve(data)
    })
  })
}
