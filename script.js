// Lightbox functionality for image gallery
const images = document.querySelectorAll('.image-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.getAttribute('data-caption');
        // Add fade-in effect
        lightboxImg.style.animation = 'fadeIn 0.5s ease-in';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Surprise button functionality
const surpriseBtn = document.getElementById('surprise-btn');
const surpriseNote = document.getElementById('surprise-note');

surpriseBtn.addEventListener('click', () => {
    surpriseNote.style.display = 'block';
    surpriseBtn.style.display = 'none';
    // Trigger animation
    surpriseNote.style.animation = 'fadeIn 1s ease-in';
});