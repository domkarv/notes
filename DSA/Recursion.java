public class Recursion {
  public static void main(String[] args) {
    System.out.print("Factorial: ");
    System.out.println(facto(5));

    System.out.print("Fibonacci: ");
    fibonacci(0, 1, 10);

    System.out.print("\nSum of n: ");
    addNum(1, 10);
    // System.out.println(addNum(1, 10));
  }

  public static int facto(int num) {
    /*
     * As '1!=1' and '0!=1' directly return 1 for 'num < 2'
     */
    if (num < 2)
      return 1;
    return num * facto((num - 1));
  }

  public static void fibonacci(int a, int b, int range) {
    if (range == 1)
      return;
    if (a == 0)
      System.out.print(a + " ");
    System.out.print(b + " ");
    fibonacci(b, a + b, --range);
  }

  public static int ans = 0;

  public static void addNum(int start, int end) {
    if (start > end) {
      System.out.println(ans);
      System.out.print("Notice this values: ");
      return;
    }
    ans += start;
    addNum(start + 1, end);
    System.out.print(start + " ");
    /*
     * notice this value,
     * in recursive call we are increasing 'start' by 1
     * but when we print it we got decreasing values.
     * "THIS IS WHAT CALL STACK"
     *
     * Watch this if not understood
     * https://youtu.be/5Boqfjissv0
     */
  }
  // public static int addNum(int start, int end) {
  // if (start > end)
  // return 0;
  // return start + addNum(start + 1, end);
  // }
}