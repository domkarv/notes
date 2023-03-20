import java.util.Scanner;

public class RoundRobin {
  public static void main(String args[]) {
    int n, i, qt, count = 0, temp, sq = 0, bt[], wt[], tat[], rem_bt[];
    float awt = 0, atat = 0;
    bt = new int[10];
    wt = new int[10];
    tat = new int[10];
    rem_bt = new int[10];

    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the number of process: ");
    n = sc.nextInt();

    for (i = 0; i < n; i++) {
      System.out.print("Enter the execution time of " + "P" + (i + 1) + ": ");
      bt[i] = sc.nextInt();
      rem_bt[i] = bt[i];
    }
    System.out.print("Enter the quantum time: ");
    qt = sc.nextInt();
    while (true) {
      for (i = 0, count = 0; i < n; i++) {
        temp = qt;
        if (rem_bt[i] == 0) {
          count++;
          continue;
        }
        if (rem_bt[i] > qt)
          rem_bt[i] = rem_bt[i] - qt;
        else if (rem_bt[i] >= 0) {
          temp = rem_bt[i];
          rem_bt[i] = 0;
        }
        sq = sq + temp;
        tat[i] = sq;
      }
      if (n == count)
        break;
    }
    System.out.print("\nProcess  Burst  Turnaround  Waiting");
    for (i = 0; i < n; i++) {
      wt[i] = tat[i] - bt[i];
      awt = awt + wt[i];
      atat = atat + tat[i];
      System.out.print("\n   " + (i + 1) + "\t   " + bt[i] + "\t    " + tat[i] + "\t     " + wt[i]);
    }
    awt = awt / n;
    atat = atat / n;
    System.out.println("\n\nAverage waiting Time = " + awt);
    System.out.println("Average turnaround time = " + atat);
  }
}