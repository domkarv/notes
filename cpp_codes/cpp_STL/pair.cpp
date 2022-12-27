#include <bits/stdc++.h>
// #include <iostream>
// #include <utility> //header file for STL pair

using namespace std;
int main()
{
   // Different ways to initialize pair:
   pair<int, int> g1;        // default
   pair<int, int> g2(1, 10); // initialized,  same data type
   pair<int, int> g3 = {1, 6};
   pair<int, char> g4(1, 'a'); // initialized,  different data type
   pair<int, int> g5(g3);      // copy of g3
   pair<int, int> g6 = make_pair(8, 6);
   cout << g6.first << endl;

   pair<int, int> p = {4, 6};
   cout << p.first << " " << p.second << endl;

   // nested pair
   pair<int, pair<int, int>> pp = {1, {2, 3}};
   cout << pp.first << " " << pp.second.first << " " << pp.second.second << endl;

   // creating array of pair
   pair<int, int> arr[] = {{2, 3}, {5, 6}, {8, 9}};
   cout << arr[1].first << " " << arr[0].second << endl;

   pair<int, int> g(p);
   cout << g.first << endl;

   g2.swap(p);
   cout << p.first << " " << p.second << endl;

   int a, b;
   tie(a, b) = g; // this function is not in utility header file
   cout << a << " " << b << endl;

   a = 5, b = 9;
   tie(a, ignore) = g2;
   cout << a << " " << b << endl;

   pair<string, string> st = {"Omkar", "Date"};
   pair<string, string> st2 = {"Date", "Omkar"};

   cout << st.first << endl;

   // we can concatinate using '+' sign
   cout << st.first + st2.first << endl;

   return 0;
}