public class Recursion {
  public static void main(String[] args) {
    addNum(1, 10);
  }

  public static int ans = 0;

  public static void addNum(int start, int end) {
    if (start == end + 1) {
      System.out.println(ans);
      return;
    }
    ans += start;
    addNum(start + 1, end);
    System.out.println(start);
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
}