#include <iostream>
#include <set>           // header file for STL set
#include <unordered_set> // header file for STL unordered set

// set is implemented using tree data structure

using namespace std;
int main()
{
   // set stores only unique elements in sorted(increasing) order, if some elements are repeating it will store it only one's.
   // In set direct access of element is not possible like vector or deque

   set<int> s = {49, 56, 4, 5, 86, 419, 15, 3, 63};
   unordered_set<int> us; /* stores only unique elements but not in sorted order
  upper_bound and lower_bound function never works here
  rest all functions are same as set */

   s.insert(27); // time complexity --> O(log n)
   s.emplace(96);
   s.emplace(13); // emplace is faster than insert
   s.emplace(15);

   // cout << s.size() << endl;

   // find will help to store address of element in iterator you are searching if it founds
   // otherwise iterator will points to the position just after last element in set
   auto i = s.find(1546);
   cout << *i << endl;
   // it iterator is pointing to the position just after last element in set
   auto it = s.end();
   // it--; //if you -1 to the position it will return last element of set
   cout << *it << endl;

   cout << "Before erase: \n";
   for (int i : s)
   {
      cout << i << " ";
   }
   cout << endl;

   set<int>::iterator itr = s.begin(); // 1st position
   itr++;                              // 2nd position
   itr++;                              // 3rd position
   itr++;                              // 4th position
   s.erase(itr);                       // element at 4th position will erased

   set<int>::iterator it1, it2;
   it1 = s.begin();
   it1++;
   it1++;
   it1++;
   it2 = s.end();
   it2--;
   it2--;
   it2--;
   s.erase(it1, it2); // used to erase elements from it1 to it2 - 1

   cout << "After erase: \n";
   for (int i : s)
   {
      cout << i << " ";
   }
   cout << endl;

   cout << "Is set empty: " << s.empty() << endl;
   cout << "5 present or not: " << s.count(5) << endl; // returns true/false (1/0)
   // gives how many passed values are there in set
   // as set stores only unique values it will return only 0 or 1

   // NOTE => lower_bound & upper_bound only when data is sorted
   // i.e., will never works in unordered set
   auto it5 = s.lower_bound(4);
   // lower_bound() will points to the element passed, if is present
   // otherwise points to the element which is just greater than passed element
   auto it6 = s.upper_bound(86); // always points to the greater element than passed element
   cout << *it5 << " " << *it6;

   return 0;
}