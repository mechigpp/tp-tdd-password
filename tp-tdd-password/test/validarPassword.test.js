const validarPassword=require ("../src/validarPassword");

test("si la contraseña tiene menos de 8 caracteres, falla", () => {
    const resultado = validarPassword("mechi1-");

    expect(resultado.esValida).toBe(false);
    expect(resultado.errores).toContain("ERROR: la contraseña debe tener al menos 8 caracteres");
});

test("si la contraseña tiene 8 caracteres o mas, pasa", () => {
    const resultado = validarPassword("Mercedessssss1-");

    expect(resultado.esValida).toBe(true );
    expect(resultado.errores).toEqual([]);
});

test("si la contraseña no tiene minimo 1 letra en mayuscula, falla", () => {
    const resultado = validarPassword("mechiiiiiii1-");

    expect(resultado.esValida).toBe(false);
    expect(resultado.errores).toContain("ERROR: debe contener al menos una letra en mayuscula");
});

test("si la contraseña tiene como minimo 1 letra mayuscula, pasa", () => {
    const resultado = validarPassword("Mechiiiiiii1-");
    expect(resultado.esValida).toBe(true);
     expect(resultado.errores).toEqual([]);
});

test("si la contraseña no tiene minimo 1 letra en minuscula, falla", () => {
    const resultado = validarPassword("MECHIIIIIII1-");

    expect(resultado.esValida).toBe(false);
    expect(resultado.errores).toContain("ERROR: debe contener al menos una letra en minuscula");
});

test("si la contraseña  tiene minimo 1 letra en minuscula, pasa", () => {
    const resultado = validarPassword("Mechiiiiii1-");

    expect(resultado.esValida).toBe(true);
    expect(resultado.errores).toEqual([]);
});

test("si la contraseña no tiene minimo 1 numero, falla", () => {
    const resultado = validarPassword("Mechiiiiiii-");

    expect(resultado.esValida).toBe(false);
    expect(resultado.errores).toContain("ERROR: debe contener al menos un numero");
});

test("si la contraseña  tiene minimo 1 numero, pasa", () => {
    const resultado = validarPassword("Mechiiiiiii1-");

    expect(resultado.esValida).toBe(true);
    expect(resultado.errores).toEqual([]);
});

test("si la contraseña no tiene minimo 1 simbolo especial, falla", () => {
    const resultado = validarPassword("Mechi1234");

    expect(resultado.esValida).toBe(false);
    expect(resultado.errores).toContain("ERROR: debe contener al menos un simbolo especial");
});

test("si la contraseña no tiene minimo 1 simbolo especial, falla", () => {
    const resultado = validarPassword("Mechi1234-");

    expect(resultado.esValida).toBe(true);
    expect(resultado.errores).toEqual([]);
});