const { opositores, notas } = require('./datos.js')

// crea promesa para obtener los datos del opositor 1
const getOpositor = (id) => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find((opositor) => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado ningú n opositor con id: ${id}`))
    }
  })
}
getOpositor(1)
  .then((opositor) => console.log(opositor.nombre))
  .catch((err) => console.log(err))

getOpositor(5)
  .then((opositor) => console.log(opositor.name))
  .catch((err) => console.log(err))

// crea promesa para obtener las notas del opositor 1
const getNotas = id => new Promise((resolve, reject) => {
  const notasdeopositor = notas.filter((nota) => nota.id === id)
  if (notasdeopositor.length) {
    resolve(notasdeopositor)
  } else {
    reject(new Error(`No se ha encontrado notas del opositor con id: ${id}`))
  }
})
getNotas(1)
  .then((notasdeopositor) => {
    notasdeopositor.forEach(notadeopositor => {
      console.log(notadeopositor.nota + ' - ' + notadeopositor.prueba)
    })
  })
  .catch((err) => console.log(err))

// crea promesa para obtener el nombre y las notas del opositor1
/* const getResultado = (id) => {
  let nombre
  getOpositor(1)
    .then((opositor) => {
      nombre = opositor.nombre
      return (getNotas(id))
    })
    .then((notas) => {
      const nota = notas
        .map((nota) => nota.nota)
        .reduce((sum, x) => (sum + x) / notas.length)
      // const mapNotas = notas.map((nota) => nota.nota)
      // const sumaNotas = mapNotas.reduce((sum, x) => (sum + x) / notas.length)
      console.log('Notas: ' + nota)
      console.log('Nombre: ' + nombre)
    })
  const promesa1 = getNotas(1)
  const promesa2 = getNotas(1)
  Promise.all([promesa1], [promesa2])
    .then(ArrayValues => {
      console.log(` tiene una media de `` en `)
    })
    .catch(err => console.log(err))
} */

const getResultado = (id) => {
  // const notasOpositor = getNotas(1)
  Promise.all([getOpositor(id), getNotas(id)])
    .then(datos => {
      const { nombre } = datos[0]
      const nota = datos[1]
        .map(nota => nota.nota)
        .reduce((sum, x) => (sum + x) / datos[1].length)
      console.log(nombre)
      console.log(nota)
    })
    .catch(err => console.log(err))
    /* .then(datos => {
      const nombre = datos[0].nombre // const {nombre} = datos[0]
      const nota = datos[1].map((notas) => nota.nota).reduce((sum, x) => (sum + x) / datos[1].length)
      console.log(nombre)
      console.log(nota)
    })
    .catch(err => console.log(err)) */
}

getResultado(1)
/* .then(() => console.log('Ha ido bien'))
  .catch(err => console.log(err)) */
