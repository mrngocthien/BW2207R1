function rain() {
    let amount = 300;
    let body = document.querySelector('body');
    let i = 0;
    while (i<amount) {
        let drop = document.createElement('i');
        
        let size = Math.random() * 1.5; 
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -40;
        let duration = Math.random() / 2;  

        drop.style.width = 0.2 + size + 'px'; // set size of raindrops as random
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = duration + 2 + 's'; //set animation duration for raindrops drop down, fast or slow
        body.appendChild(drop);
        i++;
    }
}
rain();