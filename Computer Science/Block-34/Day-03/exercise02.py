"""
Exercício 2
Faça uma requisição ao recurso usuários da API do Github
( https://api.github.com/users ), exibindo o username e
url de todos os usuários retornados.
"""
import requests

BASE_URL = "https://api.github.com/"

response = requests.get(BASE_URL + "users")
users = response.json()
for user in users:
    print(f"{user['login']} {user['url']}")
