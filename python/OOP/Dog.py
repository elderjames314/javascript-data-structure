from telnetlib import DO


class Dog:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age
        print(name)

    def get_name(self):
        return self.name
    def get_age(self):
        return self.age
    def set_age(self, age):
        self.age = age
    def set_name(self, name):
        self.name = name

    def bark(self):
        print("bark")

    def add_one(self, x):
        return x + 1


d = Dog("Tim")
d2 = Dog("Bill")
print(type(d))
d.bark()
print(d.add_one(6))
print(d.name)
print(d2.name)
print(d2.get_age())