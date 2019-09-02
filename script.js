let a,count=0;
let sec=20;

 let b=document.getElementById('button');
 let points=document.getElementById('score_p');
 let img=document.getElementById('image1');
 b.addEventListener('click',imgrand);

  
 function imgrand()
 {
     if(sec==20)
     {
     timer();
     }
  
    a=Math.floor(Math.random()*6+1);
    img.src='dice-'+a+'.png';
    count=count+a;
    points.innerHTML="Score : "+count;
    function timer()
 {
     if(sec<=0)
     {
         alert("Game End");
     }
     else{
         --sec;
         document.getElementById('timer').innerHTML=sec;
     }
     setTimeout(function(){timer();},1000);
 }   

 }
 
 
