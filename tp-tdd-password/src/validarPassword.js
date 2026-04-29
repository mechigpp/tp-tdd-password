function validarPassword(contraseña){
    if(contraseña.length < 8){
        return {
            esValida: false,
            errores: ["ERROR: la contraseña debe tener al menos 8 caracteres"]
        };
    }

    return {
        esValida: true,
        errores: []
    };
}

module.exports = validarPassword;