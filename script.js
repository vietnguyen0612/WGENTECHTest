document.addEventListener('DOMContentLoaded', function () {
    const searchLink = document.querySelector('.nav__link--highlight');
    const searchModal = document.getElementById('searchModal');

    searchLink.addEventListener('click', function (e) {
        e.preventDefault();
        searchModal.classList.add('search-modal--visible');
    });

    searchModal.addEventListener('click', function (e) {
        if (e.target === searchModal) {
            searchModal.classList.remove('search-modal--visible');
        }
    });
});
function startCountdown(targetDate) {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      if (distance <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Expired";
        return;
      }
  
      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');
  
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }
  
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
  }
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  startCountdown(tomorrow);
  