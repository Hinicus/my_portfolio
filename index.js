//JS Code for mobile menu On toggle
const menuOnToggle = document.getElementById("menu-on-toggle");
const menuOffToggle = document.getElementById("menu-off-toggle");

const mobileMenuList = document.getElementById("mobile-menu-list");
const mobileMenu = document.getElementById("mobile-menu");

menuOnToggle.addEventListener("click", () => {
  document.body.classList.add("overflow-hidden");

  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.remove("animate__slideOutRight");
  mobileMenu.classList.add("animate__slideInRight");
});

//A function for animating the closing nav menu
function closeMenu() {
  mobileMenu.classList.remove("animate__slideInRight");
  mobileMenu.classList.add("animate__slideOutRight");

  mobileMenu.addEventListener("animationend", function handleAnimationEnd() {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    mobileMenu.removeEventListener("animationend", handleAnimationEnd);
  });
}

menuOffToggle.addEventListener("click", closeMenu);
mobileMenuList.addEventListener("click", closeMenu);

//JS code for showing the scrolling nav bar whenever the user scrolls past the navbar on the home section
const scrollingNav = document.getElementById("scrolling-nav");

const scrollThreshold = 200;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    scrollingNav.classList.remove("-translate-y-full");
    scrollingNav.classList.add("translate-y-0");
  } else {
    scrollingNav.classList.remove("translate-y-0");
    scrollingNav.classList.add("-translate-y-full");
  }
});

//JS code to copy email & phone num

const copyEmail = document.getElementById("email-contact");
const emailText = document.getElementById("email");

const copyNumber = document.getElementById("phone-contact");
const phoneText = document.getElementById("phone-number");

const emailAddress = "bulaongmatthew55432@gmail.com";
const phoneNumber = "+63 915 114 8634";

//A function to restore the email
function restoreEmailText() {
  setTimeout(() => {
    emailText.textContent = emailAddress;
    emailText.classList.remove("text-[#5a924e]");
    emailText.classList.add("text-gray-400");
    emailText.classList.remove("font-semibold");
  }, 2000);
}

function restorePhoneText() {
  setTimeout(() => {
    phoneText.textContent = phoneNumber;
    phoneText.classList.remove("text-[#5a924e]");
    phoneText.classList.add("text-gray-400");
    phoneText.classList.remove("font-semibold");
  }, 2000);
}

copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    emailText.classList.remove("text-gray-400");
    emailText.classList.add("text-[#5a924e]");
    emailText.textContent = "Copied Email Address!";
    emailText.classList.add("font-semibold");

    restoreEmailText();
  } catch (err) {
    console.error("Failed to copy text: ", err);
    emailText.textContent = "Failed to copy";
    restoreEmailText();
  }
});

copyNumber.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("09151148634");
    phoneText.classList.remove("text-gray-400");
    phoneText.classList.add("text-[#5a924e]");
    phoneText.textContent = "Copied Phone Number!";
    phoneText.classList.add("font-semibold");

    restorePhoneText();
  } catch (err) {
    console.error("Failed to copy text: ", err);
    phoneText.textContent = "Failed to copy";
    restorePhoneText();
  }
});

//Contact Me to open the hidden contact div

const contactBtns = document.querySelectorAll(".contact-btn");
const contactPage = document.getElementById("contact-me-card");

const contactCloseBtn = document.getElementById("close-contact-btn");

contactBtns.forEach((button) => {
  button.addEventListener("click", () => {
    contactPage.classList.remove("animate__slideOutDown");
    contactPage.classList.remove("hidden");
    contactPage.classList.add("flex");
    contactPage.classList.add("animate__slideInUp");
    closeMenu();
  });
});

contactCloseBtn.addEventListener("click", () => {
  contactPage.classList.remove("animate__slideInUp");
  contactPage.classList.add("animate__slideOutDown");

  contactPage.addEventListener("animationend", function handleAnimationEnd() {
    contactPage.classList.remove("flex");
    contactPage.classList.add("hidden");

    contactPage.removeEventListener("animationend", handleAnimationEnd);
  });
});

//Automatically change date to current year
const yearDate = new Date().getFullYear();
document.getElementById("year").textContent = yearDate;
