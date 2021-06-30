"""
Exercício 6
Escreva um programa que se conecte ao banco de dados library e liste os livros
da coleção books para uma determinada categoria recebida por uma pessoa
usuária. Somente o título dos livros deve ser exibido.

DEPENDÊNCIAS:
python -m pip install pymongo

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")

"""

from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient("mongodb://admin:admin@127.0.0.1") as client:
    db = client.library
    books = db.books.find({"categories": category}, projection=["title"])
    qty_books = books.collection.count_documents({"categories": category})
    print(f"Foram encontrados {qty_books} livros com essa categoria")
    for book in books:
        print(book.get("title"))
