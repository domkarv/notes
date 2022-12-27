#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct node
{
   int data;
   struct node *link;
} *head = NULL, *newNode, *temp = NULL;

void push();
void pop();
void peek();
void display();
void search();

int main()
{
   int choice;
   do
   {
      printf("\n1.  push()\n");
      printf("2.  pop()\n");
      printf("3.  peek()\n");
      printf("4.  disply()\n");
      printf("5.  search()\n");

      printf("Enter your choice: ");
      scanf("%d", &choice);

      switch (choice)
      {
      case 1:
         push();
         break;
      case 2:
         pop();
         break;
      case 3:
         peek();
         break;
      case 4:
         display();
         break;
      case 5:
         search();
         break;
      case 0:
         exit(0);
         break;

      default:
         printf("\nEnter correct choice.\n");
         break;
      }

   } while (choice != 0);

   return 0;
}

void push()
{
   newNode = (struct node *)malloc(sizeof(struct node));
   newNode->link = NULL;

   printf("\nEnter data: ");
   scanf("%d", &newNode->data);

   if (head == NULL)
   {
      head = newNode;
   }
   else
   {
      newNode->link = head;
      head = newNode;
   }
}

void pop()
{
   if (head == NULL)
   {
      printf("\nStack is Empty.\n");
   }
   else
   {
      temp = head;
      head = head->link;
      printf("\n%d is now deleted.\n", *temp);
      free(temp);
   }
}

void peek()
{
   if (head == NULL)
   {
      printf("\nStack is Empty.\n");
   }
   else
   {
      printf("\n%d is at top.\n", head->data);
   }
}

void display()
{
   if (head == NULL)
   {
      printf("\nStack is Empty.\n");
   }
   else
   {
      temp = head;
      while (temp != NULL)
      {
         printf("%d\n", temp->data);
         temp = temp->link;
      }
   }
}

void search()
{
   if (head == NULL)
   {
      printf("\nStack is Empty.\n");
   }
   else
   {
      int x;
      bool isHere = false;

      printf("Enter element your are searching for: ");
      scanf("%d", &x);

      temp = head;
      while (temp->link != NULL)
      {
         if (temp->data == x)
         {
            printf("\n%d is in List.\n", temp->data);
            isHere = true;
         }
         temp = temp->link;
      }

      if (isHere == false)
      {
         printf("\n%d is NOT in List.\n", x);
      }
   }
}