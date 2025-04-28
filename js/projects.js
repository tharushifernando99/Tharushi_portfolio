document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const backButton = document.getElementById('back-to-projects');
    
    projectCards.forEach(card => {
        const viewMoreBtn = card.querySelector('.btn-new');
        const summary = card.querySelector('.project-summary');
        const details = card.querySelector('.project-details');
        
        viewMoreBtn.addEventListener('click', () => {
            summary.style.display = 'none';
            details.style.display = 'block';
            backButton.style.display = 'block';
            
            // Hide other project cards
            projectCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.display = 'none';
                }
            });
        });
    });
    
    backButton.addEventListener('click', () => {
        projectCards.forEach(card => {
            const summary = card.querySelector('.project-summary');
            const details = card.querySelector('.project-details');
            
            card.style.display = 'block';
            summary.style.display = 'block';
            details.style.display = 'none';
        });
        
        backButton.style.display = 'none';
    });
});
