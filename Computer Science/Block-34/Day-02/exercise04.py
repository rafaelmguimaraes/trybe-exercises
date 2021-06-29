"""
Dado o seguinte arquivo no formato JSON , leia seu conteúdo e calcule a
porcentagem de livros em cada categoria, em relação ao número total de livros.
O resultado deve ser escrito em um arquivo no formato CSV como o exemplo
abaixo.

categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878

"""
import json
import csv


JSON_FILE_NAME = "books.json"
CSV_FILE_NAME = "report.csv"


def get_books(file):
    return [json.loads(line) for line in file]


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, headers, rows):
    writer = csv.writer(file)
    writer.writerow(headers)
    writer.writerows(rows)


if __name__ == "__main__":
    # get books
    with open(JSON_FILE_NAME) as file:
        books = get_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate porcentage
    number_of_books = len(books)
    books_percentage_rows = calculate_porcentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    headers = ["categoria", "porcentagem"]
    with open(CSV_FILE_NAME, "w") as file:
        write_csv_report(file, headers, books_percentage_rows)
