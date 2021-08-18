const btnTema = document.querySelector('#tema')
const temas = ['normal','escuro','pink',]
btnTema.onclick = mudarTema
let currentTema =0;

function mudarTema(){
    const current = temas[currentTema]
    currentTema++
    if(currentTema >= temas.length) currentTema = 0 
    document.querySelector('#body').classList.remove(current);
    document.querySelector('#body').classList.add(temas[currentTema]);
}

