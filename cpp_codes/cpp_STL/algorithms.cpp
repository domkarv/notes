#include <iostream>
#include <vector>
#include <string>
#include <algorithm> // header file for STL algorithms

using namespace std;

bool boolFun(pair<int, int> p1, pair<int, int> p2)
{
   if (p1.first < p2.first) // increasing order w.r.t first
      return true;
   if (p1.first == p2.first)
   {
      if (p1.second > p2.second) // if both are same then in decreasing order w.r.t second
         return true;
   }

   return false;
}

int main()
{
   int arr[7] = {5, 6, 9, 8, 4, 2, 3};
   cout << "Before sorting: " << endl;
   for (int i : arr)
   {
      cout << i << " ";
   }
   cout << endl;

   // you can get max/min element of array
   cout << "Max element of arr: " << *max_element(arr, arr + 7) << endl;
   cout << "Minimum element of arr: " << *min_element(arr, arr + 7) << endl;

   // this is how we can sort array
   // here you have to pass the position from where to where you want to sort array
   // sort(arr, arr + 7);
   sort(arr + 2, arr + 5);
   cout << "After sorting: " << endl;
   for (int i : arr)
   {
      cout << i << " ";
   }
   cout << endl;

   sort(arr, arr + 7, greater<int>());
   cout << "decreasing order: " << endl;
   for (int i : arr)
   {
      cout << i << " ";
   }
   cout << endl;

   vector<int> v = {5, 6, 9, 8, 4, 2, 3};
   // this is how we can sort vector
   // here you have to pass the position from where to where you want to sort vector
   sort(v.begin(), v.end());
   // sort(v.begin(), v.end(), greater<int>()); // for decreasing order
   for (int i : v)
   {
      cout << i << " ";
   }
   cout << endl;

   // if you you want to decide how elements should be sorted
   // then there is way to sort it you just want to create a
   // boolean function satisfying your conditions
   // see below example of vector of pair
   vector<pair<int, int>> v2;
   v2.emplace_back(1, 3);
   v2.emplace_back(3, 4);
   v2.emplace_back(1, 8);
   v2.emplace_back(1, 4);
   v2.emplace_back(2, 2);
   v2.emplace_back(5, 3);
   v2.emplace_back(2, 5);

   sort(v2.begin(), v2.end(), boolFun);
   // here boolFun is that function which satisfy your condition

   for (int i = 0; i < v2.size(); i++)
   {
      cout << v2[i].first << " " << v2[i].second << endl;
   }

   cout << __builtin_popcount(3) << endl; // returns set bits

   string s = "cab";
   sort(s.begin(), s.end()); // you can sort string like this, it will sort every character of string

   // next_permutation(s.begin(), s.end()); // will print next permutation of given string
   cout << s << endl; // first will print sorted string

   // this while loop will print all permutaions of string
   while (next_permutation(s.begin(), s.end())) // will print all permutations of
      cout << s << endl;

   return 0;
}