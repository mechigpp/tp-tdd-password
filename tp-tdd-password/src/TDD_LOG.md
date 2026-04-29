1:
Ciclo: 1
Test agregado: si la contraseña tiene menos de 8 caracteres, falla
Evidencia de fallo (Rojo):  
 FAIL  ./validarPassword.test.js
  ✕ si la contraseña tiene menos de 8 caracteres, falla (2 ms)

  ● si la contraseña tiene menos de 8 caracteres, falla

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

Cambio mínimo (Verde): defini la funcion que devuelva bien un objeto con el if

Refactor: saque el uso de if, implemente de mejor manera la funcion y agregue otro test mostrando el caso contrario

Commit/hash: 
596ef6113f144a83f7bc29a8f86bcaa2483acf03
189d7ad8579d386852e02bdcfc24b48473db803c
d8f508656154b28ebc30e34ee0c18803919fe234


------------------------------------------------------------------------------------------------------


2: 
Ciclo: 2
Test agregado: si la contraseña no tiene minimo 1 letra en mayuscula, falla
Evidencia de fallo (Rojo): 
● si la contraseña no tiene minimo 1 letra en mayuscula, falla

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

Cambio mínimo (Verde): hago la comprobacion minima utilizando if 
Refactor: chat gpt me dio una funcion para verificar de una manera mas eficiente que contenga una mayuscula
Commit/hash:3f31eae801537b910f013f27a86549812674caa1


------------------------------------------------------------------------------------------------------


3: 
Ciclo: 3
Test agregado: 
si la contraseña tiene como minimo 1 letra mayuscula, pasa
si la contraseña no tiene minimo 1 letra en minuscula, falla
si la contraseña  tiene minimo 1 letra en minuscula, pasa

Evidencia de fallo (Rojo): 
 ● si la contraseña no tiene minimo 1 letra en minuscula, falla

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: true
Cambio mínimo (Verde): verifique la comprobacion con un if
Refactor: saque el uso del if, implemente la misma logica que con las mayusculas pero con las minusculas
Commit/hash:
------------------------------------------------------------------------------------------------------


4: 
Ciclo: 4
Test agregado: 
si la contraseña no tiene minimo 1 numero, falla
si la contraseña tiene minimo 1 numero, pasa
Evidencia de fallo (Rojo): 
  ● si la contraseña  tiene minimo 1 numero, pasa

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false
Cambio mínimo (Verde): agregue la validacion con un if
Refactor: cambie la validacion por el mismo metodo que veniamos usando para las otras validaciones
Commit/hash: 9d0ead996d654c902485749b8ea46e3a6e570ce7
------------------------------------------------------------------------------------------------------


5: 
Ciclo: 5
Test agregado: 
si la contraseña no tiene minimo 1 simbolo especial, falla
 si la contraseña  tiene minimo 1 simbolo especial, pasa
Evidencia de fallo (Rojo): 
 ● si la contraseña no tiene minimo 1 simbolo especial, falla

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

Cambio mínimo (Verde): agregue la validacion con un if
Refactor: cambie la validacion a la misma validacion que veniamos trabajando
Commit/hash:
------------------------------------------------------------------------------------------------------


2: 
Ciclo: 2
Test agregado: 
Evidencia de fallo (Rojo): 
Cambio mínimo (Verde):
Refactor:
Commit/hash:
------------------------------------------------------------------------------------------------------


2: 
Ciclo: 2
Test agregado: 
Evidencia de fallo (Rojo): 
Cambio mínimo (Verde):
Refactor:
Commit/hash:
------------------------------------------------------------------------------------------------------


2: 
Ciclo: 2
Test agregado: 
Evidencia de fallo (Rojo): 
Cambio mínimo (Verde):
Refactor:
Commit/hash:
------------------------------------------------------------------------------------------------------


2: 
Ciclo: 2
Test agregado: 
Evidencia de fallo (Rojo): 
Cambio mínimo (Verde):
Refactor:
Commit/hash:
------------------------------------------------------------------------------------------------------


2: 
Ciclo: 2
Test agregado: 
Evidencia de fallo (Rojo): 
Cambio mínimo (Verde):
Refactor:
Commit/hash: