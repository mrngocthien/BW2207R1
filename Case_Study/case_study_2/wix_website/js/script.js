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