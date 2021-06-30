"""
Crie uma função que receba os três lado de um triângulo e informe qual o tipo
de triângulo formado ou "não é triangulo" , caso não seja possível formar um
triângulo

Três lados formam um triângulo quando a soma de quaisquer dois lados
for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes.
"""


def isValidTriangle(a, b, c):
    if a + b >= c and b + c >= a and c + a >= b:
        return True
    return False


def typeOfTriangle(a, b, c):
    if isValidTriangle(a, b, c):
        if a != b and b != c and a != c:
            print("Triângulo Escaleno")
        elif a == b and b == c:
            print("Triângulo Equilátero")
        else:
            print("Triângulo Isósceles")
    else:
        print("não é triangulo")


# Test
typeOfTriangle(3, 4, 5)
typeOfTriangle(3, 3, 3)
typeOfTriangle(3, 5, 3)
typeOfTriangle(1, 10, 2)
