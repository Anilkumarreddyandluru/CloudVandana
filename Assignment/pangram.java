import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine();
        
        Set<Character> alphabetSet = new HashSet<>();
        for (char ch = 'a'; ch <= 'z'; ch++) {
            alphabetSet.add(ch);
        }
        
        String cleanedSentence = inputSentence.toLowerCase().replaceAll("[^a-z]", "");
        Set<Character> uniqueLetters = new HashSet<>();
        for (char ch : cleanedSentence.toCharArray()) {
            uniqueLetters.add(ch);
        }
        
        if (uniqueLetters.equals(alphabetSet)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
