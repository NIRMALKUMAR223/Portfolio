document.addEventListener('DOMContentLoaded', () => {
    // Handle progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const skillPercentage = bar.getAttribute('data-skill');
        console.log(`Setting progress bar width to: ${skillPercentage}`);
        bar.style.setProperty('--skill-width', skillPercentage); // Set the custom property
    });

    // Intersection Observer for animating sections
    const sections = document.querySelectorAll('section');
    console.log(`Found ${sections.length} sections for intersection observer.`);
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Section ${entry.target.id} is in view.`);
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        console.log(`Observing section: ${section.id}`);
        observer.observe(section);
    });
});
