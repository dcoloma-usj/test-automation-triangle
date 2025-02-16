# A VERY BASIC IMPLEMENTATION OF THE TRIANGLE PROBLEM IN HTML5

This is a very basic implementation of the Triangle problem. 
It consists in an web page (index.html) where the user inserts the size of the 
three lenghts of the triangle. When the user clicks on “calculate” button, it 
reads the sizes and uses an external script (available in file script.js) 
to calculate the triangle type. The result retrieved from that external screen 
is displayed in the web page.

1 - Load index.html in any web browser and check if it works properly.

SOME AUTOMATIC TESTS

We are going to implement some tests in order to verify that the software works 
properly. In particular, we are going to focus on the script.js script, on 
the getTriangleType() method. 

In order to do it we are going to use a library that is called mocha that allows 
the automatic execution of tests as well as showing the results in a way easy to 
be understood.

In particular we are going to use two files

test.html that is the skeleton part that executes the test and shows the graphical 
information about the results.

tests.js that is where the tests are defined and implemented. 

2 - Have a look at the content of tests.js. Check the information used for every test.

3 - Load test.html in any web browser and check the results.

It executes the different tests (grouped by categories) and shows the result 
(green means all the tests executed succesfully).

4 - Add one more test to tests.js. Open again test.html and check that the new test 
has been executed.

5 - Break the functionality of triangle.js and check the results of executing again 
test.html.
