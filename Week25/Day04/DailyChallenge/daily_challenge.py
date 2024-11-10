# Instructions
# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples
# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]
user_number = int(input('Enter a number: '))
user_length = int(input('Enter a length: '))
list = [user_number * i for i in range(1, user_length + 1)]
print(list)


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

user_string = input('Enter a string: ')

string_single_letters = ""
for i in range(len(user_string)):
    if i == 0 or user_string[i] != user_string[i - 1]:
        string_single_letters += user_string[i]

print("Result:", string_single_letters)

