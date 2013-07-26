<strong>Simultaneous unsupervised and supervised learning <br> of cognitive functions in biologically plausible <br> spiking neural networks</strong>

![CogSci 2013](img/cogscilogo.png)

<small>Trevor Bekolay, Carter Kolbeck, Chris Eliasmith <br>
*Centre for Theoretical Neuroscience, University of Waterloo* <br>
[bekolay.org/cogsci2013-pres](http://bekolay.org/cogsci2013-pres)</small>



## Learning <br> cognitive functions

<p class="fragment">in biologically plausible spiking neural networks</p>
<p class="fragment">with simultaneous unsupervised and supervised learning</p>



## 1. Cognitive functions



### Represent symbols with vectors

![A handwritten 5](img/hand5-1.png) $\Rightarrow \left[0.42, 0.12, 0.35, ...\right]$



## Why?

![A handwritten 5](img/hand5-1.png) $\Rightarrow \left[0.42, 0.12, 0.35, ...\right]$

![Another handwritten 5](img/hand5-2.png) $\Rightarrow \left[0.38, 0.14, 0.30, ...\right]$



![2D projection of digits](img/alldigits.png)



![A handwritten 5](img/hand5-1.png) $\Rightarrow \left[0.42, 0.12, 0.35, ...\right]$

![Sound wave](img/sound.png) $\Rightarrow \left[0.12, 0.75, 0.25, ...\right]$



## Transmission

$f(X) = X$



## Binding

$$f(X, Y) = Z$$

<div class="fragment">
\begin{aligned}
  f(Z, X') &\approx Y \\\\
  f(Z, Y') &\approx X
\end{aligned}
</div>



## 2. In spiking neurons



### Encode vectors in neural populations

$\left[0.42, 0.12, 0.35, ...\right] \Rightarrow$ ![Spike train](img/spikes.gif)

<div class="fragment">
$a_i = f(\color{red}{e_i} \cdot X)$
</div>



### Decode vectors from neural populations

![Spike train](img/spikes.gif) $\Rightarrow \left[0.41, 0.12, 0.36, ...\right]$

<div class="fragment">
$$\hat{X} = \sum_i \color{red}{d_i} a_i$$
</div>



![Spaun](img/spaun.gif)
Spaun: transmission & binding



## 3. Supervised and unsupervised learning



## Supervised learning

Given error $E$,

\begin{aligned}
  \Delta d\_i &\propto E a\_i \\\\
  \Delta \omega\_{ij} &\propto  e\_j \cdot E a\_i
\end{aligned}



<div id="learncurve-pes"></div>

Classifying digits: 96.31% accuracy (Spaun: 94% accuracy)



## Unsupervised learning

$$\Delta \omega_{ij} \propto a_i a_j (a_j - \theta)$$
<div id="bcm_rule"></div>



<div id="stdp"></div>



<div id="freq"></div>



## Machine learning

[![Deep Belief Nets](img/ml.png)](http://www4.comp.polyu.edu.hk/~csshzhong/Bilinear_Deep_Belief_Network.html)



## Combined learning

$$\Delta \omega_{ij} \propto a_i \left[\color{red}{S} e_j \cdot E + \color{red}{(1 - S)} a_j (a_j - \theta)\right]$$



<div id="learncurve"></div>

Classifying digits: 98.47% accuracy (Supervised: 96.31%)



<div id="sparsity"></div>



## Learning parameters

<iframe width="800" height="280" src="//jaberg.github.io/hyperopt/" frameborder="0"></iframe>

[<span data-icon="&#xe003;"></span> jaberg/hyperopt](https://github.com/jaberg/hyperopt)



<div id="params"></div>



Thanks to Carter Kolbeck, Chris Eliasmith, <br>
James Bergstra, and NSERC.

----

<small>Simultaneous unsupervised and supervised learning of cognitive functions <br>in biologically plausible spiking neural networks</small>

[<span data-icon="&#xe003;"></span> Paper & code](https://github.com/tbekolay/cogsci2013)
| [bekolay.org/cogsci2013-pres](http://bekolay.org/cogsci2013-pres)
| [<span data-icon="&#xe003;"></span> Source](https://github.com/tbekolay/cogsci2013-pres)
