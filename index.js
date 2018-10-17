const axios = require('axios')

const exchangeRate = (from, to) => {
  // consulta a la API de Fixer
  axios.get('https://data.fixer.io/api/latest?access_key=86721c2bf26b6eb2f30bd0c3baf9cee4&base=EUR&Symbols=USD')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

exchangeRate()
