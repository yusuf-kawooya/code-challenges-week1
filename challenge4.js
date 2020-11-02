//Write a JavaScript program that detects the age someone is allowed to
//take alcohol using control statements, when the person is below 18 it
//should tell the person “Alcohol is not for sale to persons under the age of
//18”, when the person is above 18 it should tell them “excessive
//consumption of Alcohol is harmful to your health drink responsibly”
//var age=prompt("Enter Your Age Please");
//if(age<18){alert()};
 //{
   //  else {alert()};
 //}
 var age="3";
if(age<18){
    console.log("Alcohol is not for sale to persons under the age of 18");
} else{
    console.log("Excess consumption of alcohol is harmful to your healthy, drink responsibly");
}
        
           

 /*
  JavaScript program to print the grade of person using the following conditions
    ->A if percentage >85
    ->A- if %<=85 and >80
    ->B if %<=80 and >70
    ->C if %<=70 and >60
    ->D if %<=60 and >40
    ->E if %<=40 and also should print 'candidate failed' if %<=35
  Input
  enter the percentage of student:
  86
  Output
  Grade - 'A'

//finding grades
//message variable
var msg = 'enter the percentage of student:';
//printing message for user input
var a = prompt(msg);
if(a>85)
    {//if percent > 85 --A
      document.write('Grade - A');}
else if(a<=85 && a>80)
    {//80<percent80=85  --A
      document.write('Grade - A-');}
else if(a>70 && a<=80)
    {//70<percent<=80 --B
      document.write('Grade - B');}
else if(a>60 && a<=70)
    {//60<percent<=70  --C
      document.write('Grade - C');}
else if(a>40 && a<=60)
    {//40<percent<=60  --D
      document.write('Grade - D');}
else if(a<=40)
    {//percent<=40  --E
      if(a<=35)
        {//failed condition
          document.write('Grade - E Candidate failed');}
      else
        {document.write('Grade - E');}}
*/