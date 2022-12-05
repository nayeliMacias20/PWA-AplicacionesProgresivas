//Service Worker
//if('serviceWorker' in navigator){
    //console.log('Puedes usar los service worker en tu navegador');
    //navigator.serviceWorker.register('./sw.js')
    //                       .then(res=>console.log('serviceWorker cargado correctamente',res))
    //                       .catch(err => console.log('serviceWorker no se ha podido registrar', res))
//}else{
//    console.log('NO Puedes usar los service worker en tu navegador');
//
//}

//Configurar SW
let swLocation = "/sw.js";
if (navigator.serviceWorker) {
    if (window.location.href.includes("localhost")) swLocation = "/sw.js"; //Varia según el host
    navigator.serviceWorker.register(swLocation);
}
// Detectar si podemos usar Service Workers
//if ( navigator.serviceWorker ) {
//    navigator.serviceWorker.register('sw.js');
//}