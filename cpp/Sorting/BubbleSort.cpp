#include <bits/stdc++.h>
using namespace std;

int main()
{
   vector<int> arr = {9, 8, 7, 6, 5, 4, 3, 2, 1};
   int n = arr.size();
   bool swapped = false;

   // bubble sort
   int i;
   for (i = 1; i < n; i++)
   {
      for (int j = 0; j < n - i; j++)
      {
         if (arr[j] > arr[j + 1])
         {
            // swap
            swap(arr[j], arr[j + 1]);
            swapped = true;
         }
      }
      // optimizing code =>
      // With this optimization, time complexity of this code will
      // decrease from 'O(n^2)' to 'O(n)'.
      // This optimization will help when array is already sorted
      // or will sort in 2-3 steps.

      // If array is already sorted then "swapped = false;" will remain as it is,
      // and help to break out of outer loop and whole loop will run for only one time
      // i.e., for i=0.

      // Similarly if array will sort in 2 steps then loop will run for i=0 and i=1
      // and will break after this.

      // https://youtu.be/zOhUavxlzw4?t=1719
      if (swapped == false)
         break;

      // if swapped hitted the true value then again set it to false.
      swapped = false;
      // to see the effect of above line of code, comment it
      // and notice the value of 'Steps' i.e, 'i'.
   }
   cout << "Steps: " << i << endl;

   for (i = 0; i < n; i++)
      cout << arr[i] << " ";

   return 0;
}