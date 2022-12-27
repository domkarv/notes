public class Java_Strings2 {
   public static void main(String[] args) {

      // Since the String Class in Java creates an immutable(not changeable) sequence
      // of characters,
      // the StringBuilder class provides an alternative to String Class, as it
      // creates a mutable(changeable) sequence of characters.

      StringBuilder sb = new StringBuilder("Omkar");
      System.out.println(sb);

      // same function as string class
      System.out.println(sb.charAt(0));

      /* ------------------- */
      /* not in string class */
      /* ------------------- */

      // insert char at index n
      sb.insert(3, 'O');
      System.out.println(sb);

      // set char at index n
      sb.setCharAt(3, 'W');
      System.out.println(sb);

      // delete char at index n
      sb.delete(2, sb.length());
      System.out.println(sb);

      // append characters in string
      sb.append("Date");
      System.out.println(sb);
   }
}