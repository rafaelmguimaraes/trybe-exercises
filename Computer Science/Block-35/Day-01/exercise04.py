class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price


class Client:
    def __init__(self, name):
        self.name = name


class Order:
    def __init__(self, client, ordered_items):
        self.client = client
        self.ordered_items = ordered_items

    def print_bill(self):
        total = 0
        print(f"BILL of {self.client.name}".center(25, "-"))
        print("Item".ljust(15, "."), end="")
        print("Price".rjust(10, "."))
        for item in self.ordered_items:
            print(item.name.ljust(15, "."), end="")
            print("${:,.2f}".format(item.price).rjust(10, "."))
            total = total + item.price
        print("TOTAL:".rjust(15), end="")
        print("${:,.2f}".format(total).rjust(10))
        return total


if __name__ == "__main__":
    rafael = Client("Rafael")
    cafe = Item("Café", 5.50)
    agua_com_gas = Item("Água com Gás", 2.20)
    brigadeiro = Item("Brigadeiro", 3.30)
    pedido_rafael = Order(rafael, [cafe, agua_com_gas, brigadeiro])
    pedido_rafael.print_bill()
