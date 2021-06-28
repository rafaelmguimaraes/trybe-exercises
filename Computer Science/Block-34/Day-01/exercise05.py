"""
Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma
função que retorne dois valores em uma tupla contendo a quantidade de latas
de tinta a serem compradas e o preço total a partir do tamanho de uma
parede(em m²)
"""

METERS_PER_CAN = 54
CAN_PRICE = 80.00


def inkCost(wallSize):
    amountOfCans = wallSize // METERS_PER_CAN + 1
    return (amountOfCans, amountOfCans * CAN_PRICE)


# test
print(inkCost(10))
print(inkCost(55))
print(inkCost(324))
