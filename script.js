const weddingDate = new Date("2026-11-21T10:00:00+01:00").getTime();

function updateCountdown(){
  const now = Date.now();
  const diff = weddingDate - now;
  const ids = ["days","hours","minutes","seconds"];
  if(diff <= 0){
    ids.forEach(id => document.getElementById(id).textContent = "0");
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);
