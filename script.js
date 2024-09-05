const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

prevButton.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

nextButton.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Mostrar o primeiro depoimento ao carregar a página
showTestimonial(currentTestimonial);
