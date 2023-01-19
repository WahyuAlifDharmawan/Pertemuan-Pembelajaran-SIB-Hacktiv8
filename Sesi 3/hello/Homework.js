// homework

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

// makeAllCaps menerima array dan mereturn promise baru membuat komponen array menjadi huruf kapital semua (menggunakan fungsi map)
const makeAllCaps = (data) => {
    return new Promise((resolve) => {
      const result = data.map(item => {
        if (typeof item === "string") {
          return item.toUpperCase()
        } else {
          return item
        }
      })
        resolve(result)
    })
}

// sortWords menerima array dan mereturn promise baru yang mensortir array tersebut
const sortWords = (data) => {
    return data.sort()
}

// result
makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))