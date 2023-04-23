#include <iostream>
#include <cmath>
using namespace std;
int main()
{
   string name;
   cin >> name;

   // Approch 1 =>
   for (int i = name.length() - 1; i >= 0; i--)
   {
      cout << name.at(i);
   }
   cout << endl;

   // Approch 2 =>
   int len = name.length();
   while (len--)
   {
      cout << name.at(len);
   }
   cout << endl;

   // Approch 3 =>
   for (int i = 0; i < name.length() / 2; i++)
   {
      swap(name[i], name[name.length() - 1 - i]);
   }
   cout << name;

   return 0;
}