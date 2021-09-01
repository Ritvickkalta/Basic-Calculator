var buttons=document.querySelectorAll("button");
var screen=document.getElementById("screen");
var bhal="";
for(items of buttons)
{
   items.addEventListener('click',(p)=>{
       buttonText=p.target.innerText;
   if(buttonText=='*')
   {
       bhal+=buttonText;
       screen.value=bhal
   }
   else if(buttonText=='C')
   {
    screen.value=""
    bhal=""
   }
   else if(buttonText=='1')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='2')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='3')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='4')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='5')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='6')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='7')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='8')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='9')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='0')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='=')
   {
    
    screen.value=eval(bhal);
   }
   else if(buttonText=='+')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='-')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   else if(buttonText=='/')
   {
    bhal+=buttonText;
    screen.value=bhal
   }
   })
}