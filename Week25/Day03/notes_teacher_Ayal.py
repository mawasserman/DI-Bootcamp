list1 = [5, 10, 15, 20, 25, 50, 20]
number_to_search = 201

if number_to_search in list1:
    index = list1.index(number_to_search)
    list1[index] = 200
else:
    print(f"{number_to_search} is not in the list")

a_tuple = (10, 20, 30, 40)
a, b, c, d = a_tuple

print(a)  # should print 10
print(b)  # should print 20
print(c)  # should print 30
print(d)  # should print 40

num = int(input("Enter a number: "))

for i in range(1,13):
    print(f"{num} * {i} = {num*i}")

# input: ppoeemm    - input_runner = 1,2,3,4,5,6,7
# output: poem         - output_runner = 0,1,2,3

output_list = ['p', 'o', 'e', 'm']

output_list[-1]

print(''.join(output_list))

