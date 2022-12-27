#include <iostream>
#include <cmath>
using namespace std;

int main()
{
   long long int n;
   cin >> n;
   unsigned long long int i = 0, ans = 0;

   /* 1 */
   // Decimal to Binary
   // if integer is negative.
   if (n < 0)
   {
      n = pow(2, 16) + n;
      // cout << n << endl;
   }
   // (-n = 2^16 - n) => which is positive integer
   // for integer of 16 bits(2 bytes). We can't store more than 16 bits.
   // (2^16 = 65536)
   while (n > 0)
   {
      int lastBit = n & 1;
      double power = pow(10, i);
      ans = (power * lastBit) + ans;
      n = n >> 1;
      i++;
   }

   /* 2 */
   // Binary to Deciaml
   // while (n > 0)
   // {
   //    ans = ((n % 10) * pow(2, i)) + ans;
   //    n /= 10;
   //    i++;
   // }

   cout << ans;

   return 0;
}