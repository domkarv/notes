#include <iostream>
using namespace std;

char toLower(char ch)
{
   if (ch >= 'a' && ch <= 'z')
      return ch;
   else
   {
      char temp = ch - 'A' + 'a';
      return temp;
   }
}

char toUpper(char ch)
{
   if (ch >= 'A' && ch <= 'Z')
      return ch;
   else
   {
      char temp = ch - 'a' + 'A';
      return temp;
   }
}

int main()
{
   // defined by me
   cout << toLower('X') << " ";
   cout << toUpper('x');
   cout << endl;

   // pre-defined functions
   // this fuctions return integer values so
   // we have to convert them into characters.
   char s = toupper('x');
   char x = tolower('X');
   cout << s << " " << x;
   return 0;
}