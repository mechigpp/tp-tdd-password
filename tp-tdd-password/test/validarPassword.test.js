const validarPassword=require ("../src/validarPassword");

test("si la contraseña tiene menos de 8 caracteres, falla", () => {
    const resultado = validarPassword("mechi");

    expect(resultado.esValida).toBe(false);
    expect(resultado.errores).toContain("ERROR: la contraseña debe tener al menos 8 caracteres");
});

