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
a large-scale model of the brain, however,
I saw it as a golden opportunity to
answer a small part of the nature vs nurture question.
</aside>



<video preload="auto">
  <source src="img/spaun.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<p class="fragment">
**Can the connections in Spaun be the result of learning?**
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
In order to make Spaun, we analytically solve
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

<aside class="notes">
In order to answer this question,
we first have to understand how Spaun is able to
perform these cognitive tasks.
</aside>



![4](img/4.png)![44](img/44.png)

<p class="fragment">
<strong>Vocabulary:</strong> NUMBER, COUNT, $\circ{0}$, $\circ{1}$, $\ldots$, $\circ{9}$
</p>



![4](img/4.png) $=$ NUMBER
<span class="fragment" data-fragment-index="1">$\circledast$</span>
$\circ{4}$
<span class="fragment" data-fragment-index="1">$+$</span>
COUNT
<span class="fragment" data-fragment-index="1">$\circledast$</span>
$\circ{1}$

<div class="fragment" data-fragment-index="2">
![44](img/44.png) $=$ NUMBER $\circledast$ $\circ{4}$ $+$ COUNT $\circledast$ $\circ{2}$
</div>



![4](img/4.png) $\Rightarrow$ ![44](img/44.png)

<div class="fragment">
![4](img/4.png) <span style="position:relative; top:-70px">$^{-1}$</span> $\circledast$ ![44](img/44.png)
</div>
<div class="fragment">
$\approx \left(\text{COUNT } \circledast \circ{1} \right)^{-1}
\circledast \left(\text{COUNT } \circledast \circ{2}\right)$
</div>
<p class="fragment">
<strong>Can we learn the binding operator $\circledast$?</strong>
</p>



## 2. In spiking neurons

<div class="fragment">
<strong>Neural Engineering Framework</strong> (Eliasmith & Anderson, 2003)
</div>



<!--SLIDE IS 960px !!-->
<img src="img/input.gif" width="480">

$X$<span class="fragment" data-fragment-index="1">, $e_i$</span>
<p class="fragment" data-fragment-index="2">$a_i = f(e_i \cdot X)$</p>



<img src="img/neuron1.gif">
$$\hat{X} = \sum_i \color{red}{d_i} a_i$$



$$\omega_{ij} \propto e_i d_j$$



## 3. Learning

<div class="fragment">
<ul>
  <li>Supervised learning (MacNeil & Eliasmith, 2011)</li>
  <li>Unsupervised learning</li>
</ul>
</div>



## Supervised learning

Given error $E = X - \hat{X}$,

$$\Delta \omega\_{ij} \propto  e\_j \cdot E a\_i$$



<div id="learncurve-pes"></div>



## Unsupervised learning

Pre -> post image
$$\Delta \omega_{ij} \propto a_i a_j (a_j - E[a_j])$$
<div id="bcm_rule"></div>



<div id="stdp"></div>

----

<small>Bi & Poo, 1997 maybe?</small>



<div id="freq"></div>

----

<small>Kirkwood et al., 1990-ish whatever</small>



## Combined learning

$$\Delta \omega_{ij} \propto a_i \left[\color{red}{S} e_j \cdot E + \color{red}{(1 - S)} a_j (a_j - \theta)\right]$$



<div id="learncurve"></div>



## Weight sparsity

Image



<div id="sparsity"></div>



Given an error signal, $E$, a connection can be learned.

<div class="fragment">
**How are error signals generated?**
</div>



Thanks to CNRGlab members, NSERC, CRC, CFI and OIT.

----

<small>Simultaneous unsupervised and supervised learning of cognitive functions <br>
in biologically plausible spiking neural networks</small>

* [bekolay.org/cogsci2013-pres](http://bekolay.org/cogsci2013-pres)
* [<span data-icon="&#xe003;"></span> tbekolay/cogsci2013](https://github.com/tbekolay/cogsci2013)
* [<span data-icon="&#xe003;"></span> tbekolay/cogsci2013-pres](https://github.com/tbekolay/cogsci2013-pres)



## Machine learning

[![Deep Belief Nets](img/ml.png)](http://www4.comp.polyu.edu.hk/~csshzhong/Bilinear_Deep_Belief_Network.html)
