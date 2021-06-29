"""
Modifique o exercício anterior para que as palavras sejam lidas de um arquivo.
Considere que o arquivo terá cada animal em uma linha.
 """
import random

NUMBER_OF_ATTEMPTS = 3
FILE_NAME = "pet-names.txt"


def choose_and_scramble_word_by_words(words):
    chosen_word = random.choice(words)
    scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))
    return chosen_word, scrambled_word


def is_right(chosen_word, guess):
    return chosen_word.upper() == guess.upper()


def retrieve_words(file):
    return [word.strip() for word in file]


if __name__ == "__main__":
    print("WELCOME A PET GUESSING GAME!")
    print(
        f"""You have {NUMBER_OF_ATTEMPTS} chances to guess the name of
        the shuffled pet"""
    )
    with open(FILE_NAME) as file:
        pet_names = retrieve_words(file)
    chosen_word, scrambled_word = choose_and_scramble_word_by_words(pet_names)
    won = False
    print(f"Scrambled pet name is {scrambled_word}")
    for attempt in range(NUMBER_OF_ATTEMPTS):
        guess = input("Guess the name of pet: ")
        if is_right(chosen_word, guess):
            print("Congratulations! You won!")
            won = True
            break
        else:
            print("Missed!")
    if not won:
        print("Game Over. Good luck next time.")
