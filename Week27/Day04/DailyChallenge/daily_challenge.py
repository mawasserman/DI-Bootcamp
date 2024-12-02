# Instructions :
# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

# The Pagination class will accept 2 parameters:

# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)

class Pagination:
    def __init__(self, items = None, pageSize = 10):
        self.items = items if items else []
        self.pageSize = int(pageSize)
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)
        self.currentPage = 1
    
    def getVisibleItems(self):
        start_index = (self.currentPage - 1) * self.pageSize
        end_index = start_index + self.pageSize
        print(self.items[start_index:end_index])

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        print(self.currentPage)

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        print(self.currentPage)

    def firstPage(self):
        self.currentPage = 1
        print(self.currentPage)

    def lastPage(self):
        self.currentPage = self.totalPages
        print(self.currentPage)

    def goToPage(self, pageNum):
        pageNum = int(pageNum)
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = pageNum
        print(self.currentPage)
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.getVisibleItems() 
# ["a", "b", "c", "d"]

p.nextPage()

p.getVisibleItems()
# ["e", "f", "g", "h"]

p.lastPage()

p.getVisibleItems()
# ["y", "z"]