import java.util.Scanner;

public class Practice {
  static void printArray(int arr[]) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  static int[] swap(int arr[], int i, int j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
    return arr;
  }

  static int[] reverse(int arr[], int start, int end) {
    while (start < end) {
      swap(arr, start++, end--);
    }
    return arr;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] arr = { 2, 1, 3, 4, 5 };

    int start = 0;
    int end = arr.length - 1;

    for (int i = 1; i <= end; i++) {
      arr[i] += arr[i - 1];
    }

    // while (start <= end) {
    // if (Math.abs(arr[start]) > Math.abs(arr[end]))
    // ans[j++] = arr[start] * arr[start++];
    // else
    // ans[j++] = arr[end] * arr[end--];
    // }

    // reverse(ans, 0, ans.length - 1);

    printArray(arr);
  }
}