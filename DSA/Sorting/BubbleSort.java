public class BubbleSort {
  public static void main(String[] args) {
    int[] arr = { 9, 8, 7, 6, 5, 4, 3, 2, 1 };
    // Arrays.sort(arr);

    boolean swapped = false;
    int i;

    /*
     * For worst case outer loop will run for (n-1) steps
     * where 'n' is length of array
     */
    for (i = 1; i < arr.length; i++) {
      for (int j = 0; j < arr.length - i; j++) {
        // if (arr[j] < arr[j + 1]) { // for descending order
        if (arr[j] > arr[j + 1]) { // for ascending order
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }

      // optimizing code =>
      // With this optimization, time complexity of this code will
      // decrease from 'O(n^2)' to 'O(n)'.
      // This optimization will help when array is already sorted
      // or will sort in 2-3 steps.

      // If array is already sorted then "swapped = false;" will remain as it is,
      // and help to break out of outer loop and whole loop will run for only one time
      // i.e., for i=0.

      // Similarly if array will sort in 2 steps then loop will run for i=0 and i=1
      // and will break after this.

      if (!swapped)
        break;
      // if swapped hitted the true value then again set it to false.
      swapped = false;
      // to see the effect of above line of code, comment it
      // and notice the value of 'Steps' i.e, 'i'.
    }
    System.out.println("Steps: " + (i - 1));
    // 'i' increases by 1 when comes out of loop

    for (var r : arr) {
      System.out.print(r + " ");
    }
  }
}