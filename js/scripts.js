const numeros = ['0','1','2','3','4','5','6','7','8','9'];
const operadores =['+','-','x','/'] 
var operando1 = '';
var operando2 = '';
var operador = '';
var resultado = 0;
var memoria = false;

//Obtener el valor de los objetos con la clase 'Key' al hacer click
document.querySelectorAll('.key').forEach( item => {
    item.addEventListener('click', e => {
        const val = e.target.getAttribute('value');
        calculadora(val);
    });
});

function calculadora(val){

    if(numeros.includes(val)){
        if(memoria== true){
            resetButton();
        }
        if(operador == ''){
            operando1 += val;
            var output = operando1.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('screen-value').innerHTML = output;
        }
        if(operador != ''){
            operando2 += val;
            var output = operando2.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('screen-value').innerHTML = output;
        }
    }

    if(val == '.'){
        if(memoria == true){
            operando1 = resultado;
            operando2 = '';
            operador = '';
            memoria = false;
        }
        if(operador == '' && !operando1.includes('.')){
            operando1 += val;
            document.getElementById('screen-value').innerHTML = operando1;
        }
        if(operador != '' && !operando2.includes('.')){
            operando2 += val;
            document.getElementById('screen-value').innerHTML = operando2;
        }
    }

    if(operadores.includes(val)){
        operador = val;
        if(memoria == true){
            operando1 = resultado;
            operando2 = '';
            memoria = false;
        }
    }

    if(val == 'DEL' && operador == '' && memoria == false){
        if(operando1.length > 1){
            operando1 = operando1.slice(0,-1);
            document.getElementById('screen-value').innerHTML = operando1;
            
        } else{
            operando1 = '';
            document.getElementById('screen-value').innerHTML = '0';
        }
    }

    if(val == 'DEL' && operador != '' && memoria == false){
        if(operando2.length > 1){
            operando2 = operando2.slice(0,-1);
            document.getElementById('screen-value').innerHTML = operando2;
            
        } else{
            operando2 = '';
            document.getElementById('screen-value').innerHTML = '0';
        }
    }
    
    if(val == '='){
        if(operando1 !=''){
            operando1 = parseFloat(operando1, 10);
        }else{
            operando1 = 0;
        }

        if(operando2 !=''){
            operando2 = parseFloat(operando2, 10);
        }else{
            operando2 = 0;
        }

        if(operador == ''){
            operador = '+';
        }
        
        if(operador == '+'){
            resultado = operando1 + operando2;
        }
        if(operador == '-'){
            resultado = operando1 - operando2;
        }
        if(operador == 'x'){
            resultado = operando1 * operando2;
        }
        if(operador == '/'){
            resultado = operando1 / operando2;
        }
        if(resultado % 1 != 0){
            resultado = resultado.toFixed(2);
        }

        memoria = true;
        operando1 = resultado.toString();
        resultado = resultado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('screen-value').innerHTML = resultado;
    }
}

function resetButton(){
    document.getElementById('screen-value').innerHTML = '0';
    resultado = 0;
    resetData();
}

function resetData(){
    operando1 = '';
    operando2 = '';
    operador = '';
    memoria = false;
}


/* THEMES */

function setTheme(themeName) {
    /* localStorage.setItem('theme', themeName); Guardar tema seleccionado en memoria*/
    document.documentElement.className = themeName;
}

function toggleTheme(option){
    console.log(option);
    if(option == '1'){
        console.log('Tema de colores 1');
        setTheme('theme-one');
    }
    if(option == '2'){
        console.log('Tema de colores 2');
        setTheme('theme-two');
    }
    if(option == '3'){
        console.log('Tema de colores 3');
        setTheme('theme-three');
    }
}

/* // Aplicar último tema guardado en memoria
(function () {
    if (localStorage.getItem('theme') === 'theme-one') {
        setTheme('theme-one');
    }
    if (localStorage.getItem('theme') === 'theme-two') {
        setTheme('theme-two');
    }
    if (localStorage.getItem('theme') === 'theme-three') {
        setTheme('theme-three');
    }
})(); */




window.onload = function() {
    // Cargar tema 1
    toggleTheme('1');
    //Mover toggle a posicion 1
    document.getElementById('toggle-1').checked = true;
};


