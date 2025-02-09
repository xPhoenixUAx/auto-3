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
