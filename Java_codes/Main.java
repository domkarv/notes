class A {
  int num = 2905;

  public void greet() {
    System.out.println("Good Night");
  }
}

class B extends A {
}

public class Main {
  public static void main(String[] args) {
    B b = new B();
    System.out.println("Number is: " + b.num);
    b.greet();
  }
}