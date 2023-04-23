// Inheritance is when one class aquire properties/methods of another class
// the keyword used here is "extends".
// inheritance increases reusability of code
/* e.g., in websites if shape/properties of one button is 'x'
and we want that same shape/properties for another buttons
then instead of writing same code again and again we write it once
and inherit it into another buttons */

// if 'y' class aquire properties/methods of 'x' class
// then 'y' is child/sub class and 'x' is parent/base/super class

/* 4 types of inheritance */
// 1) single level inheritance (parent class -> child class)
// 2) multi level inheritance (parent class -> subclass -> subclass of subclass -> goes on)
// 3) hierarchial inheritance (one parent class and many child classes)
// 4) hybrid inheritance ('multi level inheritance' + 'hierarchial inheritance')

class Vehicle { // parent class
   String brand = "BMW";

   public void origin() {
      System.out.println("Germany");
   }
}

/* Single level inheritance */
// here class Car inherit properties from class Vehicle
// thats why 'Single level inheritance'
class Car extends Vehicle {
   String modelName = "BMW E30 M3";
}

/* Multi level inheritance */
// here class series_3 inherit properties from class Car and class Car
// inherit properties from class Vehicle thats why 'Multi level inheritance'
class series_3 extends Car {
   public void info() {
      System.out.println("This is series 3.");
   }
}

/* Hierarchial inheritance */
// here class Bike and Car both inherit properties from class vehicle
// that's why 'Hierarchial inheritance'
class Bike extends Vehicle {
   String modelName = "BMW G 310 GS";
}

public class Inheritance {
   public static void main(String[] args) {
      Vehicle v1 = new Vehicle();
      System.out.print(v1.brand + " ");
      v1.origin(); // own property

      Car c1 = new Car(); // have inherited property
      System.out.println(c1.brand + " " + c1.modelName);
      System.out.print("Origin: ");
      c1.origin();

      Bike b1 = new Bike(); // have inherited property
      System.out.println(b1.brand + " " + b1.modelName);
      System.out.print("Origin: ");
      b1.origin();

      series_3 s3 = new series_3();
      s3.info();
      System.out.print("Origin: ");
      s3.origin();
      System.out.println(s3.brand + " " + s3.modelName);
   }
}