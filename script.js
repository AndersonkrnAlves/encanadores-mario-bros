const formulario = document.querySelector(".formulario-fale-conosco")
const mascaraFormulario = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascaraFormulario.style.visibility = "visible"
 

}

function cliqueiNaMascara(){
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascaraFormulario.style.visibility = "hidden"
}