import java.util.*;

public class PreSJF {
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter Number of Processes: ");
    int n = sc.nextInt();

    int pId[] = new int[n];
    int arrTime[] = new int[n];
    int execuTime[] = new int[n];
    int tempExecuTime[] = new int[n];
    int waitTime[] = new int[n];
    int turnTime[] = new int[n];
    int compTime[] = new int[n];
    int flag[] = new int[n];
    int st = 0, tot = 0;
    float WT = 0, TT = 0;

    for (int i = 0; i < n; i++) {
      System.out.print("Enter process " + (i + 1) + " arrival time and execution time: ");
      pId[i] = i + 1;
      arrTime[i] = sc.nextInt();
      execuTime[i] = sc.nextInt();
      tempExecuTime[i] = execuTime[i];
      flag[i] = 0;
    }

    while (true) {
      int min = 99, c = n;
      if (tot == n)
        break;

      for (int i = 0; i < n; i++) {
        if ((arrTime[i] <= st) && (flag[i] == 0) && (tempExecuTime[i] < min)) {
          min = tempExecuTime[i];
          c = i;
        }
      }

      if (c == n)
        st++;
      else {
        tempExecuTime[c]--;
        st++;
        if (tempExecuTime[c] == 0) {
          compTime[c] = st;
          flag[c] = 1;
          tot++;
        }
      }
    }

    for (int i = 0; i < n; i++) {
      turnTime[i] = compTime[i] - arrTime[i];
      waitTime[i] = turnTime[i] - execuTime[i];
      WT += waitTime[i];
      TT += turnTime[i];
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
}