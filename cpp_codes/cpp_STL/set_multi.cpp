#include <iostream>
#include <set>

using namespace std;
int main()
{
   // multiset can store repeating elements but in sorted order
   multiset<int> m = {1, 2, 1, 4, 5, 3, 2, 1, 1, 5, 4, 8};

   for (int i : m)
   {
      cout << i << " ";
   }
   cout << endl;

   int r = m.count(6); // gives how many 6's are there in multiset
   cout << r << endl;  // if is not present it gives 0

   // m.erase(1); // it will erase all 1's
   // if you want to erase only one value
   // m.erase(m.find(1));     // will delete first occurence
   // if you want to erase number of occurences
   auto it = m.find(1);    // 1st position
   it++;                   // 2nd position
   it++;                   // 3rd position
   it++;                   // 4th position
   m.erase(m.find(1), it); // erase elements from first occurence to it - 1

   for (int i : m)
   {
      cout << i << " ";
   }
   cout << endl;

   /* REST ALL FUNCTION ARE SAME AS SET */

   return 0;
}