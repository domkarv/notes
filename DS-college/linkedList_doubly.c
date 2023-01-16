#include <stdio.h>
#include <stdlib.h>

struct node
{
   int data;
   struct node *prev;
   struct node *next;
} *head = NULL, *newNode, *temp = NULL;

void insertAtFirst();
void insertAtEnd();
void insertAtPosition();
void deleteFirst();
void deleteEnd();
void deletePosition();
void traversal();
void reverseTraversal();

int main()
{
   do
   {
      printf("\n1.  insertAtFirst\n");
      printf("2.  insertAtEnd\n");
      printf("3.  insertAtPosition\n");
      printf("4.  deleteFirst\n");
      printf("5.  deleteEnd\n");
      printf("6.  deletePosition\n");
      printf("7.  traversal\n");
      printf("8.  reverseTraversal\n");
      printf("10. exit\n");

      int choice;

      printf("Enter your choice: ");
      scanf("%d", &choice);

      switch (choice)
      {
      case 1:
         insertAtFirst();
         break;
      case 2:
         insertAtEnd();
         break;
      case 3:
         insertAtPosition();
         break;
      case 4:
         deleteFirst();
         break;
      case 5:
         deleteEnd();
         break;
      case 6:
         deletePosition();
         break;
      case 7:
         traversal();
         break;
      case 8:
         reverseTraversal();
         break;
      case 10:
         exit(0);
         break;
      default:
         printf("\nPlease enter valid choice.\n");
      }
   } while (10);

   return 0;
}

void insertAtFirst()
{
   newNode = (struct node *)malloc(sizeof(struct node));
   newNode->next = NULL;
   newNode->prev = NULL;

   printf("\nEnter data: ");
   scanf("%d", &newNode->data);

   if (head == NULL)
   {
      head = newNode;
   }
   else
   {
      head->prev = newNode;
      newNode->next = head;
      head = newNode;
   }
}

void insertAtEnd()
{
   newNode = (struct node *)malloc(sizeof(struct node));
   newNode->next = NULL;
   newNode->prev = NULL;

   printf("\nEnter data: ");
   scanf("%d", &newNode->data);

   if (head == NULL)
   {
      head = newNode;
   }
   else
   {
      temp = head;
      while (temp->next != NULL)
      {
         temp = temp->next;
      }
      temp->next = newNode;
      newNode->prev = temp;
   }
}

void insertAtPosition()
{
   newNode = (struct node *)malloc(sizeof(struct node));
   newNode->next = NULL;
   newNode->prev = NULL;

   if (head == NULL)
   {
      printf("\nEnter data: ");
      scanf("%d", &newNode->data);

      head = newNode;
   }
   else
   {
      int i, pos;

      printf("Enter position: ");
      scanf("%d", &pos);

      if (pos == 1)
      {
         insertAtFirst();
      }
      else if (pos < 1)
      {
         printf("\nEnter correct Position.\n");
         insertAtPosition();
      }
      else
      {
         i = 1;
         temp = head;
         while (temp->next != NULL)
         {
            temp = temp->next;
            ++i;
         }

         if (pos > i + 1)
         {
            printf("\nEnter correct Position.\n");
            insertAtPosition();
         }
         else
         {
            i = 1;
            struct node *temp2;
            temp = head;
            temp2 = temp->next;
            while (i < pos - 1)
            {
               temp = temp->next;
               temp2 = temp->next;
               i++;
            }

            if (temp->next == NULL)
            {
               insertAtEnd();
            }
            else
            {
               printf("\nEnter data: ");
               scanf("%d", &newNode->data);

               newNode->next = temp2;
               temp2->prev = newNode;
               temp->next = newNode;
               newNode->prev = temp;
            }
         }
      }
   }
}

void deleteFirst()
{
   if (head == NULL)
   {
      printf("\nLinked List is Empty.\n");
   }
   else if (head->next == NULL)
   {
      printf("\n%d is now deleted.\n", head->data);
      // free(head); // stores garbage value
      head = NULL;
   }
   else
   {
      temp = head;
      head = head->next;
      head->prev = NULL;
      printf("\n%d is now deleted.\n", *temp);
      free(temp);
   }
}

void deleteEnd()
{
   if (head == NULL)
   {
      printf("\nLinked List is Empty.\n");
   }
   else if (head->next == NULL)
   {
      deleteFirst();
   }
   else
   {
      struct node *temp2;
      temp = head;
      temp2 = temp->next;

      while (temp2->next != NULL)
      {
         temp = temp->next;
         temp2 = temp->next;
      }
      printf("\n%d is now deleted.\n", *temp2);
      free(temp2);
      temp->next = NULL;
   }
}

void deletePosition()
{
   if (head == NULL)
   {
      printf("\nLinked List is Empty.\n");
   }
   else
   {
      int i, pos;

      printf("Enter position: ");
      scanf("%d", &pos);

      if (pos == 1)
      {
         deleteFirst();
      }
      else if (pos < 1)
      {
         printf("Enter correct Position.");
         deletePosition();
      }
      else
      {
         i = 1;
         temp = head;
         while (temp->next != NULL)
         {
            temp = temp->next;
            ++i;
         }

         if (pos > i)
         {
            printf("\nEnter correct Position.\n");
            deletePosition();
         }
         else
         {
            struct node *temp2;
            temp = head;
            temp2 = temp->next;

            i = 1;
            while (i < pos - 1)
            {
               temp = temp->next;
               temp2 = temp->next;
               i++;
            }

            if (temp2->next == NULL)
            {
               deleteEnd();
            }
            else
            {
               temp->next = temp2->next;
               temp2->next->prev = temp;
               printf("\n%d is now deleted.\n", *temp2);
               free(temp2);
            }
         }
      }
   }
}

void traversal()
{
   if (head == NULL)
   {
      printf("\nLinked List is Empty.\n");
   }
   else
   {
      temp = head;
      while (temp->next != NULL)
      {
         printf("%d\n", *temp);
         temp = temp->next;
      }
      printf("%d\n", *temp);
   }
}

void reverseTraversal()
{
   if (head == NULL)
   {
      printf("\nLinked List is Empty.\n");
   }
   else
   {
      temp = head;
      while (temp->next != NULL)
      {
         temp = temp->next;
      }

      while (temp->prev != NULL)
      {
         printf("%d\n", *temp);
         temp = temp->prev;
      }
      printf("%d\n", *temp);
   }
}