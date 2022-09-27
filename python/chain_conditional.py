from unittest import result


x = 7
y = 8
z = 0

result1 = x == y 
result2 = y > x 
result3 = z < x + 2

result4 = result1 or result2 
print(result4)

print(not result2)

print(result2 and result3)