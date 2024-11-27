# Write a function to compute 5/0 and use try/except to catch the exceptions.
# Bonus : use some Buit-in exceptions of Python : Look here

try:
    result = 5 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")