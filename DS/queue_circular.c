#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int N = 5, f = -1, r = -1, queue[5];

// Declaring functions
bool isEmpty();
bool isFull();
void enqueue();
void dequeue();
void display();

void main()
{
   int n;
   char conti;

   do
   {
      printf("\nEnter 1 for enqueue.\n");
      printf("Enter 2 for dequeue.\n");
      printf("Enter 3 for PEEK.\n");
      printf("Enter 4 for DISPLAY.\n");
      printf("Enter 0 to EXIT.\n");

      printf("Enter your command number: ");
      scanf("%d", &n);
      printf("\n");

      switch (n)
      {
      case 1:
         enqueue();
         break;

      case 2:
         dequeue();
         break;

      case 3:
         peek();
         break;

      case 4:
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

bool isFull() { return (f == (r + 1) % N); }

void enqueue()
{
   if (isEmpty())
   {
      f = r = 0;
      printf("Enter a element : ");
      scanf("%d", &queue[r]);
   }
   else if (isFull())
   {
      printf("queue is FULL.\n");
   }
   else
   {
      r = (r + 1) % N;
      printf("Enter a element : ");
      scanf("%d", &queue[r]);
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
      printf("%d is dequeued.\n", queue[f]);
      f = -1;
      r = -1;
      printf("Now, queue is EMPTY.\n");
   }
   else
   {
      printf("%d is dequeued.\n", queue[f]);
      f = (f + 1) % N;
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
      int i = f;
      while (i != r)
      {
         printf("%d\n", queue[i]);
         i = (i + 1) % N;
      }
      printf("%d\n", queue[i]);
   }
}