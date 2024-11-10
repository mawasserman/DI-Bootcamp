print(3 + 5)
print(3 - 5)

#Numbers: Integers(not decimal), floats(decimal)
# print(dir(42))
# print(type(42))

#complex number
# num = 4j
# print(type(num))

#strings: '', "",text, words, characters sequence

my_str ='34'
my_str ="That's great!"

# print(my_str[2])
# print(my_str[7:12])
# print(my_str[7:]) #SLICING FROM [START:UNTILL THE END]
# print(my_str[:7]) #SLICING FROM [START:BEGINNING UNTILL INDEX 7]

# #string Methods
# print("hello there!".capitalize())
# print("hello there!".title())
# print("hello there!".upper())
# print("HELLO there!".lower())

# greetings = 'Privet, kak dila?'

# # print(greetings.replace('Privet','Shalom'))

# price = '$14'
# price = price.replace('$','') #cleaning the data
# # print(type(int(price)))

# #strip()
# price2 = ' $155'
# price2 = price2.strip() #by default strip() deletes leading and ending spaces
# price2 = price2.strip('$')#or you can specify what to delete in the beginning or end of the string
# # print(price2)

# user_name = input("what is your name?").strip()
# print(user_name[0])

# #f strings = formating the string to include variables

# print(f"Ola, {user_name}!")
# print("Ola, " + user_name + "!")

# #TYPE CASTING

# user_age = input("What's your age?")
# user_height = input("What's your height?")
# print(int(user_age))
# print(float(user_height))
# user_phone = 55532169
# print(type(str(user_phone)))

# print('Python' *5)

#Special Characters
# my_str = 'Here\'s a string'
# my_str = 'Here\'s a string'
# print('Python\t' *5)
# print('Python\n' *5)

# print(f'Hello {5} times')

#Booleans: True and False (Capital, not like in JS)
# game_going_on = True
# if game_going_on == True:
#     input('enter your move:')
# else:
#     print('you win!')


#VARIABLES IN PYTHON
#JS: CAMEL CASE - IN PYTHON: NO CAMEL CASE!

myAge = 34
my_age = 34

pi = 3.14 #a variable that should not be change
PI = 3.14 #convention in python: upper case for variables that should not be change

PASSWORD = 555555
print(PASSWORD)
PASSWORD = 4582556
print(PASSWORD)

my_list = []

counter = 0
counter += 1
#matematical comparison
# print(3 > '3') #Error - python cant compare int and str
# print(3 < 5) #True

#keyword comparison: is, is not, and
my_name = 'John'

print(my_name is "Juliana")

print(my_name is "Juliana" and 1 < 3)

#if statements

if my_name is 'Juliana':
    print(f'Hello, {my_name}')
else:
    print('You\'re not John')


#AND keyword = both sides (before and after the keyword) must be true in order to the statement to be true
user_num = int(input('Gimme a number:'))
# if user_num > 5 and user_num < 10:
#     print('We entered the first if')
# elif user_num > 10 and user_num < 20:
#     print('We entered the elif')
# else:
#     print('we entered the else')

#OR keyword: just one of the statement must be true in order to the statement to be true
if my_name is 'Juliana' or user_num > 5:
    print('one of the conditions is true')
else:
    print('none of the conditions is true')
