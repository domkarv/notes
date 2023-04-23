import java.util.concurrent.Semaphore;

public class ProducerConsumerSemaphore {

  private static final int BUFFER_SIZE = 5;
  private static Semaphore empty = new Semaphore(BUFFER_SIZE);
  private static Semaphore mutex = new Semaphore(1);
  private static Semaphore full = new Semaphore(0);
  private static int[] buffer = new int[BUFFER_SIZE];
  private static int in = 0, out = 0;

  public static void main(String[] args) {

    Thread producer = new Thread(new Runnable() {
      public void run() {
        for (int i = 0; i < 5; i++) {
          try {
            empty.acquire();
            mutex.acquire();

            buffer[in] = (int) (Math.random() * 10);
            int item = buffer[in++];
            System.out.println("Producer produced " + item);

            mutex.release();
            full.release();
          } catch (Exception e) {
            e.printStackTrace();
          }
        }
      }
    });
    producer.start();

    Thread consumer = new Thread(new Runnable() {
      public void run() {
        for (int i = 0; i < 5; i++) {
          try {
            full.acquire();
            mutex.acquire();

            int item = buffer[out++];
            System.out.println("Consumer consumed " + item);

            mutex.release();
            empty.release();
          } catch (Exception e) {
            e.printStackTrace();
          }
        }
      }
    });
    consumer.start();
  }
}