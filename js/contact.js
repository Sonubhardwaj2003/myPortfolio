// ================= EMAIL JS =================

emailjs.init("HiQdUc34YXaSqH16L");

// ================= ELEMENTS =================

const contactForm = document.getElementById("contactForm");

const sendBtn = document.getElementById("sendBtn");

const btnText = document.getElementById("btnText");

const toast = document.getElementById("toast");

const toastText = document.getElementById("toastText");

// ================= TOAST =================

function showToast(message, success = true) {
  toastText.innerText = message;

  toast.classList.remove("hidden");

  toast.classList.remove("border-red-500", "border-green-500");

  toast.classList.add(success ? "border-green-500" : "border-red-500");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// ================= COPY EMAIL =================

function copyEmail() {
  navigator.clipboard.writeText("sb59437568@gmail.com");

  showToast("Email copied successfully!");
}

// ================= COPY PHONE =================

function copyPhone() {
  navigator.clipboard.writeText("+918059437568");

  showToast("Phone number copied!");
}

// ================= FORM SUBMIT =================

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Loading

  sendBtn.disabled = true;

  btnText.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Sending...';

  const formData = {
    from_name: this.from_name.value,

    from_email: this.from_email.value,

    subject: this.subject.value,

    message: this.message.value,
  };

  emailjs
    .send(
      "service_sonu",

      "template_peo9o67",

      formData,
    )

    .then(() => {
      showToast("Message sent successfully!");

      contactForm.reset();
    })

    .catch(() => {
      showToast("Something went wrong!", false);
    })

    .finally(() => {
      sendBtn.disabled = false;

      btnText.innerHTML = "Send Message";
    });
});
