#include <iostream>
#include <cmath>
using namespace std;

bool isPowerOfTwo(int n)
{
   for (int i = 0; i < 31; i++)
   {
      double x = pow(2, i);
      if (n == x)
      {
         return true;
      }
   }
   return false;
}

int main()
{
   int num;
   cin >> num;

   // Approch 1 =>
   // if num is power of 2 then (num & (num-1)) = 0.
   // if (num == 0)
   // {
   //    cout << "Number should be greater than 1";
   // }
   // else if ((num & (num - 1)) == 0)
   // {
   //    cout << num << " is power of 2.";
   // }
   // else
   // {
   //    cout << num << " is not power of 2.";
   // }

   // Approch 2 =>
   // Every power of 2 has only 1 bit of 1.
   // So if value of i goes more than 1 then it means num is not power of 2.
   // int i = 0;
   // while (num != 0)
   // {
   //    if ((num & 1) == 1)
   //    {
   //       i++;
   //    }
   //    num = num >> 1;
   // }
   // if (i == 1)
   // {
   //    cout << num << " is power of 2.";
   // }
   // else
   // {
   //    cout << num << " is not power of 2.";
   // }

   // Approch 3 =>
   cout << isPowerOfTwo(num);
   // if yes returns 1 otherwise 0.

   return 0;
}