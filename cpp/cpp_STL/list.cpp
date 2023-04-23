#include <iostream>
#include <list> // header file for STL list

// STL lists are implemented using doubly linked lists

using namespace std;
int main()
{
   // In list direct access of element is not possible like vector or deque

   // Note => the brackets used here are round brackets '()' for initialization.
   // list<int> l(4); // This gives a list of size 4 with all elements being the value of '0'.
   // for (int i : l)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;
   // list<int> l(4, 100); // This gives a list of size 4 with all elements being the value of '100'.
   // for (int i : l)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   list<int> l;
   l.push_front(64);
   l.emplace_front(14); // emplace_front is faster than push_front
   l.push_back(56);
   l.emplace_back(16); // emplace_back is faster than push_back
   // l.pop_back();
   // l.pop_front();
   for (int i : l)
   {
      cout << i << " ";
   }
   cout << endl;

   /* ------------------------------------------------------ */
   /* rest functions are same as vector_(Refer-> vector.cpp) */
   /*  begin, end, clear, insert, size , swap, emplace, etc  */
   /* ------------------------------------------------------ */

   // cout << "Size of list: " << l.size() << endl;
   // cout << "Is list is empty: " << l.empty() << endl; // returns true/false (1/0).
   // cout << "Element at front: " << l.front() << endl;
   // cout << "Element at end: " << l.back() << endl;

   // l.clear(); // This is used to clear the size(all elements) of list
   // cout << l.size() << endl;

   // // (1)
   // list<int> a(l);
   // int j = 0;
   // for (int i : a)
   // {
   //    cout << "a[" << j << "]: " << i << endl;
   //    j++;
   // }

   // // (2)
   // list<int> x(4);
   // // list<int> x(l.size());
   // copy(l.begin(), l.end(), x.begin()); // This is another way to copy list.
   // for (int i : x)
   // {
   //    cout << i << " ";
   // }

   // Swapping
   // list<int> l2 = {9, 6, 8, 2};
   // l.swap(l2); // Both are same
   // // l2.swap(l);

   // cout << "l:" << endl;
   // for (int i : l)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;
   // cout << "l2:" << endl;
   // for (int i : l2)
   // {
   //    cout << i << " ";
   // }

   // insert at position
   list<int>::iterator itr = l.begin();
   itr++;
   itr++;
   l.emplace(itr, 100);
   for (int i : l)
   {
      cout << i << " ";
   }
   cout << endl;

   return 0;
}