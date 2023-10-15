import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Shuffle {
    public static void main(String[] args) {
       
        Integer[] numbers = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> numberList = new ArrayList<>(Arrays.asList(numbers));
        Collections.shuffle(numberList);
        System.out.println( numberList);
    }
}
