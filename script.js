const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0 ;
function showttestimonial(k){
  testimonials.forEach((testimonial) =>{
    testimonial.classList.remove("active");
  })
  testimonials[k].classList.add("active")
}
prevBtn.addEventListener("click",()=> {
  currentIndex = (currentIndex - 1 + testimonials.length)% testimonials.length;
  
  showttestimonial(currentIndex)
  
} )
nextBtn.addEventListener("click",()=> {
  currentIndex = (currentIndex + 1) % testimonials.length;
  
  showttestimonial(currentIndex)
  
} )

setInterval(()=> {
  currentIndex = (currentIndex + 1)% testimonials.length;
  
  showttestimonial(currentIndex)
  
},3000)


showttestimonial(currentIndex)