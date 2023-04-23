abstract class Student {
  public void funct() {
  }

  abstract void funct2();

  public void funct3() {
  }
}

/* Remember abstract methods does not contain body */

class Student2 extends Student {
  public void funct() {
    System.out.println("I'm a function in Student2");
  }

  // if u comment this u will get error bcoz
  // this method is abstracted in parent class
  // but if u comment any other method which is not abstracted
  // u will never get any error
  public void funct2() {
    System.out.println("I'm a function 2 in Student2");
  }

  // this is where 'interface' comes in role if you declare a interface
  // no matter what, u have to use all of it's methods in derived class
  // this derived class can have it's own methods
  // here methods interface may be abstract or may be public

  public void funct3() {
    System.out.println("I'm a function 3 in Student2");
  }

  public void funct4() {
    System.out.println("I'm a function 3 in Student2");
  }
}

public class AbstractMethod {
  public static void main(String[] args) {
    Student st = new Student2(); // this is 'dynamic method dispatch'
    st.funct();
    st.funct2();
    st.funct3();
    // st.funct4();
    // you can not call this method bcoz,
    // 'dynamic method dispatch' does not support this

  }
}
// 'dynamic method dispatch' =>
// works only for abstracted or overrided methods
// by this 'dynamic method dispatch',
// you can call that methods only which are present in parent class only
// but the executed code of method will be from body of child class