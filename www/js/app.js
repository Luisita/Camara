// Función para iniciar la camara
function initCamara(){
// Iniciamos la camara
navigator.camera.getPicture(guardarFoto, error, { quality : 75,
destinationType : Camera.DestinationType.FILE_URI,
sourceType : Camera.PictureSourceType.CAMERA,
allowEdit : true,
encodingType: Camera.EncodingType.JPEG });
}
function guardarFoto(imageURI){
var imagen = document.getElementById('imagenTomada');
imagen.style.display = 'block';
imagen.src = imageURI;
}
function error(){
alert("Error en la camara");
}