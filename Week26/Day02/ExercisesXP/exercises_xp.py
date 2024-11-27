
# Exercise 1 : What are you learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.
def display_message():
    print("I am learning Python in this course.")

display_message()


# 🌟 Exercise 2: What’s your favorite book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.
def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Harry Potter and the Order of the Phoenix")


# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.
def describe_city(city, country= "Brazil"):
    print(f"{city} is in {country}")
describe_city("São Paulo")
describe_city("New York", "USA")


# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.
import random

def random_number(num):
    random_num = random.randint(1, 100)
    if num == random_num:
        print("Success!")
    else:
        print(f"Fail! The numbers are {num} and {random_num}")

random_number(50)


# 🌟 Exercise 5 : Let’s create some personalized shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().
def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
make_shirt()
# Make medium shirt with the default message
make_shirt("Medium")
# Make a shirt of any size with a different message.
make_shirt("Small", "I love big books and I cannot lie")
# Bonus: Call the function make_shirt() using keyword arguments.



# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names. 
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
def show_magicians(magicians):
    for magician in magicians:
        print(magician)

# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = f"{magicians[i]} the Great"

# Call the function make_great().
make_great(magician_names)

# Call the function show_magicians() to see that the list has actually been modified.
show_magicians(magician_names)