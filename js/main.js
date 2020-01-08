//variables
userSeq = [];
simonSeq = [];
const NUM_OF_LEVELS = 20;
var id, color, level = 0;
var strict = false;
var error = false;
var gameOn = false //switch to turn game on or off 
var boardSound = [
  "http://www.soundjay.com/button/sounds/button-4.mp3", //green
  "http://www.soundjay.com/button/sounds/button-09.mp3", //red
  "http://www.soundjay.com/button/sounds/button-10.mp3", //yellow 
  "http://www.soundjay.com/button/sounds/button-7.mp3" //blue   
];

//1- start board sequence
$(document).ready(function() {
  $(".display").text("");
  $(".start").click(function() {
    strict = false;
    error = false;
    level = 0;
    level++;
    simonSeq = []
    userSeq = [];
    simonSequence();
  })
  
  //user pad listener
  $(".pad").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    userSequence();
  });
  
  //strict mode listener
  $(".strict").click(function() {
    level = 0;
    level++;
    simonSeq = []
    userSeq = [];
    strict = true;    
    simonSequence();
  })
  
  //listener for switch button
  $(".switch").click(function() {    
    gameOn = (gameOn == false) ? true : false;
    console.log(gameOn);
    if(gameOn) {
      $(".inner-switch").addClass("inner-inactive");
      $(".switch").addClass("outter-active");
      $(".display").text("00")
    }
    else {
      $(".inner-switch").removeClass("inner-inactive");
      $(".switch").removeClass("outter-active");
      $(".display").text("");
    }    
  })
})

//user sequence
function userSequence() {
  userSeq.push(id);
    console.log(id+" "+color);
    addClassSound(id, color);
    //check user sequence
    if(!checkUserSeq()) {
      //if playing strict mode reset everything lol
      if(strict) {
        console.log("strict");
        simonSeq = [];
        level = 1;
      }   
      error = true;   
      displayError();
      userSeq = [];      
      simonSequence();
    }
    //checking end of sequence
    else if(userSeq.length == simonSeq.length && userSeq.length < NUM_OF_LEVELS) {
      level++;
      userSeq = [];
      error = false;
      console.log("start simon")
      simonSequence();
    }
    //checking for winners
    if(userSeq.length == NUM_OF_LEVELS) {
      displayWinner();
      resetGame();
    }     
  
}

/* simon sequence */
function simonSequence() {
  console.log("level "+level);
  $(".display").text(level);
  if(!error) {
    getRandomNum();
  }
  if(error && strict) {
    getRandomNum();
  }  
  var i = 0;
  var myInterval = setInterval(function() {
    id = simonSeq[i];
    color = $("#"+id).attr("class");
    color = color.split(" ")[1];
    console.log(id+" "+color);
    addClassSound(id, color);
    i++;
    if(i == simonSeq.length) {
      clearInterval(myInterval);
    } 
  }, 1000);  
}

//generate random number
function getRandomNum() {
  var random = Math.floor(Math.random() * 4);
  simonSeq.push(random);
}

/* add temporary class and sound  */
function addClassSound(id, color) {
  $("#"+id).addClass(color+"-active");
  playSound(id)
  setTimeout(function(){
    $("#"+id).removeClass(color+"-active");
  }, 500);
}

/* checking user seq against simon's */
function checkUserSeq() {
  for(var i = 0; i < userSeq.length; i++) {
    if(userSeq[i] != simonSeq[i]) {      
      return false;
    }
  }
  return true;
}

/* display error  */
function displayError() {
  console.log("error");  
  var counter = 0;
  var myError = setInterval(function() {
    $(".display").text("Err");
    counter++;
    if(counter == 3) {
      $(".display").text(level);
      clearInterval(myError);
      userSeq = [];
      counter = 0;
    }
  }, 500);
}

//display winner 
function displayWinner() {
  var count = 0;
  var winInterval = setInterval(function() { 
    count++;
    $(".display").text("Win");
    if(count == 5) {
      clearInterval(winInterval);
      $(".display").text("00");
      count = 0;
    }
  }, 500);
}

/* play board sound */
function playSound(id) {
  var sound = new Audio(boardSound[id]);
  sound.play();
}

/* reset game */
function resetGame() {
  userSeq = [];
  simonSeq = [];
  level = 0;
  $(".display").text("00");
}




// var canvas,ctx;
//    window.onload =init;

//          function init() {

//          canvas = document.querySelector("#myCanvas");

//          ctx=canvas.getContext('2d');

