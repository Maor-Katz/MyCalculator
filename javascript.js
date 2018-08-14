let opera, num1, num2; 

function beforeCalc (str)
{
   
   for (let i=0; i<str.length; i++) {
       if (str[i]=='*' || str[i]=='/' || str[i]=='+' || str[i]=='-'){
          
        opera=str[i];
        let array = str.split(opera);
        num1 = array[0];
        num2 = array[1];
       }
       
   }
 return calc ( num1, opera,num2)  
}
function calc()
{
    switch (opera)
       {
           case '*':
           
            return  +num1*+num2;
           
           
           
           case '/':
           return  +num1/+num2;
           
           
           case '+':
           return +num1+ +num2;
           
           
           case '-':
           
           return +num1+ -num2;
           

       }
}
