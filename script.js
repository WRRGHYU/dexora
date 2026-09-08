document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.querySelectorAll(".main-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var service = form.service.value;
      var message = form.message.value.trim();

      var lines = [
        "مرحباً ديكسورا، أرغب في حجز استشارة:",
        "الاسم: " + name,
        "رقم التواصل: " + phone,
        "نوع الخدمة: " + service
      ];
      if (message) { lines.push("تفاصيل المشروع: " + message); }

      var text = encodeURIComponent(lines.join("\n"));
      window.open("https://wa.me/966531431187?text=" + text, "_blank");

      var success = document.getElementById("form-success");
      if (success) { success.classList.add("show"); }
      form.reset();
    });
  }
});
