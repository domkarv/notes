#include <iostream>
using namespace std;
int main()
{
   int n, m;
   cin >> n >> m;

   int matrix[n][m];
   for (int i = 0; i < n; i++)
   {
      for (int j = 0; j < m; j++)
      {
         cin >> matrix[i][j];
      }
   }

   cout << "The Spiral Order Matrix is: " << endl;
   int rowStart = 0;
   int rowEnd = n - 1;
   int colStart = 0;
   int colEnd = m - 1;

   // To print spiral order matrix
   while (rowStart <= rowEnd && colStart <= colEnd)
   {
      // 1
      for (int col = colStart; col <= colEnd; col++)
      {
         cout << matrix[rowStart][col] << " ";
      }
      rowStart++;

      // 2
      for (int row = rowStart; row <= rowEnd; row++)
      {
         cout << matrix[row][colEnd] << " ";
      }
      colEnd--;

      // 3
      for (int col = colEnd; col >= colStart; col--)
      {
         cout << matrix[rowEnd][col] << " ";
      }
      rowEnd--;

      // 4
      for (int row = rowEnd; row >= rowStart; row--)
      {
         cout << matrix[row][colStart] << " ";
      }
      colStart++;

      // cout << endl;
   }

   return 0;
}