#include <bits/stdc++.h>
using namespace std;

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

int binarySearch(vector<int> arr, int s, int e, int key)
{
   while (s <= e)
   {
      int m = s + (e - s) / 2;
      if (arr[m] == key)
      {
         return m;
      }
      else if (arr[m] > key)
      {
         e = m - 1;
      }
      else if (arr[m] < key)
      {
         s = m + 1;
      }
   }
   return -1;
}

int main()
{
   vector<int> arr = {7, 8, 1, 2, 5};
   int k = 2;

   int p = getPivot(arr);
   int ans = 0;
   if (arr[0] <= k)
   {
      ans = binarySearch(arr, 0, p, k);
   }
   else if (arr[0] > k)
   {
      ans = binarySearch(arr, p, arr.size() - 1, k);
   }
   cout << ans;

   return 0;
}