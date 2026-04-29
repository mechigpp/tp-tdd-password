const validarPassword=require ("../src/validarPassword");

test("si la contraseña tiene menos de 8 caracteres, falla", () => {
    const resultado = validarPassword("mechi");

    expect(resultado.esValida).toBe(false);
    expect(resultado.errores).toContain("ERROR: la contraseña debe tener al menos 8 caracteres");
});

test("si la contraseña tiene 8 caracteres o mas, pasa", () => {
    const resultado = validarPassword("mercedessssss ");

    expect(resultado.esValida).toBe(true);
    expect(resultado.errores).toEqual([]);
});
