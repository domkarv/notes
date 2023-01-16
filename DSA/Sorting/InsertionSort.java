public class InsertionSort {
  public static void main(String[] args) {
    int[] arr = { 4, 6, 5, 3, 1, 2 };

    for (int i = 1; i < arr.length; i++) {
      /*
       * starting from 1st position
       * bcoz there is no number for comparison when
       * starting from 0th position
       */

      int temp = arr[i];

      /*
       * Peek the number from array and insert/shift it
       * at it's position by swapping
       */
      for (int j = i - 1; j >= 0; j--) {
        if (arr[j] > temp) { // for ascending order
          // if (arr[j] < temp) { // for descending order
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }

    // for (int i = 1; i < arr.length; i++) {
    // for (int j = i - 1; j >= 0; j--) {
    // if (arr[j] > arr[j + 1]) {
    // int temp = arr[j + 1];
    // arr[j + 1] = arr[j];
    // arr[j] = temp;
    // }
    // }
    // }

    for (int i : arr) {
      System.out.print(i + " ");
    }
  }
}