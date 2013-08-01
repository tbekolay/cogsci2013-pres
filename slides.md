<strong>Simultaneous unsupervised and supervised learning <br> of cognitive functions in biologically plausible <br> spiking neural networks</strong>

![CogSci 2013](img/cogscilogo.png)

<small>Trevor Bekolay, Carter Kolbeck, Chris Eliasmith <br>
*Centre for Theoretical Neuroscience, University of Waterloo* <br>
[bekolay.org/cogsci2013-pres](http://bekolay.org/cogsci2013-pres)</small>

<aside class="notes">
Hi, I'm Trevor.
I've always been interested in the issue of nature vs nurture.
I grew up being told that I could be anything I wanted to be.
But despite that, I never did manage to make it into the NHL,
and resigned myself to studying the brain instead.
When members of my lab came together to build
a large-scale model of the brain
I saw it as a golden opportunity to
answer a small part of the nature vs nurture question.
</aside>



<video preload="auto">
  <source src="img/spaun.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<p class="fragment">
**How can we learn the connection weights <br> in the spiking neural networks in Spaun?**
</p>

<aside class="notes">
This is that full scale model. We call it Spaun.
Spaun is a network of 2.5 million simulated spiking neurons
that is able to do several high-level cognitive tasks.
In this video, Spaun is solving a problem that you might
find on an IQ test.
As it gets information about each cell,
it's trying to infer the transformation
between cells in each row.
Then, when we get to the last cell in the last row,
we ask Spaun what it thinks should go in that cell,
and it writes 333, which is the correct answer.
Spaun is able to accomplish this and other tasks
by representing information in populations of spiking neurons,
and transforming that information through connections
between populations of neurons.
In order to create Spaun, we analytically solve
for the connection weights between each neural population.
I wanted to know: Can the connection in Spaun be
the result of some learning process?
Could Spaun be the result of nurture?
Or would Spaun have to be hard-coded by nature?
</aside>



## 1. Cognitive functions

<div class="fragment">
<strong>Vector Symbolic Architecture</strong> (Plate, 2003)
</div>

<div class="fragment">
$\circ{5} \Rightarrow \left[ 0.12, 0.56, 0.48 \right] \Rightarrow$ ![3d point](img/point3d.png)
</div>

<aside class="notes">
In order to answer this question,
we first have to understand how Spaun is able to
perform these cognitive tasks.
</aside>



![5](img/5.png) $= \text{COUNT} \circledast \circ{1}
+ \text{NUMBER} \circledast \circ{5}$

<div class="fragment">
![55](img/55.png) $= \text{COUNT} \circledast \circ{2}
+ \text{NUMBER} \circledast \circ{5}$
</div>

<div class="fragment">
![?](img/q.png)
<img class="fragment" data-fragment-index="4" src="img/555.png"
    style="position:relative; left: -159px; margin-right:-159px;">
<span class="fragment" data-fragment-index="4">$= \text{COUNT} \circledast \circ{3}
+ \text{NUMBER} \circledast \circ{5}$</span>
</div>

<p class="fragment" data-fragment-index="5">
<strong>How can we learn the binding function $\circledast$?</strong>
</p>



## 2. In spiking neurons

<div class="fragment">
<strong>Neural Engineering Framework</strong><br>(Eliasmith & Anderson, 2003)
</div>



<div style="position:relative; height:540px;">
  <img src="img/input.gif" width="400" height="400"
      style="position:absolute; top:58px; left:280px;">
  <img src="img/neuron1.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:0; left:355px;">
  <img src="img/neuron2.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:64px; left:580px;">
  <img src="img/neuron3.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:244px; left:710px;">
  <img src="img/neuron4.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:427px; left:580px;">
  <img src="img/neuron5.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:490px; left:355px;">
  <img src="img/neuron6.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:427px; left:130px;">
  <img src="img/neuron7.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:244px; left:0px;">
  <img src="img/neuron8.gif" class="fragment" data-fragment-index="2"
      style="position:absolute; top:64px; left:130px;">
  <div id="neuron1" class="fragment" data-fragment-index="1"
      style="position:absolute; top:38px; left:470px;"></div>
  <div id="neuron2" class="fragment" data-fragment-index="1"
      style="position:absolute; top:100px; left:620px;"></div>
  <div id="neuron3" class="fragment" data-fragment-index="1"
      style="position:absolute; top:251px; left:685px;"></div>
  <div id="neuron4" class="fragment" data-fragment-index="1"
      style="position:absolute; top:403px; left:620px;"></div>
  <div id="neuron5" class="fragment" data-fragment-index="1"
      style="position:absolute; top:465px; left:470px;"></div>
  <div id="neuron6" class="fragment" data-fragment-index="1"
      style="position:absolute; top:403px; left:320px;"></div>
  <div id="neuron7" class="fragment" data-fragment-index="1"
      style="position:absolute; top:251px; left:256px;"></div>
  <div id="neuron8" class="fragment" data-fragment-index="1"
      style="position:absolute; top:100px; left:320px;"></div>
  <div class="fragment fade-in" data-fragment-index="1" id="encoders"
      style="position:absolute; top:74px; left:280px;"></div>
</div>

$X$<span class="fragment" data-fragment-index="1">,
$\;e_i$</span><span class="fragment" data-fragment-index="2">,
$\quad a_i = f(e_i \cdot X)$</span>



<div style="display:inline-block;width:255px;">
  <img src="img/neuron1.gif">
  <img src="img/neuron2.gif">
  <img src="img/neuron3.gif">
  <img src="img/neuron4.gif">
  <img src="img/neuron5.gif">
  <img src="img/neuron6.gif">
  <img src="img/neuron7.gif">
  <img src="img/neuron8.gif">
</div>
<div class="fragment" style="display:inline-block;width:165px;" id="decoders" data-fragment-index="1"></div>
<div class="fragment" style="display:inline-block;position:relative;top:-36px;" data-fragment-index="1">
  <img src="img/estimate.gif" width="250">
  <p class="fragment">$$\hat{X} = \sum_i \color{red}{d_i} a_i$$</p>
</div>



<div style="display:inline-block;width:255px;">
  <img src="img/neuron1.gif">
  <img src="img/neuron2.gif">
  <img src="img/neuron3.gif">
  <img src="img/neuron4.gif">
  <img src="img/neuron5.gif">
  <img src="img/neuron6.gif">
  <img src="img/neuron7.gif">
  <img src="img/neuron8.gif">
</div>
<div style="display:inline-block;width:165px;" id="decoders-2"></div>
<div style="display:inline-block;position:relative;top:-36px;">
  <img src="img/func.gif" width="250">
  $$\hat{X} = \sum_i \color{red}{d_i} a_i$$
</div>



<div id="omega-big"></div>
$$\omega_{ij} \propto e_i d_j$$



## 3. Learning

<div class="fragment">
  <div id="omega"></div>
  Random initial $\omega_{ij}$
</div>
<!-- <div class="fragment" style="padding-top:20px;"> -->
<!-- <ul> -->
<!--   <li>Supervised learning (MacNeil & Eliasmith, 2011)</li> -->
<!--   <li>Unsupervised learning</li> -->
<!-- </ul> -->
<!-- </div> -->



## Supervised learning

<div id="omega-error"></div>

Given error $\color{red}{E} = X - \hat{X}$,

$$\Delta \omega\_{ij} \propto  a\_i \, e\_j \cdot E$$



<div id="learncurve-pes"></div>



## Unsupervised learning

<div id="omega-unsupervised"></div>
<div class="fragment">
$$\Delta \omega_{ij} \propto a_i \; \underbrace{a_j (a_j - E[a_j])}$$
<div id="bcm_rule"></div>
</div>



<div id="stdp"></div>

----

<p style="text-align:right;"><small>Bi & Poo (2001)</small></p>



<div id="freq"></div>

----

<p style="text-align:right;"><small>Kirkwood, Rioult & Bear (1996)</small></p>



## Combined learning

$$\Delta \omega\_{ij} \propto a\_i [\color{red}{S}
  \underbrace{e\_j \cdot E}\_{\color{blue}{\text{ Supervised}}}
  + \color{red}{(1 - S)} \,
  \underbrace{a\_j (a\_j - \theta)}\_{\color{blue}{\text{ Unsupervised}}}]$$



<div id="learncurve"></div>



<div id="accuracy"></div>



## Sparsity

<div id="dense" style="display:inline;"></div>
<div id="sparse" style="display:inline;"></div>

0.18 <span style="padding-left: 240px;">0.51</span>



<div id="sparsity"></div>



Given an error signal, $E$, we can learn binding.

<div class="fragment">
**How are error signals generated?**
</div>



Thanks to CNRGlab members, NSERC, CRC, CFI and OIT.

----

<small>Simultaneous unsupervised and supervised learning of cognitive functions <br>
in biologically plausible spiking neural networks</small>

[bekolay.org/cogsci2013-pres](http://bekolay.org/cogsci2013-pres)

[<span data-icon="&#xe003;"></span> tbekolay/cogsci2013](https://github.com/tbekolay/cogsci2013)

[<span data-icon="&#xe003;"></span> tbekolay/cogsci2013-pres](https://github.com/tbekolay/cogsci2013-pres)



## Learning transmission


<div id="tr-learncurve"></div>



## Learning parameters

Neurons per dimension, learning rate, supervision ratio ($S$)

[<span data-icon="&#xe003;"></span> jaberg/hyperopt](https://github.com/jaberg/hyperopt)


<div id="params"></div>



## Machine learning


[![Deep Belief Nets](img/ml.png)](http://www4.comp.polyu.edu.hk/~csshzhong/Bilinear_Deep_Belief_Network.html)
