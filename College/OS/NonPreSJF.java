import java.util.Scanner;

public class NonPreSJF {
  public static void main(String[] a) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter Number of Processes: ");
    int n = sc.nextInt();

    int pId[] = new int[n];
    int arrTime[] = new int[n];
    int execuTime[] = new int[n];
    int waitTime[] = new int[n];
    int turnTime[] = new int[n];
    int compTime[] = new int[n];
    int temp;
    float WT = 0;
    float TT = 0;

    for (int i = 0; i < n; i++) {
      System.out.print("Enter process " + (i + 1) + " arrival time and execution time: ");
      arrTime[i] = sc.nextInt();
      execuTime[i] = sc.nextInt();
      pId[i] = i + 1;
    }

    int x = leastArrTime(arrTime);
    if (x != 0) {
      temp = execuTime[x];
      execuTime[x] = execuTime[0];
      execuTime[0] = temp;

      temp = arrTime[x];
      arrTime[x] = arrTime[0];
      arrTime[0] = temp;

      temp = pId[x];
      pId[x] = pId[0];
      pId[0] = temp;
    }

    for (int i = 1; i < n - 1; i++) {
      for (int j = 1; j < n - 1 - i; j++) {
        if (execuTime[j] > execuTime[j + 1]) {
          temp = execuTime[j];
          execuTime[j] = execuTime[j + 1];
          execuTime[j + 1] = temp;

          temp = arrTime[j];
          arrTime[j] = arrTime[j + 1];
          arrTime[j + 1] = temp;

          temp = pId[j];
          pId[j] = pId[j + 1];
          pId[j + 1] = temp;
        }
      }
    }

    for (int i = 0; i < n; i++) {
      // Completion Time
      if (i == 0)
        compTime[i] = arrTime[i] + execuTime[i];
      else {
        if (arrTime[i] > compTime[i - 1])
          compTime[i] = arrTime[i] + execuTime[i];
        else
          compTime[i] = compTime[i - 1] + execuTime[i];
      }

      // Waiting Time
      if (i == 0)
        waitTime[i] = 0;
      else
        waitTime[i] = compTime[i - 1] - arrTime[i];

      // Turnaround Time
      turnTime[i] = execuTime[i] + waitTime[i];

      WT = WT + waitTime[i];
      TT = TT + turnTime[i];
    }

    System.out.println("\npID  arrTime execuTime compTime waitTime turnTime");
    for (int i = 0; i < n; i++) {
      System.out
          .println(
              pId[i] + "\t" + arrTime[i] + "\t" + execuTime[i] + "\t  " + compTime[i] + "\t   " + waitTime[i]
                  + "\t    " + turnTime[i]);
    }

    System.out.println("\nAvg Waiting Time: " + WT / n);
    System.out.println("Avg Turnaround Time: " + TT / n);
  }

  static int leastArrTime(int arr[]) {
    int temp = arr[0];
    int ind = 0;
    for (int i = 1; i < arr.length; i++) {
      if (temp > arr[i]) {
        temp = arr[i];
        ind = i;
      }
    }
    return ind;
  }
}