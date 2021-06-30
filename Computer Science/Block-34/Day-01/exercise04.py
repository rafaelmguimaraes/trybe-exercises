# Crie uma função que receba uma lista de nomes e retorne o nome com a maior
# quantidade de caracteres.


def biggestName(listOfNames):
    if len(listOfNames) > 0:
        sizeOfBiggestName = 0
        indexOfBiggestName = 0
        for name in listOfNames:
            if len(name) > sizeOfBiggestName:
                sizeOfBiggestName = len(name)
                indexOfBiggestName = listOfNames.index(name)

        return listOfNames[indexOfBiggestName]
    return ""


# Tests
print(biggestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
