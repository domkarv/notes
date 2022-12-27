
/* class, method, constructor */

class NewClass {
   String str;
   String str2;

   // method
   public void fun() {
      System.out.println("This is new class of " + str + " " + str2);
   }

   /* constructor */

   // // non-parameterized constructor
   // NewClass() {
   // System.out.println("In newclass constructor");
   // }

   // // parameterized constructor
   // NewClass(String str3, String str4) {
   // str = str3;
   // str2 = str4;
   // System.out.println("In newclass constructor of " + str + " " + str2);
   // }

}

public class Oops_basic {
   public static void main(String[] args) {

      // for class and method
      NewClass nc = new NewClass();
      nc.str = "omkar";
      nc.str2 = "date";
      nc.fun();

      // // for non-parameterized constructor
      // NewClass nc = new NewClass();
      // nc.str = "omkar";
      // nc.str2 = "date";
      // nc.fun();

      // // for parameterized constructor
      // NewClass nc = new NewClass("Omkar", "Date");
      // nc.fun();

   }
}