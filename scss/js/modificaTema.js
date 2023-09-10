const btnlight=document.querySelector(".btn-light");
const btndark=document.querySelector(".btn-dark");

btnlight.addEventListener("click",poner_modo_light);
btndark.addEventListener("click",poner_modo_dark);

function poner_modo_light(){
    guardarCambio("light");
}

function poner_modo_dark(){
    guardarCambio("dark");
}

function guardarCambio(tema){
    document.documentElement.setAttribute("tema-defecto",tema);
}



