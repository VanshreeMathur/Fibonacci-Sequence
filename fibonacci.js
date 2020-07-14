/*
Made By: Vanshree Mathur
 */

package com.company;


import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        //Declaration of Variables
        int n;
        int fValue;

        Scanner reader = new Scanner(System.in); // Creating an object from the Scanner class

        System.out.println("Please input the nth fibonacci series number: ");
        n = reader.nextInt(); // n = nth number

        //Calculates the time taken for the Recursive Fibonacci Series
        long startTime = System.nanoTime();

        System.out.print("nth Value: "+ fiboSeriesRec(n)); //Calling Recursive method and prints out the nth value
        System.out.println();

        long totalTime = System.nanoTime() - startTime; //Difference between the start and end time (In nanoseconds)

        System.out.println("Total time = " + totalTime);
        System.out.println();

        //Calculates the time taken for the Iterative Fibonacci Series
        long startT = System.nanoTime();

        System.out.println("The series: ");
        fiboSeriesIte(n); //Prints out the entire series of numbers until 'n'

        long totalT = System.nanoTime() - startT; //Difference between the start and end time (In nanoseconds)

        System.out.println("Total time = " + totalT);
        System.out.println();
    }

    //Recursive Fibonacci Sequence
    public static long fiboSeriesRec(int n)
        {
            //If n = 1, print out 0
            if (n == 1)
            {
                return 0;
            }

            //If n = 1, print out 1
            else if (n == 2)
            {
                return 1;
            }

            //Else, for any other n, recursively calculate the nth value by adding the previous two numbers
            return fiboSeriesRec(n - 1) + fiboSeriesRec(n - 2);
        }

    //Iterative Fibonacci Sequence
    public static void fiboSeriesIte(int n)
    {
        //Declare the array
        long[] a = new long[n+2];

        //Set values for a[n] if n = 1, or 2
        a[1] = 0;
        a[2] = 1;

        //Loop that calculates the next term based on the previous two terms in the array
        for (int i = 2; (i+1) <= n; i++)
        {
            a[i+1] = a[i]+a[i-1];
        }

        //Prints out each number in the array
        for (int i = 1;i <= n; i++)
            System.out.println(a[i]);
    }
}
