#include <bits/stdc++.h>
using namespace std;

long long int getSqrt(long long int num)
{
   long long int e = 1 + num / 4;
   long long int s = 1, ans;

   if (num <= 0)
   {
      return 0;
   }

   while (s <= e)
   {
      long long int m = (s + e) / 2;

      if (m * m == num)
      {
         return m;
      }
      else if (m * m > num)
      {
         e = m - 1;
      }
      else if (m * m < num)
      {
         ans = m;
         s = m + 1;
      }
   }
   return ans;
}

double morePrecise(int num)
{
   double n = getSqrt(num);
   double factor = 1;

   for (int i = 0; i < 5; i++)
   {
      factor = factor / 10;
      for (double j = n; j * j < num; j = j + factor)
      {
         n = j;
      }
   }
   return n;
}

int main()
{
   long long int num;
   cin >> num;
   cout << morePrecise(num);
   // cout << sqrt(604937061729);

   return 0;
}