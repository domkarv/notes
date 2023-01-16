#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int N = 5, f = -1, r = -1, pQueue[5];

// Declaring functions
bool isEmpty();
bool isFull();
void enqueue(int val);
void dequeue();
void display();

void main()
{
  int n, val;

  do
  {
    printf("\nEnter 1 for enqueue.\n");
    printf("Enter 2 for dequeue.\n");
    printf("Enter 3 for DISPLAY.\n");
    printf("Enter 0 to EXIT.\n");
    printf("Enter your command number: ");
    scanf("%d", &n);
    printf("\n");
    switch (n)
    {
    case 1:
      printf("Enter a element: ");
      scanf("%d", &val);
      enqueue(val);
      break;
    case 2:
      dequeue();
      break;
    case 3:
      display();
      break;
    case 0:
      exit(0);
      break;
    default:
      printf("Plz enter correct command number!");
      break;
    }
  } while (n != 0);
}

// Defining functions
bool isEmpty() { return (f == -1 && r == -1); }

bool isFull() { return (r == N - 1); }

void enqueue(int val)
{
  if (isEmpty())
  {
    f = r = 0;
    pQueue[r] = val;
  }
  else if (isFull())
  {
    printf("queue is FULL.\n");
  }
  else
  {
    pQueue[++r] = val;

    for (int i = r; i > 0; i--)
    {
      if (pQueue[i] > pQueue[i - 1])
      {
        val = pQueue[i];
        pQueue[i] = pQueue[i - 1];
        pQueue[i - 1] = val;
      }
      else
        break;
    }
  }
}

void dequeue()
{
  if (isEmpty())
  {
    printf("queue is EMPTY.\n");
  }
  else if (f == r)
  {
    printf("%d is dequeued.\n", pQueue[f]);
    f = -1;
    r = -1;
    printf("Now, queue is EMPTY.\n");
  }
  else
  {
    printf("%d is dequeued.\n", pQueue[f]);
    f++;
  }
}

void display()
{
  if (isEmpty())
  {
    printf("queue is EMPTY.\n");
  }
  else
  {
    printf("Elements in queue are_\n");
    for (int i = f; i <= r; i++)
    {
      printf("%d ", pQueue[i]);
    }
    printf("\n");
  }
}