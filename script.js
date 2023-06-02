document.getElementById("BR").addEventListener("click", function()
 {
    document.getElementById("box").style.display = "block";
  });
  document.getElementById("cls").addEventListener("click", function() {
    document.getElementById("box").style.display = "none";
  });
  document.getElementById("BR1").addEventListener("click", function()
 {
    document.getElementById("box1").style.display = "block";
  });
  document.getElementById("cls1").addEventListener("click", function() {
    document.getElementById("box1").style.display = "none";
  });

  let ply = document.querySelectorAll(".ply");
  let computer = document.querySelectorAll(".computer");
  let youpicked = document.querySelector(".youpicked");
  let computerpicked = document.querySelector(".computerpicked");
  let winmodal = document.querySelector(".win");
  let winner = document.querySelector(".winner");
  let computerlost = document.querySelector(".computerlost");
  let tiemodal = document.querySelector(".tie0");
  let play = document.querySelector(".playagain");
  let playagain = document.querySelector(".pagain");
  let same = document.querySelector(".replay");
  let circle1 = document.querySelector(".cir1");
  let circle2 = document.querySelector(".cir2");
  let circle3 = document.querySelector(".cir3");
  let circle4 = document.querySelector(".cir4");
  let circle5 = document.querySelector(".cir5");
  let circle6 = document.querySelector(".cir6");
  let tie = document.querySelector(".tie1");
  let btndiv1 = document.querySelector(".BD1");
  let nextdiv = document.querySelector(".ND");
  let btndiv = document.querySelector(".BD");
  

 let gamescore =JSON.parse(localStorage.getItem("sc"))
 let scoreElem = document.getElementById("youpoints");
 if(gamescore)
 {
   scoreElem.innerText=gamescore;
}
 let count = 0;
//  computer score
let Cgamescore =JSON.parse(localStorage.getItem("scr"))
 let scoreElem2 = document.getElementById("comppoints");
 if(Cgamescore)
 {
   scoreElem2.innerText=Cgamescore;
}
 let countcomp = 0;

  let random = Math.floor(Math.random()*3);
  let join1 = document.querySelector(".line1");
  let join2 = document.querySelector(".line2");
  let join3 = document.querySelector(".line3");


  
  ply.forEach((element,index)=>{
    element.addEventListener("click",()=>{
      youpicked.style.opacity="1";
      join1.style.display = "none";
      join2.style.display = "none";
      join3.style.display = "none";
     ply.forEach(item =>{
      item.style.display = "none";
     });
     element.style.display="block";
     element.classList.add("show")
     setTimeout(() =>{
      computerpicked.style.opacity="1";
setTimeout(() =>{
  computer[random].style.display="block";
  computer[random].classList.add("right")
},2);
setTimeout(() =>{
if( index==0 && random==2 || index==1 && random==0 ||index==2 && random==1 ){
 winmodal.style.display="flex";
 winner.innerText="YOU WIN";
 computerlost.innerText="AGAINST PC";
 circle1.style.opacity="1";
 circle2.style.opacity="1";
 circle3.style.opacity="1";
 count = gamescore;
 count ++;
 scoreElem.innerText=count;
 localStorage.setItem("sc", JSON.stringify(count));
 btndiv1.style.display="block";
 nextdiv.style.display="block";
 btndiv.style.display="none";
 }

else if(index == random){
  tiemodal.style.display="flex";
  element.style.display="block";
  tie.innerText="TIE UP";
}
else{
  winmodal.style.display="flex";
  winner.innerText="YOU LOST";
  computerlost.innerText="AGAINST PC";
  circle4.style.opacity="1";
  circle5.style.opacity="1";
  circle6.style.opacity="1";
  countcomp = Cgamescore;
  countcomp ++;
  scoreElem2.innerText=countcomp;
  localStorage.setItem("scr", JSON.stringify(countcomp));
}
}, 400);
     },200);
    })
  });
  play.addEventListener("click",() =>{
    window.location.reload();
  })
  same.addEventListener("click",() =>{
    window.location.reload();
  })
  playagain.addEventListener("click",() =>{
    window.location.reload();
  })
  