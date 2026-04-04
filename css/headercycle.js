// JavaScript Document

function swapPic()
     {
     if(document.getElementById)
                 {
                 var thePicture=document.getElementById("header");
                 var picPath="http://www.distance4dreams.org/images/header"+rnd(6)+".png";
                 thePicture.style.background="url("+picPath+")";
                 }
     }
     
function rnd(n)
     {
     return Math.floor(Math.random() * n) + 1;
     }