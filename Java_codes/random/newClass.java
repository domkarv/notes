class largeNum {
   int largestOfArray(int arr[]) {
      int temp = arr[0];
      for (int i = 1; i < arr.length; i++) {
         if (temp < arr[i]) {
            temp = arr[i];
         }
      }
      return temp;
   }
}

public class newClass {
   public static void main(String[] args) {
      largeNum ln = new largeNum();

      int arr[] = { 5, 9, 6, 3, 2, 12, 4, 21, 3, 8 };
      int large = ln.largestOfArray(arr);
      System.out.println(large);
   }
}