# correção do daily challenge:

# word = input("Enter a word: ")
# result = {}

# for index, letter in enumerate(word):
#     if letter not in result:
#         result[letter] = [index]
#     else:
#         result[letter].append(index) # ou não.. me distrai... agora ele ta dando aula

# FUNCÕES

# def serve para criar uma função, que é um bloco de código que só é executado quando chamado.. quando uma variavel é criada dentro de uma função, ela só existe dentro da função, e não fora dela ai é chamada de variavel local, e se for criada fora da função, é chamada de variavel global

a= int(input("Enter a number: "))
b= int(input("Enter another number: "))

def calculation(a, b):
    return f"Sum: {a + b}, Difference: {a - b}"

print(calculation(a, b))