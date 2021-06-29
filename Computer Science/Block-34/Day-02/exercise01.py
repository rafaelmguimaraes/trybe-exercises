"""
EXERCISE 01
Faça um programa que receba um nome e imprima o mesmo na vertical em escada
invertida.
"""


def print_vertical_inverted(name):
    for index in range(len(name)):
        print(name[: len(name) - index])


# Test
if __name__ == "__main__":
    name = input("Please, enter a name: ")
    print_vertical_inverted(name)
