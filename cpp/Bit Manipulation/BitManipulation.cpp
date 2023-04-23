
// (x+y)/2 is same as (x+y)>>1

#include <iostream>
#include <cmath>
using namespace std;

int main()
{
   int n, i;
   cin >> n >> i;

   // 1
   // Get bit
   // which bit is present at ith position(0/1).
   // int bitMask = (1 << i - 1) & n;
   // if (bitMask == 0)
   // {
   //    cout << 0;
   // }
   // else
   // {
   //    cout << 1;
   // }

   // 2
   // Set bit
   // set the bit at ith position to 1.
   // int bitMask = (1 << i - 1) | n;
   // cout << bitMask;

   // 3
   // Clear bit =>
   // if ith bit is 1, then set it to 0.
   int bitMask = ~(1 << i - 1) & n;
   cout << bitMask;

   // 4
   // update bit =>
   // if ith bit is 1, then set it to 0;
   // or if ith bit is 0, then set it to 1.
   // (use set bit operation to set 1 OR clear bit operation to set 0).
   // cout << "Enter 1 to set bit and 0 to clear bit: ";
   // int operation, bitMask;
   // cin >> operation;
   // if (operation == 1)
   // {
   //    bitMask = (1 << i - 1) | n;
   // }
   // else
   // {
   //    bitMask = ~(1 << i - 1) & n;
   // }
   // cout << bitMask;

   return 0;
}