const words ["APK Dev" , "Web Dev"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {  
  let currentWord = words[currentIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

 document.getElementById("typed-text").textContent = currentWord.substring(0, charIndex);

 let speed = 150;
 if (isDeleting) {
  speed /= 2;
 }

 if (!isDeleting && charIndex === currentWord.legth) {
   speed = 2000
   isDeleting = true;
 }
 else if (isDeleting && charIndex === 0) {
   isDeleting = false
   currentIndex = (currentIndex + 1) % words.length;
   speed = 500 
 }

 setTimeout = (typeEffect, speed);
}

typeEffect();
