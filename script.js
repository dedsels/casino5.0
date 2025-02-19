const symbols = ["🍒", "🍋", "🔔", "🍉", "⭐", "🍇", "🍊", "💎", "🎰"];
const reels = document.querySelectorAll(".reel div");
var coins = 100;
document.getElementById("coins").innerHTML = coins;

function spin() {
  reels.forEach((reel, index) => {
    let delay = index * 200; // Задержка для эффекта остановки
    let interval = setInterval(() => {
      let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      reel.innerHTML = randomSymbol;
    }, 100);

    setTimeout(() => clearInterval(interval), 2000 + delay);
  });
}
