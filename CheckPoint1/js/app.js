/* const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
}; */

const overlay = document.querySelector('.overlay');
const btnAdd = document.getElementById('addCard');
const formsAdd = document.getElementById('forms');
const cards = document.getElementById('cards');
const BtnaddCardSubimit = document.getElementById('addCardSubimit');


function criarCards() {
  const div = document.createElement('div');
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('desc').value;
  const urlImg = document.getElementById('img').value;
  div.innerHTML = `
    <img src="${urlImg}" alt="">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
  `
  cards.appendChild(div)
}




BtnaddCardSubimit.addEventListener('click',()=>{
  criarCards()
})







btnAdd.addEventListener('click', () => {
  overlay.classList.add('show');
  formsAdd.classList.add('show');
})


overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
  formsAdd.classList.remove('show');
})