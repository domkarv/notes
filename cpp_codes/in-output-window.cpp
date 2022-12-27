
// here we required input.txt and output.txt files ("opened in split screen")

#include <iostream>
using namespace std;
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

    int t;
    cin >> t;

    while (t--)
    {
        int a, b;
        cin >> a >> b;
        cout << a + b << endl;
    }

    return 0;
}