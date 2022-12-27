import java.util.*;

public class PrimeNum {
   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);

      int i, n = sc.nextInt();
      // boolean temp = false;

      for (i = 2; i < n; i++) {
         if (n % i == 0) {
            // temp = true;
            break;
         }
      }
      if (i == n) {
         System.out.println("Prime");
      } else {
         System.out.println("not prime");
      }
      // if (temp) {
      // System.out.println("not prime");
      // } else {
      // System.out.println("Prime");
      // }
   }
}