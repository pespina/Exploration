 function leftArrowPressed() {
  var element = document.getElementById("JackMoon");
  element.style.left = parseInt(element.style.left) - 20 + 'px';
 }

 function rightArrowPressed() {
  var element = document.getElementById("JackMoon");
  element.style.left = parseInt(element.style.left) + 20 + 'px';
 }

 function spacebarPressed() {
  var element = document.getElementById("JackMoon");
  element.style.bottom = parseInt(element.style.bottom) + 5 + 'px';

  var x = 0;

  var interval = setInterval(function() {
   x++;
   element.style.bottom = 50 + (-0.2 * x * (x - 50)) + 'px';

   if (x >= 50) clearInterval(interval);
  }, 20);
 }

 function moveSelection(evt) {
  switch (evt.keyCode) {
   case 37:
    leftArrowPressed();
    break;
   case 39:
    rightArrowPressed();
    break;
   case 32:
    spacebarPressed();
    break;
  }
 }

 var planetImages = [
  'url(http://www.hd-wallpapersdownload.com/upload/bulk-upload/blue-planet-wallpaper-dowload.jpg)',
  'url(http://www.mrwallpaper.com/wallpapers/planets-space-art-1920x1080.jpg)', 
  'url(http://www.eonline.com/eol_images/Entire_Site/2015728/rs_1024x759-150828183718-1024-justin-bieber-vma-rehersal.ls.82815.jpg)'
 ];

 var planetnames = [
  'Poseidon',
  'Midas',
  'Planet Bieber'
 ];
 
 var planetSongs = [
  'WhereNow.mp3',
  'Weeknd.mp3',
  'Sorry.mp3'
  ];

 var next = 0;
 
var speed = 2750;
var audio, source;

 function docReady() {


  window.addEventListener('keydown', moveSelection);
  document.getElementById("JackMoon").style.left = "50px";
  document.getElementById("JackMoon").style.bottom = "50px";
  document.getElementById("JackMoon").style.width = "150px";
  document.getElementById("JackMoon").style.height = "150px";

  document.getElementById("spaceship").style.left = "900px";
  document.getElementById("spaceship").style.bottom = "50px";
  document.getElementById("spaceship").style.width = "400px";
  document.getElementById("spaceship").style.height = "200px";

  document.getElementById("obstacle").style.left = "1200px";
  document.getElementById("obstacle").style.bottom = "50px";
  document.getElementById("obstacle").style.width = "80px";
  document.getElementById("obstacle").style.height = "80px";

  moveObstacle();
  
  checkCollision();
  
 }
 
 function checkCollision () {
    var element = document.getElementById("JackMoon");
  var obstacle = document.getElementById("obstacle");
  var spaceship = document.getElementById("spaceship");

  setInterval(function(){  
     if (Collision(element, spaceship)) changePlanet();
     if (Collision(element, obstacle)) {
      element.style.left = '50px';
   }
  }, 400);
 }

 function moveObstacle() {
  $("#obstacle").animate({
   left: "0"
  }, speed, "linear", function() {
   document.getElementById("obstacle").style.left = "1200px";
   moveObstacle();
  });
 }

 function Collision(element1, element2) {
  if ((parseInt(element1.style.left) < parseInt(element2.style.left) + parseInt(element2.style.width)) &&
   (parseInt(element1.style.left) + parseInt(element1.style.width) > parseInt(element2.style.left)) &&
   (parseInt(element1.style.bottom) < parseInt(element2.style.bottom) + parseInt(element2.style.height)) &&
   (parseInt(element1.style.height) + parseInt(element1.style.bottom) > parseInt(element2.style.bottom))) {
   // collision detected!

   return true;
  }
 }


 function changePlanet() {
  if (next == 3) {
   $('.winner').show();
   $("#obstacle").hide();
   return;
  }
  document.body.style.backgroundImage = planetImages[next];
  $("h1").text(planetnames[next]);
  updateSource();
  next++;
  speed = speed-500;
  document.getElementById('JackMoon').style.left = "50px";
  
 }

 
 function updateSource() { 
   var audio = document.getElementById('audio');
   var source = document.getElementById('mp3source');
   
   source.src= planetSongs[next];
   audio.load();
   audio.play(); //call this to play the song right away
}
    
    