self.addEventListener('install', e=>{
    caches.open('cache-v1')
    .then(cache =>{
         //Dentro de cache add all le ingresaremos un vector
        cache.addAll([
            './',
            'main.js',
            'index.html',
            'css/style.css',
            'images/Apple.png',
            'images/Apple1.jpg',
            'images/Apple2.jpg',
            'images/Apple3.jpg',
            'images/facebook.png',
            'images/instagram.png',
            'images/twitter.png',
            'videos/iphone13.mp4',
            'videos/iphone14.mp4',
            'videos/iphone14Pro.mp4',
        ])
    });
    e.waitUntil(caches);
});

self.addEventListener('fetch', e =>{
    //cache with network fallback
    const respuesta = caches.match( e.request )
        .then ( res => {
            if ( res ) return res;
            //no existe el archivo
            //tengo que ir a la web
            console.log('No existe', e.request.url);
            return fetch( e.request ).then ( newResp => {
                caches.open('cache-v1')
                    .then( cache => {
                        cache.put( e.request, newResp);
                    }
                    )
                return newResp.clone;
            });
        });
        e.respondWith(respuesta);
    //only cache
    //e.respondWith( caches.match(e.request));
});