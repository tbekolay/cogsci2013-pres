MathJax.Hub.Config({
    "tex2jax": { inlineMath: [ [ '$', '$' ] ] }
});

// Load all SVGs
d3.xml('img/placeholder.svg', "image/svg+xml", function(xml) {
    document.getElementById("spa-1").appendChild(xml.documentElement);
    document.getElementById("spa-2").appendChild(xml.documentElement);
    document.getElementById("spa-3").appendChild(xml.documentElement);
    document.getElementById("nef-1").appendChild(xml.documentElement);
    document.getElementById("nef-2").appendChild(xml.documentElement);
    document.getElementById("nef-3").appendChild(xml.documentElement);
    document.getElementById("nef-4").appendChild(xml.documentElement);
    document.getElementById("learncurve-pes").appendChild(xml.documentElement);
    document.getElementById("stdp").appendChild(xml.documentElement);
    document.getElementById("freq").appendChild(xml.documentElement);
    document.getElementById("ml").appendChild(xml.documentElement);
    document.getElementById("sparsity").appendChild(xml.documentElement);
    document.getElementById("learncurve").appendChild(xml.documentElement);
    document.getElementById("params").appendChild(xml.documentElement);
});

Reveal.addEventListener( 'slidechanged', function( event ) {
    MathJax.Hub.Rerender(event.currentSlide);
});

Reveal.addEventListener( 'fragmentshown', function( event ) {
    setTimeout(function() {
        MathJax.Hub.Rerender(document.querySelector(".slides .present"))
    }, 100);
});
