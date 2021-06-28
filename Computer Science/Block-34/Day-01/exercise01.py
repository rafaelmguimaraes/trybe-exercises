# Crie uma função que receba dois números e retorne o maior deles.


def higherNumber(numberA, numberB):
    if numberA >= numberB:
        return numberA
    return numberB


# Tests
print(
    "Nubmer A = 10 e Number B  = 20 => return function: ", higherNumber(10, 20)
)

print(
    "Nubmer A = 20 e Number B  = 10 => return function: ", higherNumber(20, 10)
)
