#include <iostream>
using namespace std;
int main()
{
   // don't know what is this but this help to beautify the code
   // #ifndef ONLINE_JUDGE
   //    freopen("input.txt", "r", stdin);
   //    freopen("output.txt", "w", stdout);
   // #endif

   int Budget;
   cin >> Budget;

   if (Budget > 5000)
   {
      if (Budget > 10000)
      {
         cout << "Shopping with Neha\n";
      }
      else
      {
         cout << "Roadtrip with Neha\n";
      }
   }
   else
   {
      // if(Budget<2000){
      //     cout<<"Friends\n";
      // } else{
      //     cout<<"Rashmi\n";
      // }

      (Budget < 2000) && (cout << "Friends\n");
      !(Budget < 2000) && (cout << "Rashmi\n");
   }

   return 0;
}