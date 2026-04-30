Instrucciones de instalacion: Abrir una consola/terminal en esa carpeta y correr el siguiente comando:
npm install --save-dev jest, Esto debería haber creado los archivos package.json y package-lock.json, junto con la carpeta node_modules
Abrir el archivo package.json y agregar el objeto scripts para que quede de la siguiente
forma:
{
"devDependencies": {
"jest": "^29.7.0"
},
"scripts": {
"test": "jest"
}
}

Comando para ejecutar test: npm test 

Comando para cobertura: jest

Decisiones de diseño: respetar el TDD e intentar resolver las condiciones de contraseña con la misma "tecnica" cambiando la condicion en si solamente (salvo para la ultima condicion que no pude aplicar esa tecnica).

Supuestos adoptados (que considera simbolo especial): ninguno

