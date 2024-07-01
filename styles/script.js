function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    document.body.appendChild(leaf);

    leaf.style.left = `${Math.random() * window.innerWidth}px`;
    leaf.style.top = `${Math.random() * window.innerHeight}px`;

    const animationDuration = Math.random() * 5000 + 5000;
    leaf.animate([
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: `translateY(${window.innerHeight}px) rotate(360deg)` }
    ], {
        duration: animationDuration,
        iterations: 1
    });

    

   
    setTimeout(() => {
        leaf.classList.add('fade-out');
        console.log('Fade-out class added');

        
        setTimeout(() => {
            leaf.remove();
        }, 2000); 
    }, animationDuration - 2000); 
}


setInterval(createLeaf, 2000);