from distutils.command.config import LANG_EXT


i = [4, 3, 3, 5, 34, 2, 3, 5, 5,34,4, 4, 5,4]
mp = map(lambda x: x + 2, i)
even = filter(lambda x: x %2==0, i)
print(list(even))