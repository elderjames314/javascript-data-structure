x = {'key': 4, 'james': 4}
print(x['key'])
print('key' in x)
print(x.values())
print(x.keys())
del x['key']
print(x)
for key, value in x.items():
    print(key, value)
