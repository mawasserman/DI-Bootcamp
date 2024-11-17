# Create a TicTacToe game in python, where two users can play together.

# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# Hint
# To do this project, you basically need to create four functions:

# display_board() – To display the Tic Tac Toe board (GUI).
def display_board(board):
    print("\n  TIC TAC TOE\n\n   A   B   C")
    for i, row in enumerate(board, start=1):
        print(f"{i}  " + " | ".join(row))
        if i < 3:
            print("  ---|---|---")
    print("\n")

# player_input(player) – To get the position from the player.
def player_input(player):
    while True:
        move = input(f"Player {player}, enter your move (e.g., 1A, 2B): ").strip().upper()
        if len(move) != 2 or move[0] not in "123" or move[1] not in "ABC":
            print("Use row(number) and column(letter) (e.g., 1A, 2B).")
            continue

        row = int(move[0]) - 1
        col = "ABC".index(move[1])

        if board[row][col] != " ":
            print("That square is already taken. Choose another.")
        else:
            return row, col

# check_win() – To check whether there is a winner or not.
def check_win(board, player):
    win = [
        board[0], board[1], board[2],
        [board[0][0], board[1][0], board[2][0]], 
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]], 
        [board[0][2], board[1][1], board[2][0]]  
    ]
    return any(all(cell == player for cell in line) for line in win)



# play() – The main function, which calls all the functions created above.
def play():
    global board
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    turn = 0

    for move in range(9):  
        display_board(board)
        player = players[turn % 2]
        row, col = player_input(player)
        board[row][col] = player

        if check_win(board, player):
            display_board(board)
            print(f"Player {player} wins!")
            return

        turn += 1

    display_board(board)
    print("It's a tie!")

play()


# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.



# Tips : Consider the following:
# What functionality will need to accur every turn to make this program work?
# After contemplating the question above, think about splitting your code into smaller pieces (functions).
# Remember to follow the single responsibility principle! each function should do one thing and do it well!

