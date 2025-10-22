// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle")
const nav = document.getElementById("nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")

  // Animate hamburger icon
  const spans = menuToggle.querySelectorAll("span")
  if (nav.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translateY(10px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translateY(-10px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active")
    const spans = menuToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Form submission handler
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Form submitted:", data)

  // Show success message (you can customize this)
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

  // Reset form
  contactForm.reset()
})

// Add scroll effect to header
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})
