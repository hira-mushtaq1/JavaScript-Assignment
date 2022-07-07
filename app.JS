//Chapter:1- ALERTS
 //Q1 Write a script to greet your website visitor using JS alert box.

alert("Assalam.o.Alaikum! User");

//Q2. script to display error:

alert("Error! Please enter a valid password.");

//Q3. Script to write welcome 
alert("Welcome to JS Land... \n Happy Coding!");

//Q4. Script to display welcome, happy coding:

alert("Welcome to JS Land...");
alert("Happy Coding! \n Prevent this page from creating additional dialogs.");

//Q5.display hello in developer''s console:

alert("Hello..! can run JS through my browser's console");

//Q6. MAke an alert in your existing/new html & Css project.
//1. In Head 

alert("I'm inside body ");


//Chapter#2 VARIABLES FOR STRINGS
//Q1. declare a variable called username:

var username;

//Q2. Declare a variable called myName and Assignm it a string that represents your full name:

var myName= "Hira Mushtaq";

//Q3. declare variable as message; assign hello world to variable message then display by alert.

var message= "Hello World";
alert(message);

//Q4. Student Biodata in JS variables then show it in alert;
var studentName= "Jhone Doe";
var age= "15 Years old";
var skills= "Certified Mobile Application Development";
alert(studentName);
alert(age);
alert(skills);

// Q5. Write a script to display the following alert using one JS variable.

alert("Pizza \n Pizz \n Piz \n Pi \n P");

//Q6. Declare variable email:

var email= "hira2332001@gmail.com";
alert("My email address is " + email);

//Q7. Declare a variable=book give it vale=A smart way to learn JavaScript display by using alert.

var book ="A smart way to learn JavaScript";
alert("I'm trying to learn from the Book "+ book);

// Q8. Write a script to display this in the browser through JS.

document.write("Yah! I can Write HTML content through JavaScript <br> ");

//Q9. store string in a variable.
var newString= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(newString);


//chapter#3: VARIABLES FOR NUMBERS
//Q1. declare variable as age and assign it your age. show your age in alert box.

var age= 20;
alert(age);

//Q2. visitors visit on website:
var visit= 14;
alert("You have visited site "+visit+"times " );

//Q3. declare variable=birthyear assign it your birth year. show this message in browser.

var birthYear= 2001;
b= (typeof birthYear)
document.write("My birth year is "+ birthYear + " <br>  Data type of my declared variable is " +b+"<br>" )


//Q4.  visitors biodata
var visitorName= "John Doe";
var quantity="5 T-shirt(s)";
var store= "XYZ Clothing store";

document.write(visitorName + " ordered "+quantity +" on " + store+"<br>" );

// Chapter#4: VARIABLES NAMES: LEGAL AND ILLEGAL

//Q1. Declare 3 Variables in one statement
var a,b,c;


//Q2. Display 5 legal & Illegal variables
//legal
var abc= "legal1";
var abcXyz="legal2";
var abc_xyz="legal3";
var $hira="legal4";
var abc123="legal5";
//illegal
var 123= "illegal1";
var @133 = "illegal2";
var abc xyz= "illegal3";
var var = "illegal4";
var true = "illegal5";

//display this in your browser:
/*a) a heading starting "Rule for naming JS variables"
b) variable names only contain,_________,__________,________ and _________.
For Example $my_1stVariable
c) Variable must begin with a _________, ________ or __________. For example $name, _name or name.
d) variable name are case ____________
e) variable names should not be JS__________*/

document.write(" <h1>Rules For naming JS Variable </h1> Variable name can only contain , numbers, $ and _. For example: $my_1stVariable <br>  Variable must begin with a letter, $ or _. For example: $name, _name or name <br> Variable name are case sensirive <br> Variable names should not be JS Keywords <br>")


//chapter:5 MATH EXPRESSIONS
//Q1. program that takes two  number then add and show result in brower.
var num1= 3;
var num2= 5;
var sum= num1+num2;
document.write("Sum of "+num1 +" and "+num2+" is "+ sum+"<br>");

// Subtraction:
var num1= 5;
var num2= 3;
var sub= num1-num2;
document.write("Subtraction of "+num1 +" and "+num2+" is "+ sub+"<br>");

//Division:
var num1= 15;
var num2= 5;
var div= num1/num2;
document.write("Division of "+num1 +" and "+num2+" is "+ div+"<br>");

