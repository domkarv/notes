import java.util.*;

public class Java_Strings {
   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);

      char name4 = 'O';
      // name4 = sc.next().charAt(3);
      System.out.println(name4);

      String name1 = "Omkar";
      String name2 = "Date";
      String name3 = "Omkar";

      // concatenation of Strings
      String name = name1 + name2;
      System.out.println(name);

      // String length
      System.out.println(name.length());

      // printing characters of string
      for (int i = 0; i < name.length(); i++) {
         System.out.print(name.charAt(i) + " ");
      }
      System.out.println();

      // compare strings
      System.out.println(name1.compareTo(name2)); // name1 > name2 => +ve value
      System.out.println(name1.compareTo(name3)); // name1 == name2 => 0 value
      System.out.println(name2.compareTo(name1)); // name2 < name1 => +ve value
      System.out.println(name1.equals(name3)); // name1 == name2 => true
      System.out.println(name1.equals(name2)); // name1 == name2 => false

      // substring
      System.out.println(name.substring(0, 4));
      // character at index 4 will never print.
      // it will print characters from 0 to 4-1.

      System.out.println(name.substring(4, name.length()));
      // it will print characters from 4 to name.length()-1.
   }
}