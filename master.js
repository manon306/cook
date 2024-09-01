ScrollReveal().reveal('.x > *', {
    delay: 100,
    duration: 400,
    reset: true,
    origin: 'bottom', // تحديد أن العناصر تظهر من الأسفل
    distance: '20px' ,// تحديد المسافة التي يتحرك بها العنصر عند ظهوره
    interval: 200 // الفاصل الزمني بين ظهور كل عنصر بالمللي ثانية
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const backButtons = document.querySelectorAll('.back-to-cards');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = document.querySelector(button.getAttribute('data-target'));
            document.querySelectorAll('.description').forEach(desc => {
                if (desc !== target) {
                    desc.style.display = 'none';
                }
            });
            target.style.display = target.style.display === 'none' ? 'block' : 'none';
            document.querySelector('.cardsContainer').style.display = 'none';
        });
    });
    
    backButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.querySelector('.cardsContainer').style.display = 'flex';
            document.querySelectorAll('.description').forEach(desc => {
                desc.style.display = 'none';
            });
        });
    });
});
