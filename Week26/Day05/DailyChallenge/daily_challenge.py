# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

to_sort = input("Enter a comma separated sequence of words: ")
list_to_sort = to_sort.split(",")
list_to_sort.sort()
print (",".join(list_to_sort))

# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") ➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

def longest_word(sentence):
    words = sentence.split(" ")
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    print(longest_word)

longest_word("Margaret's toy is a pretty doll.")
longest_word("A thing of beauty is a joy forever.")
longest_word("Forgetfulness is by all means powerless!")
