/*
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
*/
let checkbox = document.querySelector("input[name=theme_switch]");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
} else {
  document.documentElement.setAttribute("data-theme", "light");
  checkbox.checked = false;
}

// switch theme if checkbox is engaged
checkbox.addEventListener("change", (cb) => {
  document.documentElement.setAttribute(
    "data-theme",
    cb.target.checked ? "dark" : "light"
  );
});