//          ctx.fillStyle='#FF0000';
//          ctx.fillRect(0,0,80,100);
//       }

// let order=[];
// let playerOrder =[];
// let flash;
// let turn;
// let good;
// let compmturn;
// let intervalId;
// let strict=false;
// let noise = true;
// let on = false ;
// let wiin;

// const  turncounter = document.querySelector("#turn");
// //reference variable to HTML ID  //
// const topLeft = document.querySelector("#topleft");
// const topRight = document.querySelector("#topRight");
// const bottomLeft = document.querySelector("#bottomleft");
// const bottomRight= document.querySelector("#bottomright"
// const strictButton = document.querySelector("#strict");
// const OnButton= document.querySelector("#on");
// const StartButton = document.querySelector("#start");

// strictButton.addEventListener('click',(event) => {
//     if (strictButton.checked ==true) {
//         strict=true;}
//     else{
//     strict=false;
// }
// })
// onButton.addEventListener('click',(event) => {
//     if (onButton.checked ==true) {
//         on =true;
//         turnCounter.innerHTML ="-";}
//     else{
//     on=false;
//     turnCounter.innerHTML ="";
//     clearColor();
//     clearInterval(intervalId);
//     }
// })

// StartButton.addEventListener('click', (event)=>
// if (on||win) {
//     play();
// });
// function play ()
// win =false;
// order[];
// playerOrder=[];
// flash=0;
// intervalId=0;
// turn=1;
// turnCounter.innerHTML=1;
// good= true;
// for (var i =0; i<20;i++){
//     order.push(math.floor(math.random( )*4)+1);
// }
// compuTurn= true;
// intervalId =set interval (gameTurn,800);
// }
// function gameTurn (){
//     on = false;
//     }s
//     if (flash == turn ){
// clear interval(intervalId);
// compTurn= false;
// clearcolor();
// setTimeout(() => {
//     if order[flash]== 1) one();
//     if order[flash]== 2) two();
//     if order[flash]== 3) three();
//     if order[flash]== 4) four ();
//     flash++;
       
// },200);
//     }
// }
// function one () {
//     if (noise) {
//         let audio= document.getElementById("clip");
//         audio.play();
//     }
//     noise = true;
//     topleft.style.backgroundcolor="lightgreen";
//     topRight.style.backgroundcolor="darkred";
//     bottomLeft.style.backgroundcolor="goldenrod";
//     bottomRight.style.backgroundcolor="darkblue";

//     topLeft.addEventListener('click',(event)=>{
//         if (on) {
//             playOrder.push(1);
//             check();
//             one();
//             if(!win)
//             {
//                 setTimeout(())=>{
//                     clearColor();
//                 };300);
//                 }
//             }
//             topRight.addEventListener('click',(event)=>{
//         if (on) {
//             playOrder.push(2);
//             check();
//             two();
//             if(!win)
//             {
//                 setTimeout(())=>{
//                     clearColor();
//                 };300);
//                 }
//         }
//          bottomLeft.addEventListener('click',(event)=>{
//         if (on) {
//             playOrder.push(3);
//             check();
//             three();
//             if(!win)
//             {
//                 setTimeout(())=>{
//                     clearColor();
//                 };300);
//                 }
//                  bottomRight.addEventListener('click',(event)=>{
//         if (on) {
//             playOrder.push(4);
//             check();
//             four();
//             if(!win)
//             {
//                 setTimeout(())=>{
//                     clearColor();
//                 };300);
//                 }
//     })

//   fuction check() {
//       if (playerOrder[playOrder.length -1 !== order[playerOrder.length-1])
//       good= false;
//       if (playOrder.length ==20 && good){
//           winGame();

//       }

//       if (good==false){
//           flashColor();
//           turnCounter.innerHTML ="NO!";
//           setTimeout()) => {
// turnCounter.innerHTML=turn;
// clearColor();

// if (strict) {
//     play();
//     else{
//         compTurn =true;
//         flash=0;
//         playerOrder =[];
//         good=true;
//         intervalId=setInterval(gameTurn,800);
//     }

//     }
// }
// 800);
//         noise=flase;
//         if (turn== playerOrder.length && good  && !win){
//             turn++;
//             playOrder=[];
//             compTurn=true;
//             falsh=0;
//             turnCounter.innerHTML=turn;
//             intervalId =setInterval(gameTurn,800);


//             function winGame ()
//         {
//             flash Color();
//             turnCounter.innerHTML = "win"
//             on = flase;
//             win =true;
//         }

//             }

//         }


//           }
//       }