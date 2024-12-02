# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class? 
# The bucket that contains the blueprint for objects.

# What is an instance?
# An object created from a class, the molded sand

# What is encapsulation?
#All the properties and actions of a specific item

# What is abstraction?
#Who bought the bucket? - just kidding, but not so much. It's hiding the process and having faith that everything will work out.

# What is inheritance?
# Inheritance is basically acquiring traits or features from your parents.

# What is multiple inheritance?
# Having more than one parent

# What is polymorphism?
# A command could give birth to many forms or styles of output. 

# What is method resolution order or MRO?
# The order in which classes are searched for method definitions.


# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        if len(self.cards) != 52:
            raise ValueError("The do not contain all 52 cards!")
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            raise ValueError("No cards left")
        return self.cards.pop()

# Example Usage
deck = Deck()
print("Initial Deck:")
print(deck.cards)

deck.shuffle()
print("\nShuffled Deck:")
print(deck.cards)

card = deck.deal()
print(f"\nDealt Card: {card}")
print("\nRemaining Deck:")
print(deck.cards)
