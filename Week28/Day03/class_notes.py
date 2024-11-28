# a gente pode criar e deletar files no python

# a gente tem uma função chamada open que abre um arquivo... e outro que vai ler o arquivo..
#pode ser um arquivo em qualquer lugar, só escrever o endereço completo 

# mode = 'r' -> read only
# mode = 'w' -> write only
# mode = 'a' -> append
# mode = 'r+' -> read and write
# mode = 'w+' -> write and read --- esse vai primeiro deletar o arquivo e depois escrever 
# mode = 'a+' -> append and read ... vai add coisas no final do arquivo

# Exercise

for line in open("nameslist.txt"):
    print(line) # se nao quser duas linhas, coloca line.strip()

with open("nameslist.txt") as f:
    names = f.readlines()
    print(names[5] )

with open("nameslist.txt") as f:
    print(f.read(5))

with open("nameslist.txt") as f:
    print(f.readlines())

with open("nameslist.txt") as f:
    names = f.readlines()
    occurences_of_darth = names.count("Darth\n")
    occurences_of_luke = names.count("Luke\n")
    occurences_of_lea = names.count("Lea\n")

    print(f"Darth: {occurences_of_darth}\n"
        f"Luke: {occurences_of_luke}\n"
        f"Lea: {occurences_of_lea}")
    



