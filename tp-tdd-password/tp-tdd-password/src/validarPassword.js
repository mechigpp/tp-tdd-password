

function validarPassword(contraseña, usernameOpcional){
    const errores = [];

    const noTieneLongitudMinima = contraseña.length < 8;
    const noTieneMayuscula = !/[A-Z]/.test(contraseña);
    const noTieneMinuscula = !/[a-z]/.test(contraseña);
    const noTieneNumero = !/[0-9]/.test(contraseña);
    const noTieneSimbolo = !/[^a-zA-Z0-9]/.test(contraseña);
    const tieneEspacios = /\s/.test(contraseña);
    const contieneUsername = usernameOpcional && contraseña.toLowerCase().includes(usernameOpcional.toLowerCase());
    let tieneTresIgualesConsecutivos = false;
    for(let i = 0; i < contraseña.length - 2; i++){
        if(
            contraseña[i] === contraseña[i+1] &&
            contraseña[i] === contraseña[i+2]
        ){
            tieneTresIgualesConsecutivos = true;
        }
    }

    noTieneLongitudMinima && errores.push("ERROR: la contraseña debe tener al menos 8 caracteres");
    noTieneMayuscula && errores.push("ERROR: debe contener al menos una letra en mayuscula");
    noTieneMinuscula && errores.push("ERROR: debe contener al menos una letra en minuscula");
    noTieneNumero && errores.push("ERROR: debe contener al menos un numero");
    noTieneSimbolo && errores.push("ERROR: debe contener al menos un simbolo especial");
    tieneEspacios && errores.push("ERROR: no debe contener espacios en blanco");
    contieneUsername && errores.push("ERROR: la contraseña no debe contener el username");
    tieneTresIgualesConsecutivos && errores.push("ERROR: no debe contener 3 caracteres iguales consecutivos");
   

    return {
        esValida: errores.length === 0,
        errores
    };
}

module.exports = validarPassword;



