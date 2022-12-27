#include <stdio.h>
#include <conio.h>
void main()
{
    int r1, c1, r2, c2, c, d, k, sum = 0;
    int first[10][10], second[10][10], multiply[10][10];
    printf("Enter number of rows and columns of first matrix\n");
    scanf("%d%d", &r1, &c1);
    printf("Enter number of rows and columns of second matrix\n");
    scanf("%d%d", &r2, &c2);
    if (c1 != r2)
    {
        printf("The multiplication isn't possible.\n");
    }
    else
    {
        printf("Enter elements of first matrix\n");
        for (c = 0; c < r1; c++)
        {
            for (d = 0; d < c1; d++)
            {
                scanf("%d", &first[c][d]);
            }
        }
        printf("Enter elements of second matrix\n");
        for (c = 0; c < r2; c++)
        {
            for (d = 0; d < c2; d++)
            {
                scanf("%d", &second[c][d]);
            }
        }
        for (c = 0; c < r1; c++)
        {
            for (d = 0; d < c2; d++)
            {
                for (k = 0; k < r2; k++)
                {
                    sum = sum + first[c][k] * second[k][d];
                }
                multiply[c][d] = sum;
                sum = 0;
            }
        }
        printf("First Matrix is : \n");
        for (int a = 0; a < r1; a++)
        {
            for (int b = 0; b < c1; b++)
            {
                printf("%d ", first[a][b]);
                if (b == (c1 - 1))
                {
                    printf("\n");
                }
            }
        }
        printf("Second Matrix is : \n");
        for (int a = 0; a < r2; a++)
        {
            for (int b = 0; b < c2; b++)
            {
                printf("%d ", second[a][b]);
                if (b == (c2 - 1))
                {
                    printf("\n");
                }
            }
        }
        printf("Product of the matrices\n");
        for (int a = 0; a < r1; a++)
        {
            for (int b = 0; b < c2; b++)
            {
                printf("%d ", multiply[a][b]);
                if (b == (c2 - 1))
                {
                    printf("\n");
                }
            }
        }
    }
}