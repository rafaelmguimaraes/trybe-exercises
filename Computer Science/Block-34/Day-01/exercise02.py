# Calcule a média aritmética dos valores contidos em uma lista.


def averageOfList(list):
    sumOfNumbers = 0
    for number in list:
        sumOfNumbers = sumOfNumbers + number

    return sumOfNumbers / len(list)


print("The average of List is", averageOfList([19, 21, 46, 11, 18]))
