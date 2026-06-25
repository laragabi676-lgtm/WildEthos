document.addEventListener("DOMContentLoaded", function(){
    
    const imagenes =[
      "Img/caballos.gif",
      "Img/manta.gif",
      "Img/mixto.gif"
    
    
    ];
    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("ImagenPrincipal");
    const btnanterior = document.getElementById("btnanterior");
    const btnsiguiente = document.getElementById("btnsiguiente");

    function mostrarImagen(indice){
      imagenPrincipal.src = imagenes[indice];
    }

    btnsiguiente.addEventListener("click", function(){
     indiceActual++;
     if(indiceActual >= imagenes.length) indiceActual = 0;
     mostrarImagen(indiceActual);
    });

    btnanterior.addEventListener("click", function(){
     indiceActual--;
     if(indiceActual < 0) indiceActual = imagenes.length -1;
     mostrarImagen(indiceActual);
    });

    mostrarImagen(indiceActual);
});

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("¡Formulario enviado!");
      })
    });
  });