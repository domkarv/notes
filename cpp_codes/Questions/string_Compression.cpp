/* Question */
/* https://leetcode.com/problems/string-compression/ */
#include <bits/stdc++.h>
using namespace std;

int compress(vector<char> &chars)
{
   int i = 0;
   int len = chars.size();
   int insertAtInd = 0;

   while (i < len)
   {
      int j = i + 1;

      // this will increament until new encounters
      while (j < len && chars[i] == chars[j])
         j++;

      // push the character in the array
      chars[insertAtInd++] = chars[i];

      // this counts how many same elements are there in array
      int cnt = j - i;

      // if only one character is there then add only character not number
      if (cnt > 1)
      {
         string ch = to_string(cnt); // converting integers to character
         // i have converted them to string bcoz number of
         // same characters may be more than 10 and 10 has more than one character
         for (char c : ch)
            chars[insertAtInd++] = c;
      }
      // moving to new character
      i = j;
   }

   // this will erase rest of unnecessary elements of array.
   chars.erase(chars.begin() + insertAtInd, chars.end());

   return chars.size();
}

int main()
{
   vector<char> chars = {'a', 'a', 'b', 'b', 'c', 'c', 'c'};
   cout << compress(chars) << endl;

   // Printing new chracter array
   for (char ch : chars)
   {
      cout << ch << " ";
   }
   return 0;
}