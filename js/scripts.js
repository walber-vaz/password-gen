// Seleção de elementos
const generatePasswordButton = document.querySelector('#generate-password')
const generatePasswordElement = document.querySelector('#generated-password')

// Funções

// Função que gera letras minusculas
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Função que gera letras maiúsculas
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Função de gera números 1 a 10
const getNumber = () => {
  return Math.floor(Math.random() * 11).toString()
}

// Função que gera símbolos
const getSymbol = () => {
  const symbols = '[]{}()!@#$%&*-=+?/|'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Eventos
generatePasswordButton.addEventListener('click', () => {
  console.log('teste')
})
