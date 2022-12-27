#include <iostream>
#include <array> // header file for STL array

// STL arrays are implemented using static arrays

using namespace std;
int main()
{
   // noraml array -->>
   // int arr[] = {23, 23, 4, 55, 6, 3, 56, 7};

   // STL array -->>
   array<int, 4> a;
   // array<int, 4> a = {0}; // we have created the array with '0' stored at every place
   // array<int, 4> a;
   // cout << "Enter " << a.size() << " elements_" << endl;
   // for (int i = 0; i < a.size(); i++)
   // {
   //    cin >> a[i];
   // }

   cout << "Size of a: " << a.size() << endl;              // size of array
   cout << "Element at 3rd position: " << a.at(2) << endl; // returns element at index.
   cout << "Is array is empty: " << a.empty() << endl;     // returns true/false (1/0).
   cout << "Element at front: " << a.front() << endl;
   cout << "Element at end: " << a.back() << endl;

   // a.begin() & a.end() functions pointing to first and last element of STL array,
   // it will never return any value as it is pointer to value it will return address.
   cout << "Element at front: " << *a.begin() << endl;
   cout << "Element at end: " << *(a.end() - 1) << endl;
   cout << "Element at end: " << *a.end() << endl;
   // a.end() is the address of element store at that address
   // a.end()-1 is the address of element store at previous address of a.end()
   // i.e., a.end()-1 is the address of last element of array

   cout << "Printing Elemets_" << endl;
   // (1) (2) (3) all are different

   // (1) =>
   // for (int i = 0; i < a.size(); i++)
   // {
   //    cout << a[i] << " ";
   // }
   // (2) => data type used here is auto as this is pointer
   // for (auto i = a.begin(); i < a.end(); i++)
   // {
   //    cout << *i << " ";
   //    // cout << i << " ";
   // }
   // (3) => data type used here is auto as this is pointer
   for (auto i = a.begin(); i <= a.end(); i++)
   {
      cout << *i << " ";
      // cout << i << " ";
   }
   cout << endl;

   a.fill(5); // this fills the array with same value

   // Swapping
   array<int, 4> a2 = {9, 6, 8, 2};
   a.swap(a2); // Both are same
   // d2.swap(d);

   cout << "a:" << endl;
   for (int i : a)
   {
      cout << i << " ";
   }
   cout << endl;
   cout << "a2:" << endl;
   for (int i : a2)
   {
      cout << i << " ";
   }

   return 0;
}