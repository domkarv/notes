public class Practice {
  public static void reverse(String str) {
    if (str == "")
      return;
    int n = str.length() - 1;
    System.out.print(str.charAt(n));
    reverse(str.substring(0, n));
  }

  public static void main(String[] args) {
    reverse("abcde");
  }
}