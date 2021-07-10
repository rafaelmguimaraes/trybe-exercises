class Rectangle:
    def __init__(self, base, height) -> None:
        self.base = base
        self.height = height

    def calculate_area(self):
        return self.base * self.height

    def calculate_perimeter(self):
        return 2 * (self.base + self.height)

    def __str__(self):
        return f"Retângulo de base: {self.base} e altura: {self.height} "


if __name__ == "__main__":
    rectangle_teste = Rectangle(10, 20)
    print(rectangle_teste)
    print("Área do retângulo:", rectangle_teste.calculate_area())
    print("O perímetro do retângulo:", rectangle_teste.calculate_perimeter())
