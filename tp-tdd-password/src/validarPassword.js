function validarPassword(contraseña){
    const errores = [];

    contraseña.length < 8 && errores.push("ERROR: la contraseña debe tener al menos 8 caracteres");

    return {
        esValida: errores.length === 0,
        errores: errores
    };
}

module.exports = validarPassword;

