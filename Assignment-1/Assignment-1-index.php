Exercise 1
<?php 
Print "Hello, World!";
?>
<?php 
Echo "Hello, World!";
?>


Exercise 2
<?php
      Print  "// This is a single liner comment and second exercise."; 
    ?>


Multiple Liner
 <?php
       Print "/* This is 
        a multiple liner
        comment */";
    ?>



 Sum of Two numbers
   <?php
        
        /* This code takes 2 numbers and perform summation on them. */
        
        $number_1 = 10; // Number 1
        $number_2 = 20; // Number 2
        $sum = $number_1 + $number_2; // Summation of numbers.
        echo "Sum of 2 numbers: ", $sum; // printing them.
    ?>



    Use String functions:
strtolower()
  <?php
   $name = "Amrinder Singh";
   $name_in_small = strtolower($name);
   echo "Name: ", $name_in_small;
  ?>
strtoupper()
  <?php
   $name = "Amrinder Singh";
   $name_in_capital = strtoupper($name);
   echo "Name: ", $name_in_capital;
  ?>
strlen()
  <?php
   $name = "Amrinder Singh";
   $name_length = strlen($name);
   echo "Length of name: ", $name_length;
  ?>
str_word_count()
  <?php
   $line = "We are learning PHP!";
   $no_of_words = str_word_count($line);
   echo "No of words in a line: ", $no_of_words;
  ?>