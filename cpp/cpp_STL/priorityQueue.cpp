#include <iostream>
#include <queue> // header file for STL priority queue

// is builded using tree data structure
// time complexity of pop and push is O(log n) & top is O(1)

using namespace std;
int main()
{
   // max heap priority queue => max value is always at top
   priority_queue<int> p;
   p.push(53);
   p.emplace(12);
   p.emplace(93);
   p.emplace(17);
   p.emplace(68);
   // cout << p.top() << endl;

   // cout << p.empty() << endl;

   // // swapping
   // cout << "p Before swapping:\n";
   // int size = p.size();
   // for (int i = 0; i < size; i++)
   // {
   //    cout << p.top() << " ";
   //    p.pop();
   // }
   // cout << endl;

   // priority_queue<int> p3;
   // p3.push(12);
   // p3.emplace(55);
   // p3.emplace(41);
   // p3.emplace(36);
   // p3.emplace(86);

   // p3.swap(p);

   // cout << "p After swapping:\n";
   // size = p.size();
   // for (int i = 0; i < size; i++)
   // {
   //    cout << p.top() << " ";
   //    p.pop();
   // }

   // copying one priority queue to another.
   priority_queue<int> p4(p);
   int size3 = p4.size();
   for (int i = 0; i < size3; i++)
   {
      cout << p4.top() << " ";
      p4.pop();
   }

   // // mini heap priority queue => minimum value is always at top
   // priority_queue<int, vector<int>, greater<int>> p2;
   // p2.emplace(53);
   // p2.emplace(12);
   // p2.emplace(93);
   // p2.emplace(17);
   // p2.emplace(68);
   // cout << p2.top() << endl;

   // cout << "mini heap priority queue_\n";
   // int size2 = p2.size();
   // for (int i = 0; i < size2; i++)
   // {
   //    cout << p2.top() << " ";
   //    p2.pop();
   // }
   // cout << endl;

   return 0;
}