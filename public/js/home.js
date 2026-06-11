document.addEventListener('DOMContentLoaded', () => {
    
    const cards = document.querySelectorAll('.js-touch-card'); 

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            
            if (window.innerWidth > 768) return;

            e.stopPropagation();

            const isActive = card.classList.contains('touch-active');
            const isGlassBox = e.target.closest('.glass-desc-box');

            if (!isActive) {
                cards.forEach(c => c.classList.remove('touch-active'));
                card.classList.add('touch-active');
                return; 
            }

            if (isActive) {
                
                if (isGlassBox) {
                    return; 
                }
                
                card.classList.remove('touch-active');
            }
        });
    });

    const glassCards = document.querySelectorAll('.js-glass-trigger');

    glassCards.forEach(glass => {
        glass.addEventListener('click', (e) => {
            if (window.innerWidth > 768) return;

            e.stopPropagation();

            const isGlassActive = glass.classList.contains('glass-active');
            
            glassCards.forEach(g => g.classList.remove('glass-active'));

            if (!isGlassActive) {
                glass.classList.add('glass-active');
            }
        });
    });

    document.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('touch-active'));
        glassCards.forEach(g => g.classList.remove('glass-active'));
    });
});