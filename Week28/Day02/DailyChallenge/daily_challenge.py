# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

class Circle:
    def __init__(self, radius = 1):
        self.radius = radius
        self.diameter = 2 * radius

    def area(self):
        return round(3.14 * self.radius**2, 2)    
    
    def __str__(self):
        return f"Circle with radius: {self.radius} equals to diameter: {self.diameter}\nArea: {self.area()}"
    
    def __add__(self, other):
        return Circle(self.radius + other.radius)
    
    def __gt__(self, other):
        if self.radius > other.radius :
            print(f"{self.radius} is bigger than {other.radius}")
        elif self.radius < other.radius:
            print(f"{self.radius} is smaller than {other.radius}")
        else:
            print(f"{self.radius} is equal to {other.radius}")
    
    def l


    

# # Joke of the day: Debugging is like being the detective in a crime drama where you are also the murderer.