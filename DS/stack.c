#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int N = 5, top = -1, stack[5];

// Declaring functions
bool isEmpty();
bool isFull();
void push();
void pop();
void peek();
void search();
void display();

void main()
{
    int n;
    char conti;

    do
    {
        printf("\nEnter 1 for PUSH.\n");
        printf("Enter 2 for POP.\n");
        printf("Enter 3 for PEEK.\n");
        printf("Enter 4 for SEARCH.\n");
        printf("Enter 5 for DISPLAY.\n");
        printf("Enter 0 to EXIT.\n");

        printf("Enter your command number: ");
        scanf("%d", &n);
        printf("\n");

        switch (n)
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
            search();
            break;

        case 5:
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
bool isFull() { return (top == N - 1); }
bool isEmpty() { return (top == -1); }

void push()
{
    if (isFull())
        printf("Stack is FULL.\n");
    else
    {
        printf("Enter a element : ");
        scanf("%d", &stack[++top]);
    }
}

void pop()
{
    if (isEmpty())
        printf("Stack is EMPTY.\n");
    else
        printf("%d is poped.\n", stack[top--]);
}

void peek()
{
    if (isEmpty())
        printf("Stack is EMPTY.\n");
    else
        printf("Element at top is %d.\n", stack[top]);
}

void search()
{
    int a;
    bool temp = false;

    if (isEmpty())
        printf("Stack is EMPTY.\n");
    else
    {
        printf("Enter a element you are searching for: ");
        scanf("%d", &a);

        for (int i = 0; i < top; i++)
        {
            if (stack[i] == a)
            {
                temp = true;
                break;
            }
        }

        if (temp)
            printf("Yes! it's in Stack.\n");
        else
            printf("No! it's not in Stack.\n");
    }
}

void display()
{
    if (isEmpty())
        printf("Stack is EMPTY.\n");
    else
    {
        printf("Elements in stack are_\n");
        for (int i = top; i >= 0; i--)
            printf("%d\n", stack[i]);
    }
}