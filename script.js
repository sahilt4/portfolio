var typed = new Typed(".text",{
    strings: ["Frontend Developer","Web Developer","Coder"],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
    loop:true
});
// Smooth scroll function
function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Navbar links
document.querySelector(".abut").addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("#about");
});

document.querySelector('.navbar a[style="--i:3"]').addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("#Skils");
});

document.querySelector('.navbar a[style="--i:4"]').addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("#services");
});

document.querySelector('.btn-box').addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("#services");
});

document.querySelector('.navbar a[style="--i:5"]').addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("body > .last"); // contact section at bottom
});

// "More About Me" button inside home
document.querySelector(".home .btn-box").addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("#about");
});

// "More About Me" button inside about section (if you want same behavior)
document.querySelector(".about .btn-box").addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("#services");
});

const gcode = document.querySelectorAll(".read")
gcode.forEach(gc =>{
  gc.addEventListener("click",() => {
    alert("Some error Occured, try again later");
  }
  )
})

const buttons = document.querySelectorAll(".rbtn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thanks for rating, Visit Again!, Regards Sahil");
  });
});

