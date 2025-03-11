document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = button.getAttribute('href').replace('#', '');
        const modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    });
});

document.getElementById('loadMoreButton').addEventListener('click', () => {
    fetch('nuevos-contenidos.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenidos').innerHTML += data;
        });
});