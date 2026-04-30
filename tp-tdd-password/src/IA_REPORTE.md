Nombre y apellido: Mercedes Garcia Prada
- Fecha: 29/4/2026
- Curso/Grupo: PT

Herramienta IA: Chat GPT
Uso principal: test, refactor, implementacion


prompt: como hago para validar que una palabra tenga minimo una letra mayuscula sin utilizar ifs
respuesta: 

function validarPassword(contraseña){
    const errores = [];
    const noTieneMayuscula = !/[A-Z]/.test(contraseña);
    noTieneMayuscula && errores.push("ERROR: debe contener al menos una letra en mayuscula");
    return {
        esValida: errores.length === 0,
        errores
    };
}

module.exports = validarPassword;

promt: como se puede hacer una condicion sin ifs que verifique que se utilice un simbolo/caracter especial
const noTieneSimbolo = !/[^a-zA-Z0-9]/.test(contraseña);

promt: puse el username como parte de la contraseña y el test no me tiro error
chat me explico que no estaba considerando mayusculas y minusculas por lo tanto pase todo a minusculas.


5) Impacto en su proceso TDD -
¿La IA lo ayudó a iterar mejor o peor? - 
Si me ayudo a iterar mejor.

¿En qué parte interfirió con la granularidad del proceso?
No interfirió de gran manera sino que fue explicando el paso a paso y me pude guiar e ir utilizando el código que me sugirió. 
 
¿Qué decisión tomó que fue distinta a la recomendada por IA?
Siempre tomo la decisión o la idea original mía pero le consulto a la IA para ver si esta bien y me aconseja. La mayoria las tome yo. 

6) Conclusión personal (breve) -
¿Qué aprendizaje se lleva sobre uso responsable de IA en 
desarrollo guiado por tests?

Es una gran herramienta que hay que aprovechar al máximo pero nunca perder o no entender lo que esta haciendo para ayudarme.