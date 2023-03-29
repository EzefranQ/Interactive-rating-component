//Variables
const ratingBox = document.querySelectorAll('.rating-box')
const result = document.querySelector('#result');
const ocultarBtn = document.querySelector('#ocultarBtn');



//Cargar Funciones
loadListeners();
function loadListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}


//Funciones
function iniciarApp() {
    ratingBox.forEach((rate) => {
        rate.addEventListener('click', () =>{
            result.textContent = rate.textContent;
        })
    })

}

function ocultar() {

    const ratingC = document.querySelector('#rating-main');
    ratingC.style.display = 'none';
    const ratingResult = document.querySelector('#rating-result');
    ratingResult.style.display = 'flex';

}





