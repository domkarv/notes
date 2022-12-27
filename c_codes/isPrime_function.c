#include <stdio.h>

void isPrime(int num)
{
    int i;
    if (num < 1)
    {
        printf("Please, Enter the number greater than 1.");
    }
    else if (num == 1)
    {
        printf("1 is nor Prime neither Composite.");
    }
    else if (num > 1)
    {
        for (i = 2; i < num; i++)
        {
            if (num % i == 0)
            {
                printf("Not Prime");
                break;
            }
        }
        if (num == i)
        {
            printf("Prime");
        }
    }
}

int main()
{

    int n;
    scanf("%d", &n);
    isPrime(n);

    return 0;
}