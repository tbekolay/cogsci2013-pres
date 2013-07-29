MathJax.Hub.Config({
    showProcessingMessages: false,
    tex2jax: { inlineMath: [ [ '$', '$' ] ] },
    TeX: {
        Macros: { circ: ["\\enclose{circle}{#1}", 1] },
        extensions: ["enclose.js"],
    },
});

// Load all SVGs
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron1").appendChild(xml.documentElement);
});
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron2").appendChild(xml.documentElement);
});
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron3").appendChild(xml.documentElement);
});
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron4").appendChild(xml.documentElement);
});
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron5").appendChild(xml.documentElement);
});
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron6").appendChild(xml.documentElement);
});
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron7").appendChild(xml.documentElement);
});
d3.xml('img/neuron.svg', "image/svg+xml", function(xml) {
    document.getElementById("neuron8").appendChild(xml.documentElement);
});
d3.xml('img/e_i.svg', "image/svg+xml", function(xml) {
    document.getElementById("encoders").appendChild(xml.documentElement);
});
d3.xml('img/d_i.svg', "image/svg+xml", function(xml) {
    document.getElementById("decoders").appendChild(xml.documentElement);
});
d3.xml('img/d_i-2.svg', "image/svg+xml", function(xml) {
    document.getElementById("decoders-2").appendChild(xml.documentElement);
});
d3.xml('img/omega-big.svg', "image/svg+xml", function(xml) {
    document.getElementById("omega-big").appendChild(xml.documentElement);
});
d3.xml('img/omega.svg', "image/svg+xml", function(xml) {
    document.getElementById("omega").appendChild(xml.documentElement);
});
d3.xml('img/omega-error.svg', "image/svg+xml", function(xml) {
    document.getElementById("omega-error").appendChild(xml.documentElement);
});
d3.xml('img/omega-unsupervised.svg', "image/svg+xml", function(xml) {
    document.getElementById("omega-unsupervised").appendChild(xml.documentElement);
});
d3.xml('img/accuracy.svg', "image/svg+xml", function(xml) {
    document.getElementById("accuracy").appendChild(xml.documentElement);
});


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
