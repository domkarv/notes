public class InsertionSort {
  public static void main(String[] args) {
    int[] arr = { 4, 6, 5, 3, 1, 2 };
    /*
     * Dividing array in two parts sorted and unsorted
     * In starting considering only first element (at index i=0) is sorted
     * that's why starting 'i' from 1
     */
    for (int i = 1; i < arr.length; i++) {
      /*
       * Now, from i=1 compare each element with sorted array
       * and place it at it's position
       */
      int temp = arr[i]; // storing the first element of unsorted array
      int j = i - 1; // starting another index from last element of sorted array

      while (j >= 0 && arr[j] > temp) { // for ascending order
        // while (j >= 0 && arr[j] < temp) { // for descending order
        arr[j + 1] = arr[j];
        j--;
      }
      // when j comes out of loop it decreases by '1' that's why using 'j+1'
      arr[j + 1] = temp;
    }

    for (int i : arr) {
      System.out.print(i + " ");
    }
  }
}