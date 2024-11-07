# 1 Using the input function, ask the user for a string. The string must be 10 characters long. If it’s less than 10 characters, print a message which states “string not long enough”. If it’s more than 10 characters, print a message which states “string too long”. If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

string = input("Enter a string: ")

if len(string) < 10:
    print("string not long enough")
elif len(string) > 10:
    print("string too long")
else:
    print("perfect string")

# 2 Then, print the first and last characters of the given text

if len(string) == 10:
    print(string[0])
    print(string[9])
else:
    print("The string is not 10 characters long")


# 3 Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

characters_string = ""
for characters in string:
    characters_string += characters
    print(characters_string)

# 4 Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method).

# no, thank you... I'm tired... I'm going to bed... good night! :)