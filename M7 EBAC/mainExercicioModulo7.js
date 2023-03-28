const form = document.getElementById('campos-numericos');
const numeroA= document.getElementById('numeroA');
const numeroB= document.getElementById('numeroB');

form.addEventListener('submit', (validacao)=>{
                if (numeroA.value <= numeroB.value){
                                validacao.preventDefault();
                               alert('O valor de A deve ser maior que o de B');
                            }});