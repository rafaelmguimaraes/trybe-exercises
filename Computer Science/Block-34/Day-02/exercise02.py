"""
Jogo da palavra embaralhada. Desenvolva um jogo em que o usuário tenha que
 adivinhar uma palavra que será mostrada com as letras embaralhadas. O
 programa terá uma lista de palavras e escolherá uma aleatoriamente. O
 jogador terá três tentativas para adivinhar a palavra. Ao final a palavra
 deve ser mostrada na tela, informando se o usuário ganhou ou perdeu o jogo.
 """
import random

PET_NAMES = [
    "PUPPY",
    "DOG",
    "TURTLE",
    "RABBIT",
    "PARROT",
    "CAT",
    "KITTEN",
    "GOLDFISH",
    "MOUSE",
    "HAMSTER",
]

NUMBER_OF_ATTEMPTS = 3


def choose_and_scramble_word_by_words(words):
    chosen_word = random.choice(words)
    scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))
    return chosen_word, scrambled_word


def is_right(chosen_word, guess):
    return chosen_word.upper() == guess.upper()


if __name__ == "__main__":
    print("WELCOME A PET GUESSING GAME!")
    print(
        f"""You have {NUMBER_OF_ATTEMPTS} chances to guess the name of
        the shuffled pet"""
    )
    chosen_word, scrambled_word = choose_and_scramble_word_by_words(PET_NAMES)
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
