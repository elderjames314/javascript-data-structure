#while == undefined number of time
#forloop == defined number of time

for i in range(0, 5, 2):
    print(i)
# range == start, stop, step

x = [32, 4, 2, 4]
for i in range(len(x)):
    print(x[i])

for i, ele in enumerate(x):
    print(i, ele)
