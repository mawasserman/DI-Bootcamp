print (3+5)

#numbers: integers(not decimal, inteiros?) and floats(decimal numbers)
print (type(42))

num = 4j  #complex number, mas não vai cobrir nesse curso

#strings: text, characters, words, etc

my_str = '34' #string
my_str = "that's great!"

#quando tem ' nas palavras, tem que colocar \' ou colocar a crase, ou usar as aspas duplas para as de fora.. tipo: 'I\'m' ou "I'm"

# strings methods

print (my_str[2]) #vai aprarecer o terceiro caracter da string, pq começa do 0
print (my_str[2:5]) #vai aparecer do terceiro ao quinto caracter
print (my_str[2:]) #vai aparecer do terceiro caracter até o final
print (my_str[:5]) #vai aparecer do primeiro caracter até o quinto

print("hello there!".capitalize()) #vai deixar a primeira letra da frase maiuscula
print("hello there!".title()) #vai deixar a primeira letra de cada palavra maiuscula
print("hello there!".upper()) #vai deixar tudo maiusculo
print("hello there!".lower()) #vai deixar tudo minusculo

print("hello there!".replace("there", "world")) #vai substituir a palavra "there" por "world"

#perdi parte pq as crianças estavam tocando o terror  no quarto

#Type_casting

user_age = input("Enter your age: ") #vai pedir para o usuário digitar a idade
user_height = input("Enter your height: ") #vai pedir para o usuário digitar a altura
print(int(user_age)) #vai converter a string para int
print(float(user_height)) #vai converter a string para float
print (user_age + 5) #vai dar erro, pq o input é uma string, então tem que converter para int

user_phone = 58258258 #não pode começar com 0, pq o python vai entender que é octal.. octal é um sistema de numeração que vai de 0 a 7
print(str(user_phone)) #vai converter o int para string, pq ai não tem o risco de somar e mudar o numero...

user_first_name = "John"
user_last_name = "Doe"
print(user_first_name + user_last_name) #vai juntar os dois nomes, pq são strings
print(user_first_name + " " + user_last_name) #vai juntar os dois nomes, mas com um espaço entre eles
#MELHOR OPÇÃO:
print(f"{user_first_name} {user_last_name}") #vai juntar os dois nomes, mas com um espaço entre eles, usando o f-string

#keywords: são palavras reservadas do python, que não podem ser usadas como variáveis
#ex: print, input, int, float, str... eu perdi isso por causa das crianças

# vendo as aulas no site:

'me' is 'you' #is funciona como ==, mas é mais restrito, pq ele compara o endereço de memória, e não o valor.. então se for a mesma string, ele vai dar True, pq ele vai apontar para o mesmo endereço de memória (não entendi muito bem) 
'me' is not 'you' #vai dar True, pq são strings diferentes.. da pra usar o != tbm
True and False #vai dar False, pq o and precisa que os dois sejam True
True or False #vai dar True, pq o or precisa que um dos dois seja True

#no python TODOS OS VALORES são objetos, então tem métodos que podem ser usados em todos os valores
dir(42) #vai mostrar todos os métodos que podem ser usados com o 42 

#Type Casting.. colocando um numero que está como string e transformando em integer
'12' * 2 #'1212'  not the expected result
int('12') * 2 # 24 expected result
#para fazer o contrario, de integer para string
str(12) # '12'

# For a computer, everything is a character, even tabs and newlines. To define a new line in Python, use the \n character; for a tab, use the \t character. For example:
print("Hello world\nMy name is Rick")
# Hello world
# My name is Rick
print("Peace on the\tWORLD")
# Peace on the    WORLD

# format() method
name = "Rick"
'Hello, my name is {}'.format(name) # 'Hello, my name is Rick'.. da pra colocar mais de um argumento, e ele vai substituir na ordem que foi colocado 
name = "Rick"
age = 25
'Hello, my name is {} and I am {} years old'.format(name, age) # 'Hello, my name is Rick and I am 25 years old'
#or using f-string
f'Hello, my name is {name}' # 'Hello, my name is Rick'
# ATENÇÃO: f-string só funciona no python 3.6 ou superior, e tbm pode fazer esse cao ai debaixo
f"{2 * 35}" #'70'

# We can also write +=; this operator means the same as +.

my_number = 5
my_number += 5
# += means "= my_number +"
#In this example the value of "my_number" will be 10...This syntax can be used with every operator

# CONDITIONALS

# if, elif, else

# IN 
# The "in" keyword is used to check if a value is present in a sequence (list, tuple, string, etc.). For example:
my_list = [1, 2, 3, 4, 5]
if 3 in my_list:
    print("Yes, 3 is in the list")

# NOT IN
# The "not in" keyword is used to check if a value is not present in a sequence (list, tuple, string, etc.). For example:
my_list = [1, 2, 3, 4, 5]
if 6 not in my_list:
    print("Yes, 6 is not in the list")

    