# # 🌟 Exercise 1: Cats
# # Instructions
# # Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
    
# # Instantiate three Cat objects using the code provided above.
# # Outside of the class, create a function that finds the oldest cat and returns the cat.
# # Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

# add_cat1 = Cat("Tom", 5)
# add_cat2 = Cat("Sylvester", 3)
# add_cat3 = Cat("Garfield", 7)

# def oldest_cat(*cats):
#     oldest = cats[0]
#     for cat in cats:
#         if cat.age > oldest.age:
#             oldest = cat
#     print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")

# oldest_cat(add_cat1, add_cat2, add_cat3)

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
    
#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         if isinstance(self.height, int):
#             print(f"{self.name} jumps {self.height*2} cm high!")
#         else:
#             print(f"{self.name} jumps {int(self.height)*2} cm high!")

# davids_dog = Dog("Rex", 50)
# sarahs_dog = Dog("Teacup", 20)

# def the_dogs(owner, dog):
#     print(f"{owner}'s dog is {dog.name} and is {dog.height}cm tall.")
#     dog.bark()
#     dog.jump()

# the_dogs('David', davids_dog)
# the_dogs('Sarah', sarahs_dog)

# if davids_dog.height > sarahs_dog.height:
#     print(f"{davids_dog.name} is bigger than {sarahs_dog.name}")
# else:
#     print(f"{sarahs_dog.name} is bigger than {davids_dog.name}")


# 🌟 Exercise 3 : Who’s the song producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()


# Exercise 4 : Afternoon at the Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        animals_dict = {}
        for animal in self.animals:
            if animal[0] not in animals_dict:
                animals_dict[animal[0]] = [animal]
            else:
                animals_dict[animal[0]].append(animal)
        return animals_dict

    def get_groups(self):
        grouped_animals = self.sort_animals()
        print("Animal groups:")
        for group, animals in grouped_animals.items():
            print(f"{group}: {', '.join(animals)}") 


ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Ape")

ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_groups()

