# LISTS 
# List is a collection of items. List is a mutable data type.

age = 42
name = "John"

my_list = [age, name, True]

print(my_list) #vai imprimir a lista como [42, 'John', True]
print(my_list[0]) #vai imprimir o primeiro item da lista, que é o age
my_list.append("Doe") #vai adicionar o "Doe" na lista
my_list.pop() #vai remover o último item da lista
my_list.pop(0) #vai remover o primeiro item da lista
my_list.remove(42) #vai remover o 42 da lista

my_tuple = (42, "John", True) #tupla é imutável, então não pode adicionar ou remover itens

my_list[-1] #vai pegar o último item da lista
my_list[-2] #vai pegar o penúltimo item da lista... e assim por diante


