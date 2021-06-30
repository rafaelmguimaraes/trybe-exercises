"""
EXERCISE 01
Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu
conteúdo de forma legível.

Inicializando o ambiente virtual:
deactivate # caso exista outro ambiente ativado
which python3  # verifica qual python
python -m venv .venv  # cria o ambiente virtual na pasta .venv
source .venv/bin/activate # ativa o ambiente virtual

para importar o pacote request:
python -m pip install requests
"""

import requests


response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)
