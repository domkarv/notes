#include <bits/stdc++.h>
using namespace std;

// PIVOT INDEX => index at which rotating array start
//  In example below Pivot Index is 3
// bcoz rotating array start at index 3
// i.e., from number 2

int getPivot(vector<int> arr)
{
   int s = 0;
   int e = arr.size() - 1;

   while (s < e)
   {
      int m = s + (e - s) / 2;
      if (arr[m] >= arr[0])
      {
         s = m + 1;
      }
      else
      {
         e = m;
      }
   }
   return s;
}

int main()
{
   vector<int> arr = {6, 8, 9, 2, 4, 5};
   int p = getPivot(arr);
   cout << p << endl;

   return 0;
}