//Multiplication:

var num1= 3;
var num2= 5;
var mul= num1*num2;
document.write("Multiplication of "+num1 +" and "+num2+" is "+ mul+"<br>");

// Modulus:

var num1= 12;
var num2= 5;
var mod= num1%num2;
document.write("Modulus of "+num1 +" and "+num2+" is "+ mod+"<br>");

//Q3.a) Declare a variable:
var a;

//b) show the value of variable in your browser:
document.write("Value after variable declaration is "+ a  +"<br>");

//c) initialize the variable with some number;
a= 5;

// d) show the initiao value in browser:
document.write("Initial value: "+ a+"<br>");

//e) increment the variable:
a= ++a;

//f) value of variable in your browser like "value after increment is: 6".
document.write("Value after increment is: "+a+"<br>");

//g) add 7 to the variable:
a = a+7;

// h) show the value in browser:
document.write("Value after addition is: "+ a+"<br>");

//i) decrement the variable;

a=--a;

//j) show the decremented value  in browser:

document.write("The value after decrement is: "+ a+"<br>");

//k) show the remainder after dividing the variable's value by 3.

a= a%3;

// l) output:

document.write("The remainder is: "+a+"<br>");


//Q4. cost of movie ticket is 600PKR store it in a variable; calculate cost of 5 tickets

var movieTicket=600;
var movieTicket_five=movieTicket*5;
document.write("The cost of buy 5 tickets to a movie is "+movieTicket_five+"PKR"+"<br>");

//Q5. table of 4;
var a= 4;
for (var i=1;i<=10; i++){
    document.write(a +"x "+i+ " = "+a*i +"<br>");
}

// Q6. conversion celsius to fahrenheit.

var c = 25;
var f = 70;
var converted_celsius_temp=(f-32)*5/9;
var converted_fahrenheit_temp=(c*9/5)+32;
document.write(c+" C is "+converted_fahrenheit_temp+"F <br>");
document.write(f+" F is "+converted_celsius_temp+"C <br>");


// Q7. write a program to implement checkout process of shopping cart system:

var item_1=650;
var item_2=100;
var quantity_1= 3;
var quantity_2= 7;
var shipping_charges= 100;
var total_cost=item_1*3+item_2*7+100;

document.write("Price of item 1 is "+item_1+"<br>");
document.write("Quantity of item 1 is "+quantity_1+"</br> Price of item 2 is "+item_2+"<br> Quantity of item 2 is "+quantity_2+"</br> Shipping Charges "+shipping_charges+"</br> Total cost of your order is "+total_cost+"<br>");


//Q8. Store total marks and mark obtained by the stident in 2 variables. compute percentage and show result in your browser.
var total = 980;
var obtained= 804;
var percentage=(obtained/total)*100;

document.write("<h1>Mark Sheet </h1>");
document.write("Total marks: "+total+"<br> Mark obtained: "+obtained+"<br>Percentage: "+percentage+" %<br>")

//Q9.conversion in pakistani rupee...//1US=104.80PKR; 10US= ?PKR; 1Riyal=28PKR; 25riyal=?PKR
var pak_currency= 104.80*10+25*28;
document.write("<h1> Currency in PKR </h1> Total Currency in PKR: "+pak_currency)


//Q10. initialize a variable with some number; add  5; multiply by 10; dovide the result by 2; perform all exp in single expression

var num= ((10+5)*10)/2;


//Q11. Age Calculator:

var current_year= 2022;
var birth_year= 2001;
var age= current_year-birth_year;
document.write("<h1> Age Calculator </h1> Current Year: "+current_year+"</br> Birth Year: "+birth_year+"<br> Your Age: "+age);


//Q12. Properties of a circle;

var radius= 20;
var circumference= 2*3.142*20; //2*pi*r ; pi=3.142
var area= 3.142*20*20;   //pi*r^2
document.write("<h1> The Geometrizer </h1> Radius of circle: "+radius+"<br> The Circumference is: "+circumference+"<br> The area is: "+area);


//Q13. Life Time supply calculator:

var fav_snk= "Lays";
var age= 21;
var max_age= 40;
var amount_of_snk_per_day= 2;
var total= ((40-21)* 365)*2;  // 1year=365 days; total years 19 19x365; per lays a day=2 19x365x2

