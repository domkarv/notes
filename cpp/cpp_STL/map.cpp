#include <iostream>
#include <map> // header file for STL map
#include <unordered_map>

using namespace std;
int main()
{
   // map<char, string> m; // map<key, data> mapName;
   // // keys are unique, keys helps to access data stored with that key
   // // map stores keys in sorted order

   // /* unordered_map<char, string> m; */
   // // keys are unique
   // // unordered map doesn't stores keys in sorted order

   // m['a'] = "omkar";
   // // m['a'] = "date";
   // cout << m['a'] << endl;

   // m.insert({'b', "AARAV"});
   // m.emplace('d', "Omkar"); // is faster
   // m.emplace('c', "Om");    // is faster

   // // for (auto i : m)
   // // {
   // //    cout << i.first << " " << i.second << endl;
   // // }
   // for (auto i = m.begin(); i != m.end(); i++)
   // {
   //    cout << i->first << " " << i->second << endl;
   // }

   // cout << "Size of Map: " << m.size() << endl;

   // // m.erase('a'); // data stored at this key will be erased

   // // for (auto i = m.begin(); i != m.end(); i++)
   // // {
   // //    cout << i->first << " " << i->second << endl;
   // // }

   // // m.clear(); // delete all data from map

   // auto itr = m.find('d');
   // // if element never iterator will points to the position just after last element
   // cout << itr->first << " " << itr->second << endl;
   // cout << m.find('c')->second << endl;

   // cout << m.at('c') << endl; // returns data stored at key passed

   // cout << m.count('a') << endl; // returns how many elements are present having key passed

   // cout << m.empty() << endl;

   // // swapping
   // map<char, string> m2 = {
   //     {'e', "sagar"},
   //     {'g', "vandana"},
   //     {'f', "bhimaji"},
   // };
   // m.swap(m2); // swaps two maps
   // for (auto i = m.begin(); i != m.end(); i++)
   // {
   //    cout << i->first << " " << i->second << endl;
   // }

   // // NOTE => lower_bound & upper_bound only when data is sorted
   // // i.e., will never works in unordered map
   // auto it5 = m.lower_bound('e');
   // // lower_bound() will points to the element passed, if is present
   // // otherwise points to the element which is just greater than passed element
   // auto it6 = m.upper_bound('f'); // always points to the greater element than passed element
   // cout << "m.lower_bound('e'): " << it5->first << endl;
   // cout << "m.upper_bound('f'): " << it6->first << endl;

   /* -------- */
   /* multimap */
   /* -------- */
   multimap<char, string> mm; // stores in sorted order
   mm.emplace('a', "omkar");  // same keya can have diffrent data
   mm.emplace('c', "om");
   mm.emplace('b', "sagar");
   mm.emplace('a', "aarav");

   for (auto i : mm)
   {
      cout << i.first << " " << i.second << endl;
   }

   cout << mm.count('a'); // returns how many elements are present having key passed

   return 0;
}