MathJax.Hub.Config({
    "tex2jax": { inlineMath: [ [ '$', '$' ] ] }
});

// Load all SVGs
d3.xml('img/placeholder.svg', "image/svg+xml", function(xml) {
    d3.select("#spa-1").html(xml.documentElement);
    d3.select("#spa-2").html(xml.documentElement);
    d3.select("#spa-3").html(xml.documentElement);
    d3.select("#nef-1").html(xml.documentElement);
    d3.select("#nef-2").html(xml.documentElement);
    d3.select("#nef-3").html(xml.documentElement);
    d3.select("#nef-4").html(xml.documentElement);
    d3.select("#learncurve-pes").html(xml.documentElement);
    d3.select("#stdp").html(xml.documentElement);
    d3.select("#freq").html(xml.documentElement);
    d3.select("#ml").html(xml.documentElement);
    d3.select("#sparsity").html(xml.documentElement);
    d3.select("#learncurve").html(xml.documentElement);
    d3.select("#params").html(xml.documentElement);
};

Reveal.addEventListener( 'slidechanged', function( event ) {
    MathJax.Hub.Rerender(event.currentSlide);
});

Reveal.addEventListener( 'fragmentshown', function( event ) {
    setTimeout(function() {
        MathJax.Hub.Rerender(document.querySelector(".slides .present"))
    }, 100);
});
