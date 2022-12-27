#include <iostream>
#include <stdlib.h>
using namespace std;

char board[3][3] = {{'1', '2', '3'},
                    {'4', '5', '6'},
                    {'7', '8', '9'}};
int choice;
int row, column;
char turn = 'X';
bool draw = false;

void display_board()
{
  cout << "\n\tPLAYER - 1 [X]\t PLAYER - 2 [O]\n";
  cout << "\t    Enter 333 to Exit !!!\n\n";
  cout << "\t\t     |     |     \n";
  cout << "\t\t  " << board[0][0] << "  |  " << board[0][1] << "  |  " << board[0][2] << " \n";
  cout << "\t\t_____|_____|_____\n";
  cout << "\t\t     |     |     \n";
  cout << "\t\t  " << board[1][0] << "  |  " << board[1][1] << "  |  " << board[1][2] << " \n";
  cout << "\t\t_____|_____|_____\n";
  cout << "\t\t     |     |     \n";
  cout << "\t\t  " << board[2][0] << "  |  " << board[2][1] << "  |  " << board[2][2] << " \n";
  cout << "\t\t     |     |     \n";
}

void player_turn()
{
  if (turn == 'X')
  {
    cout << "\n\tPlayer - 1 [X] turn : ";
  }
  else if (turn == 'O')
  {
    cout << "\n\tPlayer - 2 [O] turn : ";
  }

  // Taking input from user
  cin >> choice;

  switch (choice)
  {
  case 1:
    row = 0;
    column = 0;
    break;
  case 2:
    row = 0;
    column = 1;
    break;
  case 3:
    row = 0;
    column = 2;
    break;
  case 4:
    row = 1;
    column = 0;
    break;
  case 5:
    row = 1;
    column = 1;
    break;
  case 6:
    row = 1;
    column = 2;
    break;
  case 7:
    row = 2;
    column = 0;
    break;
  case 8:
    row = 2;
    column = 1;
    break;
  case 9:
    row = 2;
    column = 2;
    break;
  case 333:
    exit(0);
  default:
    cout << "Invalid Move";
  }

  if (turn == 'X' && board[row][column] != 'X' && board[row][column] != 'O')
  {
    board[row][column] = 'X';
    display_board();
    turn = 'O';
  }
  else if (turn == 'O' && board[row][column] != 'X' && board[row][column] != 'O')
  {
    board[row][column] = 'O';
    display_board();
    turn = 'X';
  }
  else
  {
    // if input position already filled
    cout << "Box already filled!n Please choose another!!\n\n";
    player_turn();
  }
}

// Function to get the game status e.g. GAME WON, GAME DRAW, GAME IN CONTINUE MODE
bool gameover()
{
  // checking the win for Simple Rows and Simple Column
  for (int i = 0; i < 3; i++)
    if (board[i][0] == board[i][1] && board[i][0] == board[i][2] || board[0][i] == board[1][i] && board[0][i] == board[2][i])
      return false;

  // checking the win for both diagonal

  if (board[0][0] == board[1][1] && board[0][0] == board[2][2] || board[0][2] == board[1][1] && board[0][2] == board[2][0])
    return false;

  // Checking the game is in continue mode or not
  for (int i = 0; i < 3; i++)
    for (int j = 0; j < 3; j++)
      if (board[i][j] != 'X' && board[i][j] != 'O')
        return true;

  // Checking the if game already draw
  draw = true;
  return false;
}

// game's starting function

void ticTacToe()
{
  system("cls");
  cout << "\tT I C - T A C - T O E -- G A M E" << endl;
  cout << "\n\t\tFOR 2 PLAYERS";
  display_board();
  while (gameover())
  {
    player_turn();
  }
  if (turn == 'X' && draw == false)
  {
    cout << "\n\nCongratulations!Player with 'O' has won the game";
  }
  else if (turn == 'O' && draw == false)
  {
    cout << "\n\nCongratulations!Player with 'X' has won the game";
  }
  else
    cout << "\n\nGAME DRAW!!!\n\n";
}

int main()
{
  ticTacToe();
  return 0;
}