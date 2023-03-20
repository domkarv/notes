import java.util.Scanner;

public class MergeSort {

  static void conquer(int arr[], int start, int mid, int end) {
    int merged[] = new int[end - start + 1];
    int idx = 0;
    int idx1 = start;
    int idx2 = mid + 1;

    while (idx1 <= mid && idx2 <= end) {
      if (arr[idx1] <= arr[idx2])
        merged[idx++] = arr[idx1++];
      else
        merged[idx++] = arr[idx2++];
    }

    while (idx1 <= mid)
      merged[idx++] = arr[idx1++];

    while (idx2 <= end)
      merged[idx++] = arr[idx2++];

    for (int i = 0, j = start; i < merged.length; i++, j++)
      arr[j] = merged[i];
  }

  static void divide(int arr[], int start, int end) {
    if (start < end) {
      int mid = (start + end) / 2;

      divide(arr, start, mid);
      divide(arr, mid + 1, end);
      conquer(arr, start, mid, end);
    }
  }

  public static void main(String[] a) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter size of array: ");
    int n = sc.nextInt();

    int arr[] = new int[n];
    System.out.print("Enter elemets: ");
    for (int i = 0; i < arr.length; i++) {
      arr[i] = sc.nextInt();
    }

    divide(arr, 0, arr.length - 1);

    System.out.print("Sorted array: ");
    for (int i = 0; i < arr.length; i++)
      System.out.print(arr[i] + " ");
  }
}