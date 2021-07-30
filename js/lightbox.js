const hamburguer1 = document.querySelector(".hamburger");
const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
listaImg = ["../uno.jpg", "../dos.jpg", "../tres.jpg", "../cuatro.jpg", "../cinco.jpg", "../seis.jpg"];

console.log([listaImg[2]])

function imgActual() {
    var actual = imagenesLight;
    for(i = 0; i < imagenesLight; i++){
        if(imagenesLight.src === imagenes[i].src);
        // break;
    }
    if(i === imagenes.length) i=0;
    return i
}
document.getElementById("flechaIzq").addEventListener("click", ()=> {
    let actual = imgActual();
    if (actual > 0) actual--;
    aparecerImagen(imagenes[actual].src);
})

document.getElementById("flechaDer").addEventListener("click", ()=> {
    let actual = imgActual();
    if (actual < imagenes.length-1) actual++;
    aparecerImagen(imagenes[actual].src);
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
}

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=> {
       aparecerImagen(imagen.getAttribute("src"));
    })
    
})

contenedorLight.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight) {
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage");
    }     
})




