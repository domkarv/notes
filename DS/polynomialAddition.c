#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct Node
{
    int coef;
    int pow;
    struct Node *link;
};

// function declaration
struct Node *createPolynomial();
struct Node *addPolynomials(struct Node *poly1, struct Node *poly2);
void display(struct Node *temp);

void main()
{
    printf("\nEnter 1st polynomial_\n");
    struct Node *poly1 = createPolynomial();

    printf("\nEnter 2nd polynomial_\n");
    struct Node *poly2 = createPolynomial();

    printf("\n1st Polynomial_\n");
    display(poly1);

    printf("\n2nd Polynomial_\n");
    display(poly2);

    printf("\nAddition of polynomial is_\n");
    struct Node *polyResult = addPolynomials(poly1, poly2);
    display(polyResult);
}

// function definations
struct Node *createPolynomial()
{
    struct Node *head = NULL;
    struct Node *temp = NULL;
    struct Node *newNode = NULL;
    bool flag = false;
    do
    {
        newNode = (struct Node *)malloc(sizeof(struct Node));
        newNode->link = NULL;

        scanf("%d", &newNode->coef);
        scanf("%d", &newNode->pow);

        if (head == NULL)
        {
            head = newNode;
            temp = newNode;
        }
        else
        {
            temp->link = newNode;
            temp = newNode;
        }

        if (newNode->coef == 0 && newNode->pow == 0)
            flag = true;

    } while (flag == false);
    return head;
}

struct Node *addPolynomials(struct Node *poly1, struct Node *poly2)
{
    struct Node *head = NULL;
    struct Node *newNode = NULL;
    struct Node *temp;

    while (poly1 != NULL && poly2 != NULL)
    {
        newNode = (struct Node *)malloc(sizeof(struct Node));
        newNode->link = NULL;

        if (poly1->pow == poly2->pow)
        {
            newNode->coef = poly1->coef + poly2->coef;
            newNode->pow = poly1->pow;

            poly1 = poly1->link;
            poly2 = poly2->link;
        }
        else if (poly1->pow > poly2->pow)
        {
            newNode->coef = poly1->coef;
            newNode->pow = poly1->pow;

            poly1 = poly1->link;
        }
        else if (poly2->pow > poly1->pow)
        {
            newNode->coef = poly2->coef;
            newNode->pow = poly2->pow;

            poly2 = poly2->link;
        }

        if (head == NULL)
        {
            head = newNode;
            temp = newNode;
        }
        else
        {
            temp->link = newNode;
            temp = newNode;
        }
    }
    return head;
}

void display(struct Node *temp)
{
    while (temp->coef != 0)
    {
        if (temp->pow == 0)
        {
            printf("%d", temp->coef);
            temp = temp->link;
        }
        else
        {
            printf("%dx^%d + ", temp->coef, temp->pow);
            temp = temp->link;
        }
    }
    printf("\n");
}

// void display(struct Node *temp)
// {
//     struct Node *temp2 = temp;
//     while (temp2->coef != 0)
//     {
//         if (temp2->pow == 0)
//         {
//             if (temp2 == temp)
//             {
//                 printf("%d", temp2->coef);
//                 temp2 = temp2->link;
//             }
//             else
//             {
//                 printf(" + %d", temp2->coef);
//                 temp2 = temp2->link;
//             }
//         }
//         else
//         {
//             if (temp2 == temp)
//             {
//                 printf("%dx^%d", temp2->coef, temp2->pow);
//                 temp2 = temp2->link;
//             }
//             else
//             {
//                 printf(" + %dx^%d", temp2->coef, temp2->pow);
//                 temp2 = temp2->link;
//             }
//         }
//     }
//     printf("\n");
// }
