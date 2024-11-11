# 🌟 Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorite numbers
my_fav_numbers = {4, 7, 9, 47}

# Add two new numbers to the set
my_fav_numbers.add(13)
my_fav_numbers.add(11)

# Remove the last number
my_fav_numbers.remove(11)

# Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = {2, 4, 5, 7}

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# No because tuples are immutable


# 🌟 Exercise 3: List
# Instructions
# Using this list 
basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
basket.remove("Banana")
# Remove “Blueberries” from the list.
basket.pop()
# Add “Kiwi” to the end of the list.
basket.append("Kiwi")
# Add “Apples” to the beginning of the list.
basket.insert(0, "Apples")
# Count how many apples are in the basket.
print(basket.count("Apples"))
# Empty the basket.
basket.clear()
# Print(basket)
print(basket)

# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Float are nunbers that have decimal points. The integer only have whole numbers.

# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
sequence_list = []
i = 1.5
while i < 5.5:
    if i ==int(i):
        sequence_list.append(int(i))
    else:
        sequence_list.append(i)
    i += 0.5
print(sequence_list)

# Can you think of another way to generate a sequence of floats?


# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
for i in range(1, 21):
    print(i)
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
for i in range(1, 21):
    if (i-1) % 2 == 0: #I did -1 to i because the index starts at 0 but the range we've put is from 1/starts at 1...
        print(i)


# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
name = ""
while name != "Marcella":
    name = input("What is your name? ")


# 🌟 Exercise 7: Favorite fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
user_favorite_fruits = input("What is your favorite fruit(s)? Enter them separated by a space: ")
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
list_user_fav_fruits = user_favorite_fruits.split()
# Now that we have a list of fruits, ask the user to input a name of any fruit.
user_random_fruit = input("Enter a fruit name: ")
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
if user_random_fruit in list_user_fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")



# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
topping = ""
toppings_list = []
while topping != "quit":
    topping = input("Enter a topping, unless you don't want any more, then type 'quit': ")
    if topping != "quit":
        print(f"I'll add {topping} to your pizza")
        toppings_list.append(topping)
total_price = 10 + 2.5 * len(toppings_list)
print(f"Your pizza has the following toppings: {toppings_list} and will cost you {total_price}.")


# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.
member_age = ""
ticket_cost_list = []

while member_age != "quit":
    member_age = input("Enter the age of the person who wants a ticket, unless you don't want any more, then type 'quit': ")
    if member_age != "quit":
        age = int(member_age)        
        if age < 3:
            ticket_cost_list.append(0)
        elif 3 <= age <= 12:
            ticket_cost_list.append(10)
        else:
            ticket_cost_list.append(15)
print(f"The total cost of all the family’s tickets is ${sum(ticket_cost_list)}.")
# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.
teenagers = ""
permited_list = []

while teenagers != "quit":
    teenagers = input("Young hero! Reveal your age, or choose 'quit' to retreat —but beware, only the bold continue on!: ")
    if teenagers != "quit":
        age = int(teenagers)
        if 16 <= age <= 21:
            name_teenager = input("Ah, the perfect age for this perilous journey! Now, the final question: What is your name, hero?")
            permited_list.append(name_teenager)
        else:
            print("Too Old to Rock ’n’ Roll ...OR... Too Young to this Movie! You shall not pass!")
print(permited_list)



# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich
finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop()
    finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")