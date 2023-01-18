public class SelectionSort {
  public static void main(String[] args) {
    int[] arr = { 4, 6, 5, 3, 1, 2 };
    /*
     * first selects the smallest number
     * then swap it with it's correct position
     */

    // What is stable and unstable algorithm ? =>
    // https://www.baeldung.com/cs/stable-sorting-algorithms#:~:text=Stable%20sorting%20algorithms%20preserve%20the,elements%20relative%20to%20one%20another.

    for (int i = 0; i < arr.length - 1; i++) {
      int indexOfSmallNum = i;
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[indexOfSmallNum] > arr[j])
          indexOfSmallNum = j;
      }

      // 'indexOfSmallNum = i' then no need to swap them
      if (indexOfSmallNum != i) {
        int temp = arr[i];
        arr[i] = arr[indexOfSmallNum];
        arr[indexOfSmallNum] = temp;
      }
    }

    for (int i : arr) {
      System.out.print(i + " ");
    }
  }
}