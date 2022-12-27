// testcase
// 5
// 5 6 9 8 8

#include <iostream>
#include <cmath>
using namespace std;

int main()
{
   int x;
   int arr[100];
   cin >> x;
   for (int i = 0; i < x; i++)
   {
      cin >> arr[i];
   }

   // Approch 1 =>
   // for (int i = 1; i < x; i++)
   // {
   //    int numDups = 0;
   //    for (int j = 0; j < i; j++)
   //    {
   //       if (arr[i] == arr[j])
   //       {
   //          numDups++;
   //       }
   //    }
   //    if (numDups == 1)
   //    {
   //       cout << arr[i] << " ";
   //    }
   // }
   // cout << endl;

   // Approch 2 => Not Working
   int ans = 0;
   for (int i = 0; i < x; i++)
   {
      ans = ans ^ arr[i];
   }

   for (int i = 1; i < x; i++)
   {
      ans = ans ^ i;
   }
   cout << ans;

   return 0;
}