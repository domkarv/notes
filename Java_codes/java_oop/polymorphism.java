/* Two types of polymorphism =>
 1) compile time polymorphism
 2) run time polymorphism */

/* Compile Time Polymorphism */
/* Polymorphism => function or method having same name
but different parameters/arguments
and are used to do different tasks.
This functions/methods are may be from same class or may not be */

class polymor {
   int age;
   String name;

   public void printInfo(int age) {
      System.out.println(age);
   }

   public void printInfo(String name) {
      System.out.println(name);
   }
}

class polymor2 {
   public void printInfo(String name, int age) {
      System.out.println(name + " " + age);
   }
}

public class polymorphism {
   public static void main(String[] args) {

      polymor pl = new polymor();
      polymor2 pl2 = new polymor2();
      pl.name = "Omkar";
      pl.age = 19;

      // calling same method with different arguments
      pl.printInfo(pl.age);
      pl.printInfo(pl.name);
      pl2.printInfo(pl.name, pl.age);
   }

}