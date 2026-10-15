const words = ["APK Dev", "Web Dev"];
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

  // Menampilkan potongan teks ke elemen HTML
  document.getElementById("typed-text").textContent = currentWord.substring(0, charIndex);

  let speed = 150;
  if (isDeleting) {
    speed /= 2; // Menghapus teks lebih cepat dari mengetik
  }

  // Jika kata sudah selesai diketik sepenuhnya
  if (!isDeleting && charIndex === currentWord.length) {
    speed = 2000; // Jeda 2 detik sebelum menghapus
    isDeleting = true;
  }
  // Jika kata sudah selesai dihapus sepenuhnya
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % words.length; // Pindah ke kata berikutnya
    speed = 500; // Jeda setengah detik sebelum mengetik kata baru
  }

  // Memanggil fungsi ini secara berulang
  setTimeout(typeEffect, speed);
}

// Menjalankan fungsi saat halaman pertama kali dimuat
typeEffect();
