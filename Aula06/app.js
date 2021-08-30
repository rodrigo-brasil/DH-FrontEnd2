import lista2 from './felinos.js'
import {imprimir} from './felinos.js'
const listadeFelinos = lista2
const secao = document.querySelector('#secao');
const popup = document.querySelector('#pop-up');
imprimir()
listadeFelinos.forEach(el => {
    const article = document.createElement('article');
    article.innerHTML =
    `
    <h2>${el.title}</h2>
    <img data-click src="${el.imgUrl}"></img>
    <p>${el.description}</p>
    `
    secao.appendChild(article);
})

const images = document.querySelectorAll('[data-click]');

images.forEach(el => el.addEventListener("click", (e) => {
    popup.classList.add('open');
    const img = document.createElement('img');
    img.src = e.target.src;
    popup.appendChild(img);
}))

popup.addEventListener("click", () => {
    popup.removeChild(popup.firstChild);
    popup.classList.remove('open');
})