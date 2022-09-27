def func():
    print("run")
    def func2():
        print('two')
    return func2(), 56

print(func())
