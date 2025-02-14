document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.team-card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const cardsPerPage = 4;
    let currentPage = 1;

    function showCards(page) {
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Disable/enable the buttons based on current page
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === Math.ceil(cards.length / cardsPerPage);
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showCards(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < Math.ceil(cards.length / cardsPerPage)) {
            currentPage++;
            showCards(currentPage);
        }
    });

    // Initial call to show cards on first page
    showCards(currentPage);
});
