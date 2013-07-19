<strong>Simultaneous unsupervised and supervised learning <br> of cognitive functions in biologically plausible <br> spiking neural networks</strong>

![CogSci 2013](img/cogscilogo.png)

<small>Trevor Bekolay <br>
University of Waterloo <br>
[bekolay.org/cogsci2013-pres](http://bekolay.org/cogsci2013-pres)</small>



## Learning <br> cognitive functions

<p class="fragment">in biologically plausible spiking neural networks</p>
<p class="fragment">with simultaneous unsupervised and supervised learning</p>



## Cognitive functions



### Represent symbols with vectors

<div id="#spa-1"></div>
handwritten 4 => vector of numbers



## Why?

<div id="#spa-2"></div>
another handwritten 4 => vector of numbers

<div class="fragment" id="#spa-3"></div>
sound wave => vector of numbers



<iframe width="800" height="600" src="//www.youtube.com/embed/mP7DX6x9PX8?rel=0" frameborder="0" allowfullscreen></iframe>

Transmission



<iframe width="800" height="600" src="//www.youtube.com/embed/FEEEoodC6Xc?rel=0" frameborder="0" allowfullscreen></iframe>

Binding



## In spiking neurons



### Encode vectors in neural populations

<div id="#nef-1"></div>
vector of numbers => spike train



## How? Representation

<div id="#nef-2"></div>
vector => spike train => decoded vector

<div class="fragment">
\begin{aligned}
  a_i &= f(e_i \cdot x) \\\\
  \hat{x} &= \sum_i d_i a_i
\end{aligned}
</div>



## How? Transformation

<div id="#nef-3"></div>
vector => spike train => spike train => vector

<div class="fragment">
$$\omega_{ij} = \alpha_j e_j d_i$$
</div>



## Why?

<div id="#nef-4"></div>
spike train => vector => handwritten 4



# Learning

Given random $\omega$,
$\Delta \omega_{ij} = ?$



## Supervised learning

Given error $E$,

\begin{aligned}
  \Delta d\_i &= \kappa E a\_i \\\\
  \Delta \omega\_{ij} &= \kappa \alpha\_j e\_j \cdot E a\_i
\end{aligned}


<div id="#learncurve-pes"></div>
learn curve for transmission and binding

Classifying digits: 96.31% accuracy (Spaun: 94% accuracy)



## Unsupervised learning

What happens to $\omega_{ij}$ with no error $E$?

$$\Delta \omega_{ij} \propto a_i a_j (a_j - \theta)$$



<div id="#stdp"></div>
STDP curve

<div id="#freq"></div>
Freq dependence curve



## Supervised + unsupervised

<div id="#ml"></div>
ML layered approach, showing non-overlapping stages of UL + SL

Classifying digits: 99+% accuracy



## Combined learning

$$\Delta \omega_{ij} = \kappa \alpha_j a_i [S e_j \cdot E + (1 - S) a_j (a_j - \theta)]$$



## Sparsity vs error

<div id="#sparsity"></div>
sparsity + error plot




## Performance

<div id="#learncurve"></div>
learn plots with both lines

Classifying digits: 98.47% accuracy (Supervised: 96.31%)



## Learning parameters

<iframe width="800" height="280" src="//jaberg.github.io/hyperopt/" frameborder="0"></iframe>
[TODOicon jaberg/hyperopt](https://github.com/jaberg/hyperopt)



<div id="#params"></div>
parameter plot



Thanks to...

[github icon tbekolay/cogsci2013](https://github.com/tbekolay/cogsci2013)
• [github icon tbekolay/cogsci2013-pres](https://github.com/tbekolay/cogsci2013-pres)
