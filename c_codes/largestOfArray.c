#include <stdio.h>
void main()
{
   int num;
   int arr[25];
   printf("Please enter total no. of elements[1 to 25]: ");
   scanf("%d", &num);
   for (int i = 0; i < num; ++i)
   {
      scanf("%d", &arr[i]);
   }
   for (int i = 0; i < num; ++i)
   {
      if (arr[0] < arr[i])
      {
         arr[0] = arr[i];
      }
   }
   printf("Largest element of the array is: %d", arr[0]);
}