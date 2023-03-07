import java.util.Scanner;

public class Priority {
  public static void main(String[] a) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter Number of Processes: ");
    int n = sc.nextInt();

    int pId[] = new int[n];
    int arrTime[] = new int[n];
    int execuTime[] = new int[n];
    int priority[] = new int[n];
    int compTime[] = new int[n];
    int turnTime[] = new int[n];
    int waitTime[] = new int[n];
    int temp;
    float WT = 0;
    float TT = 0;

    for (int i = 0; i < n; i++) {
      System.out.print("Enter process " + (i + 1) + " arrival time, execution time and priority: ");
      arrTime[i] = sc.nextInt();
      execuTime[i] = sc.nextInt();
      priority[i] = sc.nextInt();
      pId[i] = i + 1;
    }

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n - (i + 1); j++) {
        if (priority[j] > priority[j + 1]) {
          temp = arrTime[j];
          arrTime[j] = arrTime[j + 1];
          arrTime[j + 1] = temp;

          temp = priority[j];
          priority[j] = priority[j + 1];
          priority[j + 1] = temp;

          temp = execuTime[j];
          execuTime[j] = execuTime[j + 1];
          execuTime[j + 1] = temp;

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

    System.out.println("\npID  priority  arrTime execuTime compTime waitTime turnTime");
    for (int i = 0; i < n; i++) {
      System.out
          .println(
              pId[i] + "\t" + priority[i] + "\t  " + arrTime[i] + "\t  " + execuTime[i] + "\t    " + compTime[i]
                  + "\t\t"
                  + waitTime[i]
                  + "\t" + turnTime[i]);
    }

    System.out.println("\nAverage waiting time: " + (WT / n));
    System.out.println("Average turnaround time:" + (TT / n));
  }
}