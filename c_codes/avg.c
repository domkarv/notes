#include <stdio.h>
void main()
{
    int a, b, c, avg;

    printf("\nEnter a = ");
    scanf("%d", &a);

    printf("\nEnter b = ");
    scanf("%d", &b);

    printf("\nEnter c = ");
    scanf("%d", &c);
    
    avg = (a + b + c) / 3;

    printf("\nAverage = %d", avg);
}