#include <iostream>
#include <deque> // header file for STL deque(double ended queue)

// STL deque are implemented using static arrays

using namespace std;
int main()
{
   // we can access deque elements easily by 'd[i]'-> i= 0,1,2,3,...,d.size()
   // we can overwrite this values simply by
   // cin >> d[i]; // -> i= 0,1,2,3,...,d.size()

   // // Note => the brackets used here are round brackets '()' for initialization.
   // deque<int> d(4); // This gives a deque of size 4 with all elements being the value of '0'.
   // for (int i = 0; i < 4; i++)
   // {
   //    cout << d[i] << " ";
   // }
   // deque<int> d(4, 100); // This gives a deque of size 4 with all elements being the value of '100'.
   // for (int i = 0; i < 4; i++)
   // {
   //    cout << d[i] << " ";
   // }

   deque<int> d;
   d.push_front(98);    // push elements in deque
   d.emplace_front(35); // emplace_front is faster than push_front
   d.push_back(45);
   d.emplace_back(53); // emplace_back is faster than push_back
   d.emplace_back(72);
   d.emplace_back(13);
   for (int i : d)
   {
      cout << i << " ";
   }
   cout << endl;

   /* ------------------------------------------------------ */
   /* rest functions are same as vector_(Refer-> vector.cpp) */
   /*  begin, end, clear, insert, size , swap, emplace, etc  */
   /* ------------------------------------------------------ */

   // d.pop_front(); // pops the element from deque
   // d.pop_back();
   // for (int i : d)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;

   // cout << "Size of deque: " << d.size() << endl;
   // cout << "Element at 3rd position: " << d.at(2) << endl; // returns element at index.
   // cout << "Is deque is empty: " << d.empty() << endl;    // returns true/false (1/0).
   // cout << "Element at front: " << d.front() << endl;
   // cout << "Element at end: " << d.back() << endl;

   // d.clear(); // This is used to clear the size(all elements) of deque
   // cout << d.size() << endl;

   // d.erase(d.begin(), d.begin() + 3); // used to erase element from x to y position
   // // d.erase(d.begin(), d.end() - 2);
   // for (int i : d)
   // {
   //    cout << i << " ";
   // }

   // // d.begin() & d.end() functions pointing to first and last element of deque,
   // // it will never return any value as it is pointer to value it will return address.
   // cout << "Element at front: " << *d.begin() << endl;
   // cout << "Element at end: " << *(d.end() - 1) << endl;
   // cout << "Element at end: " << *d.end() << endl;
   // // d.end() is the address of element store at that address
   // // d.end()-1 is the address of element store at previous address of d.end()
   // // i.e., d.end()-1 is the address of last element of deque

   // cout << "Printing Elemets_" << endl;
   // // (1) (2) (3) all are different

   // // (1) = >
   // for (int i = 0; i < d.size(); i++)
   // {
   //    cout << d[i] << " ";
   // }
   // // (2) => data type used here is auto as this is pointer
   // for (auto i = d.begin(); i < d.end(); i++)
   // {
   //    cout << *i << " ";
   // }
   // // (3) => data type used here is auto as this is pointer
   // for (auto i = d.begin(); i <= d.end(); i++)
   // {
   //    cout << *i << " ";
   // }

   // // (1)
   // deque<int> a(d);
   // int j = 0;
   // for (int i : a)
   // {
   //    cout << "a[" << j << "]: " << i << endl;
   //    j++;
   // }

   // // (2)
   // deque<int> x(4);
   // // deque<int> x(d.size());
   // copy(d.begin(), d.end(), x.begin()); // This is another way to copy deque.
   // for (int i : x)
   // {
   //    cout << i << " ";
   // }

   // Swapping
   // deque<int> d2 = {9, 6, 8, 2};
   // d.swap(d2); // Both are same
   // // d2.swap(d);

   // cout << "d:" << endl;
   // for (int i : d)
   // {
   //    cout << i << " ";
   // }
   // cout << endl;
   // cout << "d2:" << endl;
   // for (int i : d2)
   // {
   //    cout << i << " ";
   // }

   // insert at position
   deque<int>::iterator it = d.begin() + 1;
   d.emplace(it, 100);
   for (int i : d)
   {
      cout << i << " ";
   }
   cout << endl;

   return 0;
}