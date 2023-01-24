import java.util.Arrays;

class Mobile {
  static String name = "Omkar Date";
  String greet = "Good Morning!";
}

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

    // int num = 100_000_0000;
    // int num = 240_044_374;
    int num = 1_0_0;
    System.out.println(num + 1);

    int x = (int) (32.45f);
    System.out.println(x);

    int n1 = 12;
    byte n2 = 32;
    /* we can convert byte to int */
    n1 = n2; // "Implicite Conversion"

    /* but can't convert int to byte */
    // n2 = n1;

    /*
     * This is bcoz size of 'int' data type is more than 'byte'
     * As 'byte' has less size than 'int'
     * that's why we can't convert 'byte' => 'int'
     * 
     * That's why we require "Explicit Conversion"
     */

    n2 = (byte) n1; // "Explicit Conversion"
    System.out.println(n1 + " " + n2);

    int b1 = 0b101; // this is binary
    b1 = 0xA; // this is hexadecimal
    b1 = 0xF07; // this is hexadecimal
    System.out.println(b1);

    double d = 12e5; // 12 * 10 raise to 5
    d = 12e-5; // 12 * 10 raise to -5
    System.out.println(d);

    /* Static KeyWord */
    Mobile mb1 = new Mobile();
    mb1.greet = "Good Night!";
    Mobile mb2 = new Mobile();
    mb2.greet = "Good Evening!";
    System.out.println(mb1.greet + " " + mb2.greet);

    mb1.name = "abcdefghijk";

    System.out.println(Mobile.name);
    System.out.println(mb1.name);
    System.out.println(mb2.name);

    /*
     * Above here for 'greet' variable we need object to access it
     * And for different objects it's value is different
     * 
     * On the other hand if variable is 'static' then
     * u can access it by class name
     * And if you change it for one object then it will change for every object
     */

    /* Methods to copy arrays */
    int[] arr = { 1, 2, 3, 4 };
    // int[] arr_copy = arr.clone();
    // int[] arr_copy = Arrays.copyOf(arr, 4);
    int[] arr_copy = Arrays.copyOfRange(arr, 1, 4);
    for (var i : arr_copy) {
      System.out.println(i);
    }
  }
}