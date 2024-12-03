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
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either a radius or a diameter.")

    def area(self):
        return round(3.14 * (self.radius**2), 2)

    def __str__(self):
        return f"Circle with radius: {self.radius} (diameter: {self.radius * 2})\nArea: {self.area()}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        raise TypeError("Can only add another Circle.")

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        raise TypeError("Can only compare with another Circle.")

    def compare(self, other):
        if self.radius > other.radius:
            print(f"{self.radius} is bigger than {other.radius}")
        elif self.radius < other.radius:
            print(f"{self.radius} is smaller than {other.radius}")
        else:
            print(f"{self.radius} is equal to {other.radius}")


# Testing the Circle class
circle1 = Circle(None, 6)
circle2 = Circle(5, None)
circle3 = Circle(2)

print(circle1)
print(circle2)

circle4 = circle1 + circle2
print(f"Circle 1 + Circle 2:\n{circle4}")

circle1.compare(circle2)
circle1.compare(circle3)
circle2.compare(circle3)

circles = [circle1, circle2, circle3]
sorted_circles = sorted(circles)
print("\nSorted Circles by radius:")
for c in sorted_circles:
    print(c)

# # Joke of the day: Debugging is like being the detective in a crime drama where you are also the murderer.