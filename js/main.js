var canvas,ctx;
   window.onload =init;
         function init() {

         canvas = document.querySelector("#myCanvas");

         ctx=canvas.getContext('2d');

         ctx.fillStyle='#FF0000';
         ctx.fillRect(0,0,80,100);
      }

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