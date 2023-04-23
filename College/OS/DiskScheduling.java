import java.util.Arrays;

public class DiskScheduling {

  public static int fcfs(int[] requests, int initialPosition) {
    int headMovements = 0;
    int currentPosition = initialPosition;

    for (int i = 0; i < requests.length; i++) {
      headMovements += Math.abs(requests[i] -
          currentPosition);
      currentPosition = requests[i];
    }
    return headMovements;
  }

  // SCAN disk scheduling algorithm
  public static int scan(int[] requests, int initialPosition, int upperBound) {
    int headMovements = 0;
    int currentPosition = initialPosition;

    Arrays.sort(requests);

    int i = 0;
    while (i < requests.length && requests[i] < initialPosition)
      i++;

    // move head to upper bound first
    headMovements += upperBound - currentPosition;
    currentPosition = upperBound;

    // process requests to the right of initial position
    for (; i < requests.length; i++) {
      headMovements += Math.abs(requests[i] -
          currentPosition);
      currentPosition = requests[i];
    }

    // process requests to the left of initial position
    headMovements += currentPosition; // add distance to initial position
    currentPosition = 0;
    for (i = i - 1; i >= 0; i--) {
      headMovements += Math.abs(requests[i] -
          currentPosition);
      currentPosition = requests[i];
    }

    return headMovements;
  }

  // Circular SCAN (C-SCAN) disk scheduling algorithm
  public static int cscan(int[] requests, int initialPosition, int upperBound) {
    int headMovements = 0;
    int currentPosition = initialPosition;

    Arrays.sort(requests); // sort requests in ascending order

    int i = 0;
    while (i < requests.length && requests[i] < initialPosition) {
      i++;
    }

    // move head to upper bound first
    headMovements += upperBound - currentPosition;
    currentPosition = 0;

    // process requests to the right of initial position (wrap around)
    for (; i < requests.length; i++) {
      headMovements += Math.abs(requests[i] -
          currentPosition);
      currentPosition = requests[i];
    }

    // move head to lower bound (0) and process requests to the right again
    headMovements += upperBound; // add distance to lower bound
    currentPosition = upperBound;
    for (i = 0; i < requests.length && requests[i] < initialPosition; i++) {
      headMovements += Math.abs(requests[i] -
          currentPosition);
      currentPosition = requests[i];
    }

    return headMovements;
  }

  public static void main(String[] args) {
    int[] requests = { 98, 183, 37, 122, 14, 124, 65, 67 };
    int initialPosition = 53;
    int upperBound = 199;

    System.out.println("FCFS head movements: " + fcfs(requests, initialPosition));
    System.out.println("SCAN head movements: " + scan(requests, initialPosition, upperBound));
    System.out.println("C-SCAN head movements: " + cscan(requests, initialPosition, upperBound));
  }
}