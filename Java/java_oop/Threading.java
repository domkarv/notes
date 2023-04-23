/* There are two ways to create a thread */
// 1) Thread class
// 2) Runnable interface

class Animal extends Thread {
  public void run() {
    int t = 50;
    while (t-- > 0) {
      System.out.println("thread 1");
    }
  }
}

class Animal2 implements Runnable {
  public void run() {
    int t = 50;
    while (t-- > 0) {
      System.out.println("thread 2 running");
    }
  }
}

public class Threading {
  public static void main(String[] args) {

    /* for Thread class */
    Animal an = new Animal();
    an.start();

    try {
      an.join(); // this will stop execution of another threads until execution of "an" thread.
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    /* for Runnable interface */
    // 1st way
    Animal2 an2 = new Animal2();
    Thread th = new Thread(an2);
    th.start();

    // 2nd way
    // Thread th2 = new Thread(new Animal2());
    // th2.start();

    // 3rd way
    // new Thread(new Animal2()).start();

    /*
     * All the 3 methods of Runnable inteface works for Thread class
     * but not of Thread class for Runnable interface
     */
  }
}