describe("Encriptar cadena", function() {
    it("devuelve el siguiente caracter", function() {
        var expectativas = {
            'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f',
            'f': 'g', 'g': 'h', 'h': 'i', 'i': 'j', 'j': 'k',
            'k': 'l', 'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p',
            'p': 'q', 'q': 'r', 'r': 's', 's': 't', 't': 'u',
            'u': 'v', 'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z',
            'z': 'a',
            'A': 'B', 'B': 'C', 'C': 'D', 'D': 'E', 'E': 'F',
            'F': 'G', 'G': 'H', 'H': 'I', 'I': 'J', 'J': 'K',
            'K': 'L', 'L': 'M', 'M': 'N', 'N': 'O', 'O': 'P',
            'P': 'Q', 'Q': 'R', 'R': 'S', 'S': 'T', 'T': 'U',
            'U': 'V', 'V': 'W', 'W': 'X', 'X': 'Y', 'Y': 'Z',
            'Z': 'A'
        };
        for (var propiedad in expectativas) {
            if (expectativas.hasOwnProperty(propiedad)) {
                var caracterAEncriptar = propiedad;
                var caracterEncriptadoEsperado = expectativas[propiedad];
                expect(encriptar(caracterAEncriptar)).toEqual(caracterEncriptadoEsperado);
            }
        }
    });

    it("when input string is 'television' it returns 'ufmfwjtjpn'", function(){
        expect(encriptar('television')).toEqual('ufmfwjtjpo');
    });

    it("can encrypt a word", function(){
        expect(encriptar('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).
        toEqual('bcdefghijklmnopqrstuvwxyzaBCDEFGHIJKLMNOPQRSTUVWXYZA');
    });

    it("throws an exception if there is any character that does not belong to the latin alphabet", function() {
        expect(function(){
            encriptar("This includes the blank character that does not belong to latin alphabet")
        }).toThrowError(ArgumentError, "non-latin alphabet character encountered");
    });

    it("La suma de 20 + 20 es un valor cercano a 40", function() {
        expect(sumar(20, 20)).toBeCloseTo(40, 2);
    });

    it("La suma de 200 + 100 no es un valor cercano a 40", function() {
        expect(sumar(100, 200)).not.toBeCloseTo(40, 2);
    });

    it("La cadena 'hola' es una instancia de String", function() {
        expect('hola').toBeInstanceOf(String);
    });
});

describe("Function addThis to add a value", function() {
    beforeEach(function(){
        globalInteger = 5;
    });
    
    it("returns 10", function() {
        addThis(5);
        expect(globalInteger).toEqual(10);
    });

    it("returns 20", function() {
        addThis(15);
        expect(globalInteger).toEqual(20);
    });
});