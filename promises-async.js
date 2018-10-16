const { opositores, notas } = require('./datos.js')

//                      ASYNC-AWAIT
const getOpositor = async id => {
  const opositor = await opositores.find(opositor => opositor.id === id)
  if (opositor) {
    return (opositor)
  } else {
    throw new Error('Opositor no encontrado')
  }
}
getOpositor[1]
  .then(opositor => console.log(opositor.nombre))
  .catch(err => console.log(err))

const getNotas = async id => {
  const notao = await notas.filter(notao => notao.id === id)
  if (notao) {
    return (notao)
  } else {
    throw new Error('Opositor no encontrado')
  }
}
getNotas[1]
  .then(notao => notao.forEach(nota => {
    console.log(nota.nota + ' - ' + nota.prueba)
  }))
  .catch(err => console.log(err))

// 86721c2bf26b6eb2f30bd0c3baf9cee4
