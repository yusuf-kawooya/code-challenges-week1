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
grading a person basing of his marks
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
