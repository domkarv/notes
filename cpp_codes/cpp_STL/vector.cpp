#include <iostream>
#include <bits/stdc++.h>
#include <vector> // header file for vector

// STL vectors are implemented using static arrays
// But vectors are dynamic

/* "FOR VECTOR => CAPACITY AND SIZE ARE DIFFERENT" */
// Both of these differ bcoz after every insertion of extra element than previous capacity,
// the capacity of vector will becomes twice of previous capacity.

using namespace std;
int main()
{
   // we can access vector elements directly by 'v[i]'-> i= 0,1,2,3,...,v.size()
   // we can overwrite this values directly by
   // cin >> v[i]; // -> i= 0,1,2,3,...,v.size()

   // Note => the brackets used here are round brackets '()' for initialization.
   // vector<int> v(4); // This gives a vector of capacity 4 with all elements being the value of '0'.
   // for (int i = 0; i < 4; i++)
   // {
   //    cout << v[i] << " ";
   // }

   // vector<int> v(4, 100); // This gives a vector of capacity 4 with all elements being the value of '100'.
   // for (int i = 0; i < 4; i++)
   // {
   //    cout << v[i] << " ";
   // }

   vector<int> v;   // This gives a vector without any predefine capacity.
   v.push_back(33); // This function is used to push the value in vector.
   v.pop_back();    // This function is used to pop the value out of the vector.
   v.push_back(14);
   v.emplace_back(75); // emplace_back is faster than push_back
   v.emplace_back(96);
   v.emplace_back(53);
   v.emplace_back(46);
   // When we declare a vector without any predefine capacity,
   // then the size of that vector will be, number of elements pushed into it.

   // for (int i = 0; i < v.size(); i++)
   // {
   //    cout << v[i] << " ";
   // }
   // cout << endl;

   // we can access that elements easily by 'v[i]'-> i= 0,1,2,3,...
   // we can overwrite this values simply by
   // cin >> v[0];

   // // Note -->> v.capacity() & v.size() are not same.
   // // (1)
   // // v.capacity() gives the amount of total space that the vector has.
   // cout << "Capacity of Vector: " << v.capacity() << endl;
   // // (2)
   // // The size of a vector is the number of elements that it contains,
   // // which is directly controlled by how many elements you put into the vector.
   // cout << "Size of Vector: " << v.size() << endl;

   // Both of these differ bcoz after every insertion of extra element
   // the capacity of vector will becomes twice of previous capacity.

   // cout << "Element at 3rd position: " << v.at(2) << endl; // returns element at index.
   // cout << "Is vector is empty: " << v.empty() << endl;    // returns true/false (1/0).
   // cout << "Element at front: " << v.front() << endl;
   // cout << "Element at end: " << v.back() << endl;

   // // v.begin() & v.end() functions pointing to first and last element of vector,
   // // it will never return any value as it is pointer to value it will return address.
   // cout << "Element at front: " << *v.begin() << endl;
   // cout << "Element at end: " << *(v.end() - 1) << endl;
   // cout << "Element at end: " << *v.end() << endl;
   // // v.end() is the address of element store at that address
   // // v.end()-1 is the address of element store at previous address of v.end()
   // // i.e., In vector, v.end()-1 is the address of last element

   // cout << "Printing Elemets_" << endl;
   // // (1) (2) (3) all are different
   // // (1) =>
   // for (int i = 0; i < v.size(); i++)
   // {
   //    cout << v[i] << " ";
   // }
   // // (2) => data type used here is auto, as this is pointer
   // // auto will automatically assign its data type to it
   // for (auto i = v.begin(); i < v.end(); i++)
   // {
   //    cout << *i << " ";
   //    // cout << i << " ";
   // }
   // // (3) => iterator(nothing but the pointer to the position) is used here
   // for (vector<int>::iterator i = v.begin(); i < v.end(); i++)
   // {
   //    cout << *i << " ";
   //    // cout << i << " ";
   // }
   // // (4) => data type used here is auto, as this is pointer
   // // auto will automatically assign its data type to it
   // for (auto i = v.begin(); i <= v.end(); i++)
   // {
   //    cout << *i << " ";
   //    // cout << i << " ";
   // }
   // // (5) => auto will automatically assign its data type to it
   // for (auto i : v)
   // {
   //    cout << i << " ";
   // }

   // v.clear(); // This is used to clear the size(all elements) of vector not capacity
   // cout << v.size() << endl;
   // cout << v.capacity() << endl;

   // v.erase(v.begin(), v.begin() + 3); // used to erase element from x to y position
   // v.erase(v.begin(), v.end() - 3);
   // v.erase(v.begin() + 3); // it will erase 4th element of vector
   // for (int i : v)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   // // (1) assigning one vector to another
   // vector<int> x(v); // This is how we can copy one vector to another.
   // for (int i : x)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   // // (2) assigning one vector to another
   // vector<int> a(5);
   // copy(v.begin(), v.end(), a.begin()); // This is another way to copy vector.
   // for (int i : a)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   // // (3) copying one vector into another vector
   // vector<int> v3 = {8, 5, 6};
   // v.insert(v.begin() + 1, v3.begin(), v3.end());
   // for (int i : v)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   /* Insertion */
   // // (1)
   // vector<int> v3 = {8, 5, 6};
   // // inserts elements from position you want, no of Elements you want to insert, element you want to insert
   // v3.insert(v3.begin() + 2, 5, 10);

   // // (2)
   // // inserts elements at position you want, element you want to insert
   // v3.insert(v3.begin() + 2, 10);
   // for (int i : v3)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   // (3)
   // insert at position u want, element you want to insert
   // vector<int>::iterator it = v.begin() + 2;
   // v.emplace(it, 100);
   // for (int i : v)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   /* Swapping */
   // vector<int> v2 = {9, 6, 8, 2};
   // v.swap(v2); // Both are same
   // // v2.swap(v);

   // cout << "v:" << endl;
   // for (int i : v)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;
   // cout << "v2:" << endl;
   // for (int i : v2)
   // {
   //    cout << i << " ";
   // }

   // this will reverse your array/vector
   reverse(v.begin(), v.end());
   for (int i : v)
   {
      cout << i << " ";
   }

   return 0;
}