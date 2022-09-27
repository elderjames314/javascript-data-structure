from ast import arg


def func(x):
    def func2():
        print(x)
    return func2


print(func(3)())

def myFunc(*args, **kwargs):
    pass
x =[1, 2, 3, 4, 4, 5]
print(*x)

def name(x, y):
    print(x, y)

my_list = [(3, 4), (5, 6)]
for i in my_list:
    name(*i)

def the_func(*args, **kwargs):
    print(arg, kwargs)
