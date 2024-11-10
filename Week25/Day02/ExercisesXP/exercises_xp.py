# Exercise 1 : Hello World
# Instructions
# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world
print("Hello world\nHello world\nHello world\nHello world")

# Exercise 2 : Some Math
# Instructions
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).
print((99**3)*8)

# Exercise 3 : What is the output ?
# Instructions
# Predict the output of the following code snippets:
# 5 < 3 # False
# 3 == 3 # True
# 3 == "3" # False
# "3" > 3 # Error
# "Hello" == "hello" # False


# 🌟 Exercise 4 : Your computer brand
# Instructions
# Create a variable called computer_brand which value is the brand name of your computer.
computer_brand = "HP"
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".
print(f"I have a {computer_brand} computer")

# 🌟 Exercise 5 : Your information
# Instructions
# Create a variable called name, and set it’s value to your name.
name = 'Marcella'
# Create a variable called age, and set it’s value to your age.
age = 35
# Create a variable called shoe_size, and set it’s value to your shoe size.
shoe_size = 38
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
info = f"My name is {name}, I'm {age} years old and my shoe size is {shoe_size}."
# Have your code print the info message.
print(info)
# Run your code


# 🌟 Exercise 6 : A & B
# Instructions
# Create two variables, a and b.
# Each variable value should be a number.
a = 5
b = 10
# If a is bigger then b, have your code print Hello World.
if a > b:
    print("Hello World")

# Exercise 7 : Odd or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.
user_number = input("Give me a number: ")
if int(user_number) % 2 == 0:
    print("Even")
else:
    print("Odd")

# 🌟 Exercise 8 : What’s your name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.
user_name = input("What's your name? ")
if user_name == "Marcella":
    print("There can be only one Marcella. A singular essence unmatched, unshared, unparalleled. We must clash, our destinies entwined, until only one stands victorious—a final, inevitable testament to the true Marcella.")
else:
    print("Oh... cool...") # this is my personal touch

# 🌟 Exercise 9 : Tall enough to ride a roller coaster
# Instructions
# Write code that will ask the user for their height in centimeters.
user_height = int(input("What's your height in centimeters? "))
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

if user_height > 145:
    print("You are tall enough to ride.")
else:
    print("You need to grow some more to ride. Are you eating your vegetables?")
