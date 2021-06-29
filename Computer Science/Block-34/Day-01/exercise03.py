# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na
# tela um quadrado feito de asteriscos de lado de tamanho n


def printSquareBySide(side):
    for i in range(side):
        print("*" * side)


# test
print("The five side square")
printSquareBySide(5)
