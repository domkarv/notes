#include <bits/stdc++.h>
using namespace std;

// This code gives TLE (Time Limit Exceeded)
// as it uses recursion

int getElement(vector<int> arr, int k, int s, int e)
{
   int m = s + (e - s) / 2;

   if (s > e)
      return -1;
   else if (arr[m] == k)
      return m;
   else if (arr[s] <= arr[m])                 // (1) this checks whether array is in ascending order till middle element
   {                                          // e.g.,  2, 3, 4, 0, 1
      if (arr[s] <= k && k <= arr[m])         // this checks whether element is between s & m
         return getElement(arr, k, s, m - 1); // this means if above statement is true then shift e to m - 1
      else                                    // this means element never lies between s & m (OR lies between m & e)
         return getElement(arr, k, m + 1, e); // this means if element never lies between s & m then shift s to m + 1
   }
   else if (arr[m] <= k && k <= arr[e])    // (2) this means element is between m & e
      return getElement(arr, k, m + 1, e); // this means if element lies between m & e then shift s to m + 1
   else                                    // (3)
      return getElement(arr, k, s, m - 1);
   // (3)=>
   // Let we have to find the position of '8' in 7, 8, 1, 2, 4, 5, 6
   // If (1)st condition is false=> 1st part is not in monotonic order (i.e., from s to m)
   // i.e., it is breaking at some point, like=> 7, 8, 1, 2, 4, 5, 6
   // that means 2nd part should be in monotonic order as this is sorted rotated array.
   // So the (2)nd condition check whether element lies between 2nd part of array (i.e., from m to e)
   // if both (1)st & (2)nd is false then (3)rd condition shifts e to m-1
}

/* NOTE */
// (1) Array is sorted & rotated
// (2) It is easy to check whether element is present in array or not
// when array is in monotonic order i.e., in increasing or decreasing order
// by applying less than or greater than conditions at start & end point of array

int main()
{
   vector<int> arr = {7, 8, 1, 2, 4, 5, 6};
   int k = 8;

   cout << getElement(arr, k, 0, arr.size() - 1);

   return 0;
}