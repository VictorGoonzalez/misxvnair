// ==============================
// FECHA DEL EVENTO
// Sábado 18 de Julio de 2026
// ==============================
const eventDate = new Date("2026-07-18T20:00:00").getTime();
// Cambia la hora si quieres (T20:00:00 = 8:00 PM)

// ==============================
// CUENTA REGRESIVA
// ==============================
function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML =
      "<h3 style='color:#E8B96D; font-family:Libre Baskerville, serif; font-size:1.6rem;'>🎉 ¡Hoy es el gran día! 🎉</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ==============================
// MÚSICA (PLAY / PAUSE)
// ==============================
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (!playing) {
      music.play();
      musicBtn.innerText = "⏸ Pausar";
      playing = true;
    } else {
      music.pause();
      musicBtn.innerText = "🎵 Música";
      playing = false;
    }
  });
}

// ==============================
// EFECTO SUAVE AL HACER SCROLL
// ==============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 1.2s ease";
  observer.observe(section);
});

// ==============================
// CONFETI PREMIUM (DORADO/AZUL)
// ==============================
function createConfettiPiece() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  // Colores elegantes según tu paleta
  const colors = ["#E8B96D", "#C5934C", "#4BA3C3", "#1B3A57", "#ffffff"];
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Tamaño aleatorio
  const size = Math.random() * 8 + 6;
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;

  // Posición inicial aleatoria
  confetti.style.left = `${Math.random() * 100}vw`;

  // Duración y animación aleatoria
  confetti.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
  confetti.style.opacity = Math.random() * 0.5 + 0.5;

  // Forma aleatoria
  const shapes = ["50%", "0%"];
  confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];

  document.body.appendChild(confetti);

  // Se elimina solo
  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

// Lanzar confeti por cierto tiempo
function launchConfetti(duration = 2500) {
  const interval = setInterval(() => {
    createConfettiPiece();
    createConfettiPiece();
    createConfettiPiece();
  }, 120);

  setTimeout(() => clearInterval(interval), duration);
}

// ==============================
// CONFETI AL ENTRAR
// ==============================
window.addEventListener("load", () => {
  setTimeout(() => {
    launchConfetti(2800);
  }, 800);
});

// ==============================
// CONFETI AL DAR CLICK EN CONFIRMAR
// ==============================
document.querySelectorAll(".form-btn, .main-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    launchConfetti(1800);
  });
});

// ==========================
// GENERADOR DE ESTRELLAS
// ==========================

function createStars() {
  const container = document.querySelector(".night-background");

  // MUCHÍSIMAS estrellas pequeñas realistas
  for (let i = 0; i < 350; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2 + 0.5;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = (Math.random() * 5 + 3) + "s";

    container.appendChild(star);
  }

  // Estrellas doradas brillantes
  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div");
    star.classList.add("star", "gold-star");

    const size = Math.random() * 4 + 2;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    container.appendChild(star);
  }

  // MUCHAS estrellas fugaces
  for (let i = 0; i < 5; i++) {
    const shootingStar = document.createElement("div");
    shootingStar.classList.add("shooting-star");

    shootingStar.style.top = Math.random() * 50 + "%";
    shootingStar.style.left = Math.random() * 100 + "%";
    shootingStar.style.animationDelay = Math.random() * 8 + "s";

    container.appendChild(shootingStar);
  }
}

window.addEventListener("load", createStars);
