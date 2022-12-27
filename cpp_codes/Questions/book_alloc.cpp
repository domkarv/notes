#include <bits/stdc++.h>
using namespace std;

bool isPossible(vector<int> arr, int n, int m, int mid)
{
   int studentCount = 1;
   int pageSum = 0;

   for (int i = 0; i < n; i++)
   {
      if (pageSum + arr[i] <= mid)
      {
         pageSum += arr[i];
      }
      else
      {
         studentCount++;
         pageSum = arr[i];

         if (studentCount > m || arr[i] > mid)
         {
            // return false;
            break;
         }
      }
   }

   // return true;
   return studentCount <= m;
   // if (studentCount <= m) is true function will return true, otherwise false.
   // In return statement condition should be opposite of false condition.
}

int allocateBooks(vector<int> arr, int n, int m)
{
   int temp = arr[0];
   for (int i = 0; i < arr.size(); i++)
   {
      if (temp < arr[i])
      {
         temp = arr[i];
      }
   }
   int s = temp;
   int sum = 0;

   for (int i = 0; i < n; i++)
   {
      sum += arr[i];
   }
   int e = sum;
   int ans = 0;

   while (s <= e)
   {
      int mid = s + ((e - s) >> 1);

      if (isPossible(arr, n, m, mid))
      {
         ans = mid;
         e = mid - 1;
      }
      else
      {
         s = mid + 1;
      }
   }
   return ans;
}

int main()
{
   vector<int> arr = {25, 46, 28, 49, 24};
   int noOfBooks = 5;
   int noOfStud = 4;
   // vector<int> arr = {10,20,30,40};
   // int noOfBooks = 4;
   // int noOfStud = 2;
   cout << allocateBooks(arr, noOfBooks, noOfStud);

   return 0;
}