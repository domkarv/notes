#include <bits/stdc++.h>
using namespace std;
int main()
{
   int n1, n2;
   cin >> n1 >> n2;

   while (n1 != n2)
   {
      if (n1 > n2)
      {
         n1 = n1 - n2;
      }
      else
      {
         n2 = n2 - n1;
      }
   }

   // int x = __gcd(n1, n2);

   // n1=n2
   cout << "GCD is : " << n1;

   return 0;
}