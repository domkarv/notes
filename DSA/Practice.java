public class Practice {
  public static void main(String[] args) {
    int[] arr = { 4, 5, 6, 3, 2, 1 };

    int index = 3;
    int temp = arr[index];
    for (int i = index; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = temp;

    for (int i : arr) {
      System.out.print(i + " ");
    }
  }
}