#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define SIZE 25

char stack[SIZE];
int top = -1;

void push(char ch) { stack[++top] = ch; }

void pop() { top--; }

bool checkParanthesis(char exp[])
{
  int i = 0;
  while (exp[i] != '\0')
  {
    if (exp[i] == '(')
      push('(');
    else if (exp[i] == ')')
    {
      char ch = stack[top];
      while (ch != '(')
      {
        pop();
      }
      pop();
    }
    i++;
  }
  return top == -1;
}

void main()
{
  char exp[SIZE];
  gets(exp);

  if (checkParanthesis(exp) == true)
    printf("Right");
  else
    printf("Wrong");
}