MathJax.Hub.Config({
    showProcessingMessages: false,
    tex2jax: { inlineMath: [ [ '$', '$' ] ] },
    TeX: {
        Macros: { circ: ["\\enclose{circle}{#1}", 1] },
        extensions: ["enclose.js"],
    },
});

// Load all SVGs
d3.xml('img/learncurve-pes.svg', "image/svg+xml", function(xml) {
    document.getElementById("learncurve-pes").appendChild(xml.documentElement);
});
d3.xml('img/bcm_rule.svg', "image/svg+xml", function(xml) {
    document.getElementById("bcm_rule").appendChild(xml.documentElement);
});
d3.xml('img/stdp.svg', "image/svg+xml", function(xml) {
    document.getElementById("stdp").appendChild(xml.documentElement);
});
d3.xml('img/freq.svg', "image/svg+xml", function(xml) {
    document.getElementById("freq").appendChild(xml.documentElement);
});
d3.xml('img/sparsity.svg', "image/svg+xml", function(xml) {
    document.getElementById("sparsity").appendChild(xml.documentElement);
});
d3.xml('img/learncurve.svg', "image/svg+xml", function(xml) {
    document.getElementById("learncurve").appendChild(xml.documentElement);
});
d3.xml('img/params.svg', "image/svg+xml", function(xml) {
    document.getElementById("params").appendChild(xml.documentElement);
});

Reveal.addEventListener('slidechanged', function(event) {
    MathJax.Hub.Rerender(event.currentSlide);
});

Reveal.addEventListener('fragmentshown', function(event) {
    setTimeout(function() {
        MathJax.Hub.Rerender(document.querySelector(".slides .present"))
    }, 100);
});
