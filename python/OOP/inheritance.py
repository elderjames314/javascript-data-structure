from random import paretovariate


class Cat:
    number_of_people = 2
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age
        Cat.number_of_people += 1

    @staticmethod
    def get_one(self):
        pass
    @classmethod
    def my_number(cls):
        pass

    
# cat = Cat("bill", 34)
# print(Cat.number_of_people)

kk = {}

kk[0] = {
    "name":  "james",
    "oladimje": "ola"
}

for key, value in kk.items():
    print(value["name"])

