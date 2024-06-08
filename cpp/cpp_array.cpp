#include <bits/stdc++.h>
using namespace std;

void anotherArray(int arr[], int num)
{
   arr[2] = 52;
   arr[1] = 7;
   num = 10;
}

int main()
{
   int arr[3];
   int num = 5;

   // this will give size of array.
   int sizeOfArray = sizeof(arr) / sizeof(arr[0]);
   // we can find string length using str.length()
   // but we can't do it with array
   // bcoz there is no function like arr.length().

   // this will fill array with same value.
   fill(arr, arr + sizeOfArray, 42);

   // when we are passing array to function
   // we are actually passing address of array to function
   anotherArray(arr, num);

   // printing array
   for (int i = 0; i < sizeOfArray; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
   cout << num << endl;

   // as you can see above if you pass the variable to function and
   // changes it's value
   // it will never changes it's value in main function.

   // But if you pass the array to function and
   // changes it's value
   // it will affect it's value in main function.

   // this happens bcoz when we are passing array to function
   // it passes it's address to that function

   // But when we are passing variable to function
   // it is creating copy of that variable.

   // Reversing array
   for (int i = 0; i < sizeOfArray / 2; i++)
   {
      swap(arr[i], arr[sizeOfArray - i - 1]);
   }

   // this will sort your array in increasing order.
   sort(arr, arr + sizeOfArray);

   // this will sort your array in decreasing order.
   // sort(arr, arr + sizeOfArray, greater<int>());

   // printing array
   for (int i = 0; i < sizeOfArray; i++)
   {
      cout << arr[i] << " ";
   }

   return 0;
}
