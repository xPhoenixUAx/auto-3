// Обробник події для форми contact-form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    // Отримуємо значення полів
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Перевірка, чи всі поля заповнені
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
    } else {
      alert("Your message has been sent successfully!");
    }
  });
  window.onload = function() {
    // Якщо cookies не були прийняті або відмовлено від них, показуємо модальне вікно
    if (localStorage.getItem('cookiesAccepted') === null) {
      document.getElementById('cookieModal').style.display = 'flex';
    } else if (localStorage.getItem('cookiesAccepted') === 'false') {
      document.getElementById('cookieModal').style.display = 'flex'; // Відображаємо, якщо була відмова
    }
  
    // Прийняття cookies
    document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true'); // Зберігаємо інформацію про прийняття
      document.getElementById('cookieModal').style.display = 'none'; // Закриваємо модальне вікно
    });
  
    // Відмова від cookies
    document.getElementById('declineCookies').addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'false'); // Зберігаємо інформацію про відмову
      document.getElementById('cookieModal').style.display = 'none'; // Закриваємо модальне вікно
    });
  };