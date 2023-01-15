import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] arr = { 2, 5, 3, 45, 7, 2, 34, 7, 3 };
    // Arrays.sort(arr);

    for (int i = 1; i < arr.length; i++) {
      for (int j = i; j < arr.length; j++) {
        if (arr[j - 1] > arr[j]) {
          int temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }

    for (var i : arr) {
      System.out.print(i + " ");
    }

  }
}