#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int N = 5, f = -1, r = -1, deque[5];

// Declaring functions
void enqueueFront();
void enqueueRear();
void dequeueFront();
void dequeueRear();
void display();

int main()
{
   int n;

   do
   {
      printf("\nEnter 1 for enqueueFront.\n");
      printf("Enter 2 for enqueueRear.\n");
      printf("Enter 3 for dequeueFront.\n");
      printf("Enter 4 for dequeueRear.\n");
      printf("Enter 5 for display.\n");

      printf("Enter your operation number: ");
      scanf("%d", &n);
      printf("\n");

      switch (n)
      {
      case 1:
         enqueueFront();
         break;
      case 2:
         enqueueRear();
         break;
      case 3:
         dequeueFront();
         break;
      case 4:
         dequeueRear();
         break;
      case 5:
         display();
         break;
      default:
         printf("Plz enter correct operation number!");
         break;
      }

   } while (n != 6);

   return 0;
}

// Defining functions
void enqueueFront()
{
   if (f == -1 && r == -1)
   {
      f = 0;
      r = 0;
      printf("Enter a element: ");
      scanf("%d", &deque[f]);
   }
   else if (f == (r + 1) % N)
   {
      printf("deque is FULL.\n");
   }
   else if (f == 0)
   {
      f = N - 1;
      printf("Enter a element: ");
      scanf("%d", &deque[f]);
   }
   else
   {
      f--;
      printf("Enter a element: ");
      scanf("%d", &deque[f]);
   }
}

void enqueueRear()
{
   if (f == (r + 1) % N)
   {
      printf("deque is FULL.\n");
   }
   else if (f == -1 && r == -1)
   {
      r = 0;
      f = 0;
      printf("Enter a element: ");
      scanf("%d", &deque[r]);
   }
   else if (r == N - 1)
   {
      r = 0;
      printf("Enter a element: ");
      scanf("%d", &deque[r]);
   }
   else
   {
      r++;
      printf("Enter a element: ");
      scanf("%d", &deque[r]);
   }
}

void dequeueFront()
{
   if (f == -1 && r == -1)
      printf("deque is EMPTY.\n");
   else if (f == r)
   {
      printf("%d is dequeued.\n", deque[f]);
      f = r = -1;
      printf("Now, queue is EMPTY.\n");
   }
   else if (f == N - 1)
   {
      printf("%d is dequeued.\n", deque[f]);
      f = 0;
   }
   else
      printf("%d is dequeued.\n", deque[f++]);
}

void dequeueRear()
{
   if (f == -1 && r == -1)
      printf("deque is EMPTY.\n");
   else if (f == r)
   {
      printf("%d is dequeued.\n", deque[r]);
      f = r = -1;
      printf("Now, deque is EMPTY.\n");
   }
   else if (r == 0)
   {
      r = N - 1;
      printf("%d is dequeued.\n", deque[r]);
   }
   else
      printf("%d is dequeued.\n", deque[r--]);
}

void display()
{
   if (f == -1 && r == -1)
      printf("deque is EMPTY.\n");
   else
   {
      printf("Elements in deque are_\n");
      int i = f;
      for (; i != r; i = (i + 1) % N)
         printf("%d\n", deque[i]);
      printf("%d\n", deque[i]);
   }
}