#include <bits/stdc++.h>
using namespace std;

int main()
{
   vector<int> arr = {5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 45};
   int x = 0;
   int size = arr.size();

   for (int i = 0; i < size; i++)
   {
      for (int j = i + 1; j < size; j++)
      {
         if (arr[i] == arr[j])
         {
            for (int k = j; k < size - 1; k++)
            {
               swap(arr[k + 1], arr[k]);
            }
            size--;
            x++;
         }
      }
   }

   cout << arr.size() - x << endl;

   for (int i = 0; i < arr.size() - x; i++)
   {
      cout << arr[i] << " ";
   }

   return 0;
}