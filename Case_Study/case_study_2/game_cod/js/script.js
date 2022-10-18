//function for choose tiny carousel
let slider = tns({
    container: ".my-slider",
    "slideby": 1,
    "speed": 400,
    "nav": false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        1400: {
            items: 3,
            gutter: 20
        },
        1200: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        576: {
            items: 1
        }
    }
})

//function for boostrap carousel
let items = document.querySelectorAll('.carousel .carousel-item');
items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0];
      	}
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
})

//function to show MWII trailer//
window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
}
  
function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}
//end function to show MWII trailer//
