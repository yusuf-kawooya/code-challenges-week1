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
var a = 90;
if(a>85) {console.log('That is a D1');}
else if(a<=85 && a>80){console.log('That is a D2');}
else if(a<=80 && a>76){console.log('That is c3');}
else if(a<=76 && a>70){console.log('That is a c4');}
else if(a<=70 && a>66){console.log('That is a c5');}
else if(a<=66 && a>60){console.log('That is a c6');}
else if(a<=60 && a>46){console.log('That is a p7');}
else if(a<=46 && a>40){console.log('That is a p8');}
else {console.log('That is f9');}
