#include <stdio.h>
#include <stdlib.h>

struct node
{
   int data;
   struct node *link;
} *head = NULL, *newNode, *temp = NULL;

void insertAtFirst();
void insertAtEnd();
void insertAtPosition();
void deleteFirst();
void deleteEnd();
void deletePosition();
void traversal();

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
      case 0:
         exit(0);
         break;
      default:
         printf("\nPlease enter valid choice.\n");
      }
   } while (1);

   return 0;
}

void insertAtFirst()
{
   newNode = (struct node *)malloc(sizeof(struct node));

   printf("\nEnter data: ");
   scanf("%d", &newNode->data);

   if (head == NULL)
   {
      head = newNode;
      newNode->link = head;
   }
   else
   {
      temp = head;
      while (temp->link != head)
      {
         temp = temp->link;
      }
      newNode->link = head;
      head = newNode;
      temp->link = head;
   }
}

void insertAtEnd()
{
   if (head == NULL)
   {
      insertAtFirst();
   }
   else
   {
      newNode = (struct node *)malloc(sizeof(struct node));

      printf("\nEnter data: ");
      scanf("%d", &newNode->data);

      temp = head;
      while (temp->link != head)
      {
         temp = temp->link;
      }
      temp->link = newNode;
      newNode->link = head;
   }
}

void insertAtPosition()
{
   if (head == NULL)
   {
      insertAtFirst();
   }
   else
   {
      int i, pos;

      printf("Enter position: ");
      scanf("%d", &pos);

      if (pos < 1)
      {
         printf("\nEnter correct Position.\n");
         insertAtPosition();
      }
      else if (pos == 1)
      {
         insertAtFirst();
      }
      else
      {
         i = 1;
         temp = head;
         while (temp->link != head)
         {
            temp = temp->link;
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
            temp = head;
            while (i < pos - 1)
            {
               temp = temp->link;
               i++;
            }

            if (temp->link == head)
            {
               insertAtEnd();
            }
            else
            {
               newNode = (struct node *)malloc(sizeof(struct node));
               printf("\nEnter data: ");
               scanf("%d", &newNode->data);

               newNode->link = temp->link;
               temp->link = newNode;
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
   else if (head->link == head)
   {
      printf("\n%d is now deleted.\n", *head);
      head = NULL;
   }
   else
   {
      struct node *temp2;
      temp = head;
      while (temp->link != head)
      {
         temp = temp->link;
      }
      temp2 = head;
      head = head->link;
      temp->link = head;
      printf("\n%d is now deleted.\n", *temp2);
      free(temp2);
   }
}

void deleteEnd()
{
   if (head == NULL)
   {
      printf("\nLinked List is Empty.\n");
   }
   else if (head->link == head)
   {
      deleteFirst();
   }
   else
   {
      struct node *temp2;
      temp = head;
      temp2 = temp->link;

      while (temp2->link != head)
      {
         temp = temp->link;
         temp2 = temp->link;
      }
      temp->link = head;
      printf("\n%d is now deleted.\n", *temp2);
      free(temp2);
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

      if (pos < 1)
      {
         printf("Enter correct Position.");
         deletePosition();
      }
      else if (pos == 1)
      {
         deleteFirst();
      }
      else
      {
         i = 1;
         temp = head;
         while (temp->link != head)
         {
            temp = temp->link;
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
            temp2 = temp->link;

            i = 1;
            while (i < pos - 1)
            {
               temp = temp->link;
               temp2 = temp->link;
               i++;
            }

            if (temp2->link == head)
            {
               deleteEnd();
            }
            else
            {
               temp->link = temp2->link;
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
      while (temp->link != head)
      {
         printf("%d\n", temp->data);
         temp = temp->link;
      }
      printf("%d\n", temp->data);
   }
}