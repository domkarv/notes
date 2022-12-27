#include <iostream>
#include <stack> // header file for STL stack
#include <queue> // header file for STL queue

using namespace std;
int main()
{
   /* ------------- */
   /* --- STACK --- */ // every function of stack has O(1) time complexity
   /* ------------- */
   /* only three main functions push, pop, top */

   // stack<string> s;

   // s.push("Omkar"); // Element will be added at top.
   // // emplace used here is different than used in vector, list, deque.
   // // we are using emplace here to push element at top of stack and
   // // in vector, list, deque we are using it to push at position we want
   // s.emplace("Date");
   // s.emplace("OmkarDate"); // this is faster than push

   // s.pop(); // Element at top(last) will be deleted

   // cout << "Size of stack: " << s.size() << endl;
   // cout << "Element at top: " << s.top() << endl;
   // cout << "Is stack empty: " << s.empty() << endl;

   // // while (!s.empty())
   // // {
   // //    cout << s.top() << endl;
   // //    s.pop();
   // // }
   // // cout << "Size of stack: " << s.size() << endl;

   // stack<string> s2;
   // s2.emplace("abc");
   // s2.emplace("xyz");
   // s2.emplace("pqr");

   // // swapping =>
   // s2.swap(s);

   // cout << "s:" << endl;
   // while (!s.empty())
   // {
   //    cout << s.top() << endl;
   //    s.pop();
   // }
   // cout << "Size of stack: " << s.size() << endl;

   // cout << "s2:" << endl;
   // while (!s2.empty())
   // {
   //    cout << s2.top() << endl;
   //    s2.pop();
   // }
   // cout << "Size of stack: " << s2.size() << endl;

   /* ------------- */
   /* --- QUEUE --- */
   /* ------------- */
   /* only four main functions push, pop, front, back */

   queue<string> q;

   q.push("Omkar"); // Element will be added at top.
   // // emplace used here is different than used in vector, list, deque.
   // // we are using emplace here to push element at last of queue and
   // // in vector, list, deque we are using it to push at position we want
   q.emplace("Date"); // this is faster than push
   q.emplace("OmkarDate");

   q.pop(); // Element at front(first) will be deleted

   cout << "Size of Queue: " << q.size() << endl;
   cout << "Element at front: " << q.front() << endl;
   cout << "Element at back: " << q.back() << endl;
   cout << "Is queue empty: " << q.empty() << endl;

   queue<string> q2;
   q2.emplace("abc");
   q2.emplace("xyz");
   q2.emplace("pqr");

   // swapping =>
   q2.swap(q);

   cout << "q:" << endl;
   while (!q.empty())
   {
      cout << q.front() << endl;
      q.pop();
   }
   cout << "Size of stack: " << q.size() << endl;

   cout << "q2:" << endl;
   while (!q2.empty())
   {
      cout << q2.front() << endl;
      q2.pop();
   }
   cout << "Size of stack: " << q2.size() << endl;

   return 0;
}