let encabezado = document.getElementsByTagName('h1')[0];

console.log('Primer Texto:', encabezado.outerHTML);

encabezado.outerHTML = '<h1>Texto 2 cambiado con outerHTML</h1>';