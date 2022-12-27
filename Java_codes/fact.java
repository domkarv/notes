public class fact {
   int facto(int n) {
      int temp = 1;
      for (int i = 1; i <= n; i++) {
         temp *= i;
      }
      return temp;
   }
}