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