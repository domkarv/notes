import java.util.*;

public class useOfFunction {

   // function declaration
   // public static should be there in function declaration.
   public static int facto(int num) {
      if (num <= 1) {
         return 1;
      } else {
         return num * facto(num - 1);
      }
   }

   public static void main(String[] args) {

      Scanner sc = new Scanner(System.in);

      int num;
      num = sc.nextInt();
      // num2 = sc.nextInt();

      // calling function
      System.out.println(facto(num));
   }
}