import math


class Circle:
    def __init__(self, radius) -> None:
        self.radius = radius

    def calculate_area(self):
        return math.pi * self.radius

    def calculate_diameter(self):
        return 2 * self.radius

    def calculate_perimeter(self):
        return 2 * math.pi * self.radius

    def __str__(self):
        return f"Círculo de raio: {self.radius}"


if __name__ == "__main__":
    circle_teste = Circle(3)
    print(circle_teste)
    print("Área do círculço:", circle_teste.calculate_area())
    print("O perímetro do círculço:", circle_teste.calculate_perimeter())
    print("O diâmetro do círculço:", circle_teste.calculate_diameter())
