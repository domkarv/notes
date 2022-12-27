public class ExceptionHandling {
  public static void main(String[] args) {
    int arr[] = new int[3];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    for (var ar : arr) {
      System.out.println(ar);
    }

    try {
      System.out.println(arr[4]);
    } catch (Exception e) {
      try {
        arr[3] = 24;
        System.out.println(arr[3]);
      } catch (Exception er) {
        try {
          System.out.println(arr[2]);
        } catch (Exception ert) {
          System.out.println("not in array");
        }
      }
    }
  }
}