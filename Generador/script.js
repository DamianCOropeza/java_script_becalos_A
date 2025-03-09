const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () => {
    lenghtCounter.textContent = inputRange.value; 
}

const generatePassword = (passwordlenght) => {
    let result = '';
    let characters = '';

    //Obtener opciones seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    //Creamos un conjunto de caracteres a usar en la contraseña
    if(useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if(useNumbers) characters += '0123456789';
    if(useSymbols) characters += '!#%$@/&';

    // Si no selecciono ninguna opcion
    if(characters === ''){
        passwordHeading.textContent = 'Selecciona al menos una opción';
        return '';
    }

    // Generador de contraseña aleatoria
    for( let i =0; i < passwordlenght; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
    console.log(result)
};

//Fx que imprima la contraseña
const printPassword = (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value); //genera la contraseña
    if(password){
        passwordHeading.textContent = password; // muestra la  contraseña

    }
};

//configuracion de los eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', printPassword);