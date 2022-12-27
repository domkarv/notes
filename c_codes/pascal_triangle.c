#include <stdio.h>

int facto(int n);
int comb(int n, int r);

void main()
{
   int n;
   scanf("%d", &n);
   for (int i = 0; i < n; i++)
   {
      for (int j = 0; j < (n - i - 1); j++)
      {
         printf("  ");
      }
      for (int j = 0; j <= i; j++)
      {
         if (i == j || j == 0)
         {
            printf(" 1  ");
         }
         else
         {
            printf("%2d  ", comb(i, j));
         }
      }
      printf("\n");
   }
}

int facto(int n)
{
   if (n == 1 || n == 0)
   {
      return 1;
   }
   else
   {
      return (n * facto(n - 1));
   }
}

int comb(int n, int r)
{
   return (facto(n) / (facto(r) * facto(n - r)));
}