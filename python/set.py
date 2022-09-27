# unorder unique immutable list
# set is pretty fase
# set add/remove element is very fast
# use set when you care something exist or does not exist

s = {3, 2, 4,3 ,5, 5, 5}
y = set()
s.add(4)
s.remove(3)

print(s)
print(4 in s)

# union
print(s.difference(s))
print(s.union(s))