document.write("<h1> Life Time Supply Calculator</h1> Favorite Snack: "+fav_snk+"<br> Current age: "+ age+"<br> Estimated maximum Age: "+max_age+"<br> Amount of snacks per day: "+amount_of_snk_per_day+"<br> You will need "+total+" " +fav_snk+" to last you until the rip age of " +max_age +"</br>")

//Chapter#6-9: MATH EXPRESSIONS
/*Q1. program to take variable;
var a= 10;
//a = ++a;    1+10=11
//a= a++;     11+1= 12
//a=--a;      12-1= 11
//a=a--;      11-1=10 */
document.write("<h4> Result</h4> The value of a is: "+a +"<br>...................................<br> The value of a++ is: " + ++a + "<br> Now the value of a is: "+a + "<br> The value of a++ is: "+ a++ + "<br> Now the value of a is: "+ a + "<br> The value of --a is: " + --a + "<br> Now the value of a is: "+ a +"<br> The value of a-- is: " + a-- + "<br> Now the value of a is: "+ a +"<br>" );


//Q2. what will be the output in a variable a,b and result var a=2, b=1; var result= --a - --b + ++b+b--;
/*--a;    2- 1= 1
--a - --b;  0 - 0= 0
--a - --b + ++b;  0 - 0= 0
--a - --b + ++b + b--;   0 -0+0=0  */

var a =2;
var b=1;
var result= --a - --b + ++b+b--; // 1- 0 + 1 + 1 = 3
document.write("a is: "+ a + "<br> b is: "+b+ "<br> result is: "+result +"<br>");


// //Q3. Write a program that inputs a name from user and greet the user.

var a=prompt("Enter your name;");
alert("Welcome");

//Q4. input a number diplay its multiplication table on your browser , if user doesn't enter any number set 5 as default.

var a= prompt("Enter any number you want", "5");
for (var i=1;i<=10; i++){
document.write(a +"x "+i+ " = "+a*i +"<br>");
 }

//Q5. student report:

var a= prompt("Enter your marks", "English");
a=+a //convert string into int
var b=prompt("Enter your marks", "Math");
b=+b
var c=prompt("Enter your marks", "Urdu");
c=+c
var total_marks= 300;
var obtained_marks= a+b+c; //54+54+48=156
var percentage=(obtained_marks/total_marks)*100; //(156/300)*100 
// console.log(obtained_marks);    .....156
// console.log(percentage) .... 52%

document.write("<table><tr><th> Subject</th><th> Total Marks </th><th> Obtained Marks </th> <th> Percentage</th> </tr> <tr> <td> English </td><td> 100 </td><td> 54 </td><td>54% </td> </tr> <tr><td>Math</td><td> 100 </td><td>54 </td></tr><tr><td> Urdu </td><td> 100 </td><td> 48</td></tr><tr> <td></td> <td> <b> 300 </b></td> <td><b> 156</b> </td> <td> <b> 52%  </b> </td> </tr></table>")


//Chapter9-11: USER INPUT & CONDITIONAL STATEMENT

/* Q1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”*/
var city= prompt("Enter Your City: ").toLowerCase();
if(city=="karachi"){
    alert( "Welcome to the city of lights" )
}


/* Q2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.*/

var gender=prompt("Enter your Gender").toLowerCase()
if (gender=="male"){
 alert ("Good Morning Sir")
}
else if(gender=="female"){
    alert ("Good Morning Ma'am")
}

/* Q3. . Write a program to take input color of road traffic signal
from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now */

var color=prompt("Enter Your color");
if(color=="Red"){
    alert ("Must Stop")
}
else if(color=="Yellow"){
    alert ("Ready to move")
}
else if(color=="Green"){
    alert ("Move now")
}

/* Q4. Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”.*/

var remaining_fuel=prompt("Enter your fuel");
if(remaining_fuel<0.2){
alert("Please refill the fuel in your car")
}

/*Q5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.*/

//a)
var a = 4;    // a= 4
if (++a === 5){    // +1 +4=5
alert("given condition for variable a is true");
 }

//b)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//c)
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


// e)
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

//f) 
if("car" < "cat"){
        alert("car is smaller than cat");
        }


/* Q6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:

Percentage%                     Grade         Remarks
Greater than or eqauls to 80    A-one         Excellent
Greater than or eaquals to 70   A             Good
Greater than or equals to 60    B             You need to improve
Less than 60                    Fail          Sorry

Show the total marks, marks obtained, percentage, grade &
remarks like:*/

var a=prompt("Enter English Marks");
a=+a
var b=prompt("Enter Math Marks");
b=+b
var c=prompt("Enter Urdu Marks");
c=+c

var obtained_mk= a+b+c;
//console.log(obtained_mk)
var total_mk = 300;
var percent= (obtained_mk/total_mk)*100;
//console.log(percent)


if(percent>=80){
    alert("A-one Grade; Excellent")

}
else if(percent>=70 && percent<=79){
    alert("A-Grade, Good")
}
else if(percent>=60 && percent<=69){
    alert("B-Grade, You need to Improve")
}
else if(percent<60){
    alert("Fail, Sorry")
}

var remarks=prompt("Enter your remarks")

document.write("<h1>Mark Sheet</h1>  Total Marks: "+total_mk+ "<br> Marks Obtained: "+obtained_mk+ "<br> Percentage: "+percent+ "<br> Remarks: "+ remarks)


//* Q.7)
/* Guess game: Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/ 
var secret_num= 7;
var user_guess=parseInt(prompt("enter your number"))
if (user_guess===secret_num){
        alert("Bingo")}
else if(user_guess+1===secret_num)
       {
       alert("Close Enough to the correct answer")
    }
    


/* Q.8 Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.*/

var a =parseInt(prompt("Enter your number: "));
if(a%3===0){
    alert("The number you typed is the multiplier of 3");
}

/* Q.9 Write a program that checks whether the given input is an
even number or an odd number.*/

var a = parseInt(prompt("Enter your number"));
if (a%2===0){
    alert("The Number you typed is an Even Number")
}
else{
    alert("The Number you typed is an odd Number")

}

/*Q10.
 Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/

var temp = parseInt(prompt("enter temp"));
if (temp  > 40){
    alert("It is too hot outside")
}
else if(temp > 30){
    alert("The Weather today is Normal")
}
else if(temp > 20){
    alert("Todays Weather is cool")
}
else if(temp > 10){
    alert("OMG! Todays weather is so Cool")
}

//Q11. 
/*Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

var num1= parseInt(prompt("Enter First number: "));
var num2=parseInt(prompt("Enter second number: "));
var operation=prompt("Enter any operation you want");
if(operation==="+"){
    alert(num1+num2)
}

if(operation==="-"){
    alert(num1-num2)
}
else if(operation==="*"){
    alert(num1*num2)
}
else if(operation==="/"){
    alert(num1/num2)
}
else if(operation==="%"){
    alert(num1%num2)
}

// Chapter 12-13 IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS;

/* Q1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).*/

var asc_Cas=prompt("Enetr your case");  // ASCII A,a,Z,z=65, 97,90,122
if(asc_Cas==="A"){
    alert("65")

}
if(asc_Cas==="Z"){
    alert("90")

}
if(asc_Cas==="a"){
    alert("97")

}
if(asc_Cas==="z"){
    alert("122")

}


/* Q2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.*/

var num1= parseInt(prompt("Enter 1st number: "));
var num2=parseInt(prompt("Enter 2nd number: "));

if(num1> num2 ){
    alert("Num 1 is larger")
}
else if(num1<num2){
    alert("Num 2 is larger")

}
else if(num1===num2){
    alert("Num 1 and Num 2 are Equal")
}

/* Q3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero. */

var num= parseInt(prompt("Enter any number: "));
if(num<0){
    alert("The number is negative")
}
else if(num>0){
    alert("The number is positive")
}
else if(num===0){
    alert("The Number is Zero")
}

/*Write a program that takes a character (i.e. string of
    length 1) and returns true if it is a vowel, false otherwise*/

var char = prompt("Enter any character/Alphabet: ");
if(char==="a"  || char==="e" ||char==="i" || char==="o"  ||char==="u" ){
    alert("true")

}
else{
    alert(false)
}
    
/*Q5.  write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise. */

var org_pass="thaira123";
var user_pass=prompt("Enter user password");
if(user_pass===""){
    alert("Please enter your password")
}
else if(user_pass===org_pass){
    alert("Correct! The password you entered matches the original password")
}

else if(user_pass!=org_pass){
    alert("Incorrect password") 
}

/* Q6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/


var greeting;
var hour= 13;
if (hour<18){
   greeting= "Good day"
}
else{
    greeting= "Good evening"
}

 /* Q7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements*/

var user_time= prompt("Enter your time");
if (user_time>=0000 && user_time <1200){
    alert("Good Morning")
}
else if(user_time>=1200 && user_time<1700){
    alert("Good AfterNoon")
}
else if(user_time>=1700 && user_time<2100){
    alert("Good Evening")
}
else if(user_time>=2100 && user_time<=2359){
    alert("Good Night")
}

//Chapter 14-16: ARRAYS

/*1. Declare an empty array using JS literal notation to store
student names in future.*/

var arr=[];

/* 2. Declare an empty array using JS object notation to store
student names in future.*/
var arr={}

/*3. Declare and initialize a strings array.*/
var arr =["Hira", "Hania","summiya"];

/*4. Declare and initialize a numbers array. */

var arr=[1,2,3,4,5];

/* 5. Declare and initialize a boolean array. */
var arr=["true", "false"]

/* 6. Declare and initialize a mixed array. */
var arr= ["Hira","Laveezah", "Ansa" ,5,"Thanvi", "Usama",4, "Zaigham","Bilal", 1, 6];

/*7.  Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like: */

var arr=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(<h1> Qualifications </h1>+"1)"+arr[0]+"<br> 2)"+arr[1]+"<br> 3)"+arr[2]+"<br> 4)"+arr[3]+"<br>5) "+arr[4]+"<br> 6)"+arr[5]+"<br> 7)"+arr[6]+"<br> 8)"+arr[7]);


/*8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */

var stu_arr=["Michael", "John","Tony" ];
var score_arr=[320, 230,480];
var tot= 500;
var percent_mic=(320/500)*100;
var percent_jhn=(230/500)*100;
var percent_tny=(480/500)*100;
document.write("Score of "+stu_arr[0]+"is "+score_arr[0]+". Percentage:"+percent_mic+"%"+"<br> Score of "+stu_arr[1]+"is "+score_arr[1]+". Percentage:"+percent_jhn+"%"+"<br>Score of "+stu_arr[2]+"is "+score_arr[2]+". Percentage:"+percent_tny+"%")


/* 9. Initialize an array with color names. Display the array
elements in your browser.*/

var arr_col=["Red","Blue","Green","White","Black"];
document.write(arr_col+"<br>");

/*a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.*/

arr_col.unshift("Pink");
document.write(arr_col+"<br>");

/* b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.*/ 

arr_col.push("Light green");
document.write(arr_col+"<br>");

/* c. Add two more color to the beginning of the array.
Display the updated array in your browser.*/

arr_col.unshift("Orange","Violet")
document.write(arr_col+"<br>");

/* d. Delete the first color in the array. Display the updated
array in your browser.*/

arr_col.shift();
document.write(arr_col+"<br>");

/* e. Delete the last color in the array. Display the updated
array in your browser.*/

arr_col.pop();
document.write(arr_col+"<br>");

/*f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.*/

var a = prompt("Enter Index Number");   //suppose index=4
var b = prompt("Enter color names")
arr_col[a]=b
document.write(arr_col+"<br>");

/*g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your
browser.*/

var a_1 = prompt("Enter Index Number");
var b_1= prompt("Enter how many colors you wanna delete")   //suppose index=2
arr_col.splice(a_1,b_1)
document.write(arr_col+"<br>");

/* 10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.*/

var std_scr= [320,230,480,120];
//std_scr.sort(); //120, 230, 320, 480

document.write("Scores of Students: "+std_scr+"<br> Ordered scores of students: "+std_scr.sort()+"<br>")

/*11.  Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.*/

var cities_name= ["Karachi", "Laore", "Islambad", "Quetta", "Peshawar"];
var selected_cities= cities_name.slice(2,4)
document.write("<b> Cities List: "+cities_name+"<br> Selected Cities List: "+selected_cities+" </b> </br> ")

/*12.  Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/

var arr = ["This", "is", "my", "cat"];
var arr_join=arr.join(" ")
document.write("<b> Array: "+arr+"<br> String: "+arr_join+"<br>")


/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)    */

