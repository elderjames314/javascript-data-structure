# list and tuple 
x = [4, 3, True, False, "james"]
y = 'hi'
print(len(x), len(y))
x.append("hello")
print(x)
x.extend([4, 3, 5, 3])
print(x)
print(x.pop())
print(x.pop(2))
print(x[1])
x[0]= "james oladimeji"
y = x[:]
print(x)
print(y)

