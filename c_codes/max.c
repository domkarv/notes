#include <stdio.h>
void main()
{
   int x, y;
   scanf("%d%d", &x, &y);
   (x > y) ? (printf("%d is greater", x)) : (printf("%d is greater", y));
}