/*
1) Remember interface does not contain method body
2) Interface methods are by default 'abstract' and 'public'
3) Interface attributes are by default 'public', 'static' and 'final'
4) An interface cannot contain a constructor (as it cannot be used to create objects)
*/

interface Student {
  public void funct1();

  abstract void funct2();

  public void funct3();
}

interface student5 {
  public void funct4();

  abstract void funct5();

  public void funct6();
}

/*
 * if you declare a interface no matter what,
 * u have to use all of it's methods in derived class
 * this derived class can have it's own methods
 * here methods interface may be abstract or may be public
 */

class Student2 implements Student, student5 { // u can use multiple interfaces in one class

  public void ownMethod() { // this method is not a part of interface
    System.out.println("This method is own method of class Student2");
  }

  public void funct1() {
    System.out.println("I'm a function 1 in Student2");
  }

  public void funct2() {
    System.out.println("I'm a function 2 in Student2");
  }

  public void funct3() {
    System.out.println("I'm a function 3 in Student2");
  }

  public void funct4() {
    System.out.println("I'm a function 4 in Student2");
  }

  public void funct5() {
    System.out.println("I'm a function 5 in Student2");
  }

  public void funct6() {
    System.out.println("I'm a function 6 in Student2");
  }
}

public class Interface {
  public static void main(String[] args) {
    Student st = new Student2();
    st.funct1();
    st.funct2();
    st.funct3();
  }
}