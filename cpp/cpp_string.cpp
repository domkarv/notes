#include <bits/stdc++.h>
using namespace std;

int main()
{
   string name1 = "Omkar ";
   string name2 = "Date";

   /* concatination of string */
   // cout << name1.append(name2) << endl; // this method works only for string data type
   // above method will change the name1 string as we appending name2 string to name1

   // string result = name1 + " " + name2; // this method works only for string data type
   // cout << result << endl;
   // cout << name1 + " " + name2 << endl; // this method works only for string data type
   // cout << name1 << endl;
   // cout << name2 << endl;

   /* character array */
   // char str1[] = "Omkar ";
   // char str2[] = "Date";
   // cout << strcat(str1, str2) << endl; // this method works only for char data type

   /* See the example given below */
   /* (1) */
   // string x = "10";
   // string y = "20";
   // cout << x + y;
   /* (2) */
   // int x = 10;
   // int y = 20;
   // cout << x + y << endl;

   /* length of string */
   // cout << name1.length() << endl;
   // cout << name1.size() << endl;
   // // It is completely up to you what want to use length() or size()
   // cout << name1.capacity() << endl; // this gives capacity of your string
   // // (capacity and size are different).

   // string str3;
   // // cin >> str3; // this will never read "omkar date" bcoz
   // // after "omkar" there is end-line character thats we use 'getline'
   // getline(cin, str3);
   // cout << str3;

   // Access string
   // cout << name1[0];
   // cout << name1[1];
   // cout << name1[2];
   // cout << name1[3];
   // cout << name1[4];
   // cout << endl;

   // name1.clear(); // this is used to clear a string variable
   // // this will clear your size not capacity
   // if (name1.size() == 0)
   //    cout << "String is cleared\n";

   /* Sub-string */
   // string name3 = name2.substr(1, 3); // take starting index and number of chars
   // cout << name3 << endl;
   // string s6 = "omkardate";
   // string s7 = s6.substr(3); //this will give substring from index mentioned to end of string
   // cout << s6;

   /* Erase function */
   // string name4 = "OmkarDate";
   // name4.erase(2, 5); // this takes starting index of string to erase and also
   // // number of characters you want to erase.
   // cout << name4 << endl;

   /* Find function */
   // read about 'string::npos'.
   string str = "I like Gulab jamun.";
   string str2 = "Chocalate";
   int x = str.find("Gulab jamun"); // this is used to find the sub-string.
   // It return the index where string is found and
   // if never found then return -1 and show some error
   // cout << x << endl;

   /* Replace function */
   // str.replace(x, 11, "Chocalate");
   str.replace(x, 11, str2); // this takes starting and ending index from where
   // to where you want to replace string and new string

   /* Insert function */
   string str4 = "I like to eat chocalate";
   str.insert(6, str4, 6, 7); // This will insert some opart of str4 i.e,
   // 7 characters from index 6 onward
   // str.insert(6, " to eat");  // this takes starting index from where
   // you want to insert string and the string u want to insert
   cout << str << endl;

   /* Compare function */
   string str3 = "omkar";
   string str5 = "omkar";
   // if (str3.compare(str5) == 0)
   //    cout << "matched";
   // else
   //    cout << "Not matched";

   str5.push_back('D'); // this will add character at end of string
   str5.pop_back();     // this will remove last character of string

   cout << str5.empty() << endl; // return boolean value

   str5.swap(str); // this will swap two string
   cout << str5 << endl;
   cout << str << endl;

   /* String to integer */
   int r = stoi("450");
   cout << r + 96 << endl;

   /* integer to string */
   string s = to_string(852);
   cout << s + "52" << endl;

   /* sorting */
   string s2 = "fbgaedcjlhik";
   sort(s2.begin(), s2.end());
   cout << s2;

   return 0;
}