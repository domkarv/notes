#include <iostream>
using namespace std;
int main()
{
   int num;
   cin >> num;
   int count = 0;

   // Approch 1 =>
   // (num & 1) will give which bit is last bit.
   // (num >> 1) will left shift that bit after count++.
   // while (num > 0)
   // {
   //    if ((num & 1) == 1)
   //    {
   //       count++;
   //    }
   //    num = num >> 1;
   // }

   // Approch 2 =>
   // while (num > 0)
   // {
   //    if (num % 2 == 1)
   //    {
   //       count++;
   //    }
   //    num /= 2;
   // }

   // Approch 3 =>
   // (num & (num - 1)) => this operation will done as many times as no. of 1's.
   while (num != 0)
   {
      num = num & (num - 1);
      count++;
   }

   cout << count;
   return 0;
}