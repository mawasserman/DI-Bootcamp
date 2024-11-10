user_input = str(input('Give me a string: '))
word = ''

for i in range(len(user_input)):
    if i == 0 or user_input[i] != user_input[i - 1]:
        word += user_input[i]

print(word)

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict['class']['student']['marks']['history'])

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}

keys_to_remove = ["name", "salary"]

for key_to_remove in keys_to_remove:
    del sample_dict[key_to_remove]

print(sample_dict)