#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

struct node
{
   int data;
   struct node *link;
} *head = NULL, *temp = NULL, *newNode;

void enqueue();
void dequeue();
void display();

int main()
{
   int choice;
   do
   {
      printf("\n1. enqueue.\n");
      printf("2. dequeue.\n");
      printf("3. display.\n");

      printf("Enter your choice: ");
      scanf("%d", &choice);

      switch (choice)
      {
      case 1:
         enqueue();
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
         printf("Plz enter correct choice.");
         break;
      }
   } while (choice != 0);

   return 0;
}

void enqueue()
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

void dequeue()
{
   if (head == NULL)
   {
      printf("\nQueue is Empty.\n");
   }
   else if (head->link == NULL)
   {
      printf("\n%d is now deleted.\n", head->data);
      // free(head); // stores garbage value
      head = NULL;
   }
   else
   {
      struct node *temp2;
      temp = head;
      temp2 = temp->link;

      while (temp2->link != NULL)
      {
         temp = temp->link;
         temp2 = temp->link;
      }
      printf("\n%d is now deleted.\n", *temp2);
      temp->link = NULL;
      free(temp2);
   }
}

void display()
{
   if (head == NULL)
   {
      printf("\nQueue is Empty.\n");
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