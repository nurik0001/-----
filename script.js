document.addEventListener('DOMContentLoaded', () => {
    // Анимация для цитат при прокрутке
    const quotes = document.querySelectorAll('.quote');
    const emotions = document.querySelectorAll('.emotion');
    const flowerCards = document.querySelectorAll('.flower-card');
    const foodCards = document.querySelectorAll('.food-card');

    // Функция для проверки, виден ли элемент
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Добавление класса для анимации при прокрутке
    function handleScroll() {
        quotes.forEach(quote => {
            if (isElementInViewport(quote)) {
                quote.style.opacity = '1';
                quote.style.transform = 'translateY(0)';
            }
        });

        emotions.forEach(emotion => {
            if (isElementInViewport(emotion)) {
                emotion.style.opacity = '1';
                emotion.style.transform = 'translateY(0)';
            }
        });

        flowerCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });

        foodCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Начальные стили для анимации
    quotes.forEach(quote => {
        quote.style.opacity = '0';
        quote.style.transform = 'translateY(20px)';
        quote.style.transition = 'all 0.5s ease-out';
    });

    emotions.forEach(emotion => {
        emotion.style.opacity = '0';
        emotion.style.transform = 'translateY(20px)';
        emotion.style.transition = 'all 0.5s ease-out';
    });

    flowerCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
    });

    foodCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
    });

    // Обработчики событий
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызов при загрузке
}); 