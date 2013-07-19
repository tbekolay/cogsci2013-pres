MathJax.Hub.Config({
    "tex2jax": { inlineMath: [ [ '$', '$' ] ] }
});

Reveal.addEventListener( 'slidechanged', function( event ) {
    MathJax.Hub.Rerender(event.currentSlide);
});

Reveal.addEventListener( 'fragmentshown', function( event ) {
    setTimeout(function() {
        MathJax.Hub.Rerender(document.querySelector(".slides .present"))
    }, 100);
});
