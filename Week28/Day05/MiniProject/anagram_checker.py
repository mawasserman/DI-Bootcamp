# The class should have the following methods:

# __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
# Note: None of the methods in the class should print anything.

##### I installed --> nltk (pip install nltk) 
import nltk
from nltk.corpus import wordnet
nltk.download('wordnet')

class AnagramChecker():
    def __init__(self, text_file = 'Week28\Day05\MiniProject\words.txt'):
        with open(text_file, 'r') as f:
            self.text_file = set(word.strip().lower() for word in f if word.strip().isalpha())

    def is_valid_word(self, word):
        return word.lower() in self.text_file or bool(wordnet.synsets(word))
    
    def get_anagrams(self, word1):
        sorted_word = sorted(word1)
        matching_words = []
        
        for word in self.text_file:
            if sorted(word) == sorted_word and self.is_valid_word(word):
                matching_words.append(word)
        
        if word1 in matching_words:
            matching_words.remove(word1)
        
        return matching_words