var arr_device = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h1> Devices:</h1> "+arr_device+"<br>")
var a = arr_device.shift()
document.write("<h1> FIFO(First IN First Out Implementation </h1><b>Out: "+"<br>"+a+"</b><br>")
var a = arr_device.shift()
document.write("<b>Out: "+"<br>"+a+"</b><br>")
var a = arr_device.shift()
document.write("<b>Out: "+"<br>"+a+"</b><br>")
var a = arr_device.shift()
document.write("<b>Out: "+"<br>"+a+"</b><br>")

/*14.  Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out) */

var arr_device = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h1>Devices: </h1>"+arr_device+"<br>")
var a = arr_device.pop()
document.write("<h1> LIFO(Last IN First Out Implementation </h1><b> Out: "+"<br>"+a+"</b><br>")
var a = arr_device.pop()
document.write("<b>Out: "+"<br>"+a+"</b><br>")
var a = arr_device.pop()
document.write("<b>Out: "+"<br>"+a+"</b><br>")
var a = arr_device.pop()
document.write("<b>Out: "+"<br>"+a+"</b><br>")

 /* 15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method: */

var phn_mnfr= ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select> <option>"+phn_mnfr[0]+"</option> <option>"+phn_mnfr[1]+"</option> <option>"+phn_mnfr[2]+"</option> <option>"+phn_mnfr[3]+"</option> <option>"+phn_mnfr[4]+"</option> <option>"+phn_mnfr[5]+"</option></select>")


// Chapter17-20: ARRAYS AND LOOP:

/* 1. Declare and initialize an empty multidimensional array.
(Array of arrays)*/
var arr= [[1,2,3], [4,5,6],[7,8,9]];

/*2. Declare and initialize a multidimensional array
representing the following matrix:  */

var arr_1=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

/*3. Write a program to print numeric counting from 1 to 10 */
for(var i=0; i<=10; i++){
document.write(i+"<br>")}

/*4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user. */


var a= prompt("Enter a Number to show multiplication table");
var b= prompt("Enter length");
for(i=1; i<=b;i++){
    document.write(a+"x"+i+"="+a*i+"<br>");
}


/* 5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */

var arr_frts= ["apple", "banana", "mango", "orange", "strawberry"];
document.write(arr_frts+"<br> Element is on Index 0 is "+arr_frts[0]+"<br> Element is on Index 1 is "+arr_frts[1]+"<br> Element is on Index 2 is "+arr_frts[2]+"<br> Element is on Index 3 is "+arr_frts[3]+"<br> Element is on Index 4 is "+arr_frts[4]+"<br>");


/* 6. Generate the following series in your browser. See
example output.*/

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h1>Counting: </h1>")
for(i=1; i<=15; i++){
document.write(i+" , ")}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("<h1>Reverse Numbers: </h1>")
for(i=10; i>0; i--){
document.write(i+" , ")}

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<h1>Even Numbers starting from 0: </h1>")
for(i=0; i<=20; i+=2){
   {
        document.write(i+" , ");
    }
}
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h1>Odd Numbers: </h1>")

for(i=1; i<=20; i+=2){
   {
        document.write(i+" , ");
    }
}

//e.  Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h1>Even Numbersstarting from 2: </h1>")
for(i=2; i<=20; i+=2){
    {
        document.write(i+"K , ");
    }
}


/* 7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */

document.write("<h1>Checking where the item is present or not </h1> ")

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_gs= prompt("Welcome to ABC Bakery..What do you wanna order MA'am/Sir");
flag = true;
for(i=0;i<a.length; i++){
    if(user_gs===a[i]){
        document.write("The Item you are searching is present: "+user_gs+"<br>"+user_gs+" is present at Index: Number "+i)
        break
    }
    else{
        flag=false
    }
}
if(flag===false){
    document.write("We are sorry : "+user_gs+" is not available in our bakery<br>")
}

/* 8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12]. */

var arr_new=[24, 53, 78, 91, 12]
//Math.max(...arr_new)// ... will work on array sing max will not work on array

document.write("<h1>Array ITems: </h1>"+arr_new+"<br> The Largest Number is: "+Math.max(...arr_new))

/* 9. Write a program to identify the smallest number in the
given array.A = [24, 53, 78, 91, 12] */


document.write("<h1>Array ITems: </h1>"+arr_new+"<br> The smallest Number is: "+Math.min(...arr_new))


/* 10. Write a program to print multiples of 5 ranging 1 to 100. */
document.write("<h1>Multiples of 5 ranging 1 to 100 </h1>")
for(i=5; i<101; i+=5){
    document.write(i+"<br>")
}