public class Practice {
  static void printArray(int arr[]) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  static void printArray(int arr[][]) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = 0; j < arr[i].length; j++) {
        System.out.print(arr[i][j] + " ");
      }
      System.out.println();
    }
  }

  static int[] swap(int arr[], int i, int j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
    return arr;
  }

  static int[] reverse(int arr[], int start, int end) {
    while (start < end) {
      swap(arr, start++, end--);
    }
    return arr;
  }

  static int[][] transpose(int[][] arr) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = i + 1; j < arr[i].length; j++) {
        int temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
    return arr;
  }

  static int[][] pascalTriangle(int n) {
    int arr[][] = new int[n][];
    for (int i = 0; i < n; i++) {
      arr[i] = new int[i + 1];
      arr[i][0] = arr[i][i] = 1;

      for (int j = 1; j < i; j++) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
    return arr;
  }

  public static void main(String[] args) {
    int[][] arr = {
        { 1, 2, 3, 4 },
        { 1, 2, 3, 4 },
        { 1, 2, 3, 4 },
    };

    int rowStart = 0;
    int rowEnd = arr[0].length - 1;
    int colStart = 0;
    int colEnd = arr.length - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
      for (int row = rowStart; row <= rowEnd; row++) {
        // System.out.print(arr[rowStart][row] + " ");
        System.out.println("(" + rowStart + " " + row + ")");
      }

      colStart++;
      for (int col = colStart; col <= colEnd; col++) {
        // System.out.print(arr[col][rowEnd] + " ");
        System.out.println("(" + col + " " + rowEnd + ")");
      }

      rowEnd--;
      for (int row = rowEnd; row >= rowStart; row--) {
        // System.out.print(arr[colEnd][row] + " ");
        System.out.println("(" + colEnd + " " + row + ")");
      }

      colEnd--;
      for (int col = colEnd; col >= colStart; col--) {
        // System.out.print(arr[col][rowStart] + " ");
        System.out.println("(" + col + " " + rowStart + ")");
      }

      rowStart++;
    }
  }
}