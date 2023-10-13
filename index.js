const targetIds = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6, // 60% of the target element is in the viewport
};

const observers = {};

targetIds.forEach((id) => {
    const target = document.getElementById(id);

    if (target) {
        observers[id] = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    target.classList.add('in-viewport');
                } else {
                    target.classList.remove('in-viewport');
                }
            });
        }, options);

        observers[id].observe(target);
    }
});
