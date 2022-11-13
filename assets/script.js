let startBtn=document.getElementById("start")
let scoreText=document.getElementById("score")
let moles=document.querySelectorAll(".mole") 

let time=document.getElementById("time")


let beforeMoles;
let timeOver=false;
let skor=0;
let tense=15;

startBtn.addEventListener("click",()=>{
    startGame()
})
moles.forEach(mole=>{
    mole.addEventListener("click",click)
})


function RandomMole(){
   const row=Math.floor(Math.random()*moles.length)
   const choosenmoles=moles[row];
   if(beforeMoles===choosenmoles){
    return RandomMole()
   }
   else{
    beforeMoles=choosenmoles;
   }
   return choosenmoles
}

function randomTime(min,max){
   const time=Math.round(Math.random()*(max-min))+min;
   return time
}

function up(){
    const mole=RandomMole();
    const time=randomTime(1000,2000);
    mole.classList.add("chosen");
    setTimeout(()=>{
     if(!timeOver){
        up()
     }   
    mole.classList.remove("chosen")},time)
}


function startTime(){
    if(!timeOver){
        tense--;
       time.textContent=tense;
    }
    else{
        time.textContent="time Over"
    }
}
function startGame(){
    tense=15;
    skor=0;
    timeOver=false;
    const interval=setInterval(() => {
         startTime()
         if(timeOver){
            clearInterval(interval)
         }
    }, 1000);

    up();
    setTimeout(() => {
        timeOver=true;
    }, 15000);
}

function click(e){
   if(e.target.classList.contains("chosen")){
    skor++;
    e.target.classList.remove("chosen")

   }
   scoreText.innerHTML=skor
}

