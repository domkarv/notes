public class MustSee {
  public static void main(String[] args) {
    var xd = 23;
    System.out.println(xd);

    int a[] = { 1, 3, 4, 5, 6 };
    int[] b = a;
    b[3] = 13;
    for (int i : a) {
      System.out.print(i + " ");
    }
    System.out.println();
    for (int i : a) {
      System.out.print(i + " ");
    }
    System.out.println();

    int num = 240_044_374;
    System.out.println(num);

    int x = (int) (32.45f);
    System.out.println(x);
  }
}