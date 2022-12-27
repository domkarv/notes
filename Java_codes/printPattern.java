import java.util.*;

public class printPattern {

   // part of pascal triangle
   public static int facto(int n) {
      if (n == 1 || n == 0) {
         return 1;
      } else {
         return (n * facto(n - 1));
      }
   }

   // part of pascal triangle
   public static int comb(int n, int r) {
      return (facto(n) / (facto(r) * facto(n - r)));
   }

   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);

      int r;

      System.out.print("Enter number of rows: ");
      r = sc.nextInt();

      // Pascal Triangle
      for (int i = 0; i < r; i++) {
         for (int j = 0; j < (r - i - 1); j++) {
            System.out.print("  ");
         }
         for (int j = 0; j <= i; j++) {
            if (i == j || j == 0) {
               System.out.print(" 1  ");
            } else {
               System.out.print(" " + comb(i, j) + "  ");
            }
         }
         System.out.println();
      }

      // Hollow Butterfly
      // for (int i = 0; i < r; i++) {
      // for (int j = 0; j <= i; j++) {
      // if (i == j || j == 0) {
      // System.out.print("*");
      // } else {
      // System.out.print(" ");
      // }
      // }
      // for (int j = 0; j < (2 * (r - i - 1)); j++) {
      // System.out.print(" ");
      // }
      // for (int j = 0; j <= i; j++) {
      // if (i == j || j == 0) {
      // System.out.print("*");
      // } else {
      // System.out.print(" ");
      // }
      // }
      // System.out.println();
      // }

      // for (int i = 0; i < r; i++) {
      // for (int j = 0; j < r - i; j++) {
      // if ((i + j) == r - 1 || j == 0) {
      // System.out.print("*");
      // } else {
      // System.out.print(" ");
      // }
      // }
      // for (int j = 0; j < (2 * i); j++) {
      // System.out.print(" ");
      // }
      // for (int j = 0; j < r - i; j++) {
      // if ((i + j) == r - 1 || j == 0) {
      // System.out.print("*");
      // } else {
      // System.out.print(" ");
      // }
      // }
      // System.out.println();
      // }
   }
}