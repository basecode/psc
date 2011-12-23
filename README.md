# PSC – Particle System Configurator

A first attempt to port my already existing [Canvas2D Version](http://demojs.org/2011/releases/Freestyle/online/basecode_-_Particles.js/) to WebGL.

[http://basecode.github.com/psc/](http://basecode.github.com/psc/)

**Why the hell am I using a WebGL Renderer, even so this Library is just about 2D geometry operations / real time drawing?**

Well, I expected a huge performance-boost and it turns out the new renderer increased the amount of particles by a factor of 15 - 24. That means instead of 500 (Canvas2D, 40FPS), I am now able to draw 7500-12000 particles with a frame rate of 60FPS.  

**But why am I using Three.js and not the pure WebGL API?**

Good question. It seemed to be easier. At the end I guess it was the right decision.

**What's next?**

Dropping Three.js and writing a pure WebGL port.


### Show me your Configuration!

When you think your configuration is cool then just save it by creating a permalink and send it to me or to your friends.

This is how a permalink looks like:

[http://basecode.github.com/psc/#{"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":3,"lifespanVariance":"","startSize":10,"startSizeVariance":32,"endSize":10,"endSizeVariance":10,"position":{"x":-244,"y":-21},"positionVariance":{"x":400,"y":50},"speed":21,"speedVariance":10,"startColor":{"red":0.17,"green":0.28,"blue":0.83,"alpha":0.33},"startColorVariance":{"red":0.69,"green":0.02,"blue":0.18,"alpha":0.23},"endColor":{"red":0.78,"green":0.16,"blue":0.16,"alpha":0.5},"endColorVariance":{"red":0.19,"green":0.07,"blue":0.04,"alpha":0.68},"radialAcceleration":"","radialAccelerationVariance":30,"tangentialAcceleration":"","tangentialAccelerationVariance":20,"angle":"","angleVariance":360,"gravity":{"x":0,"y":0},"intendedParticles":3000}](http://basecode.github.com/psc/#{"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":3,"lifespanVariance":"","startSize":10,"startSizeVariance":32,"endSize":10,"endSizeVariance":10,"position":{"x":-244,"y":-21},"positionVariance":{"x":400,"y":50},"speed":21,"speedVariance":10,"startColor":{"red":0.17,"green":0.28,"blue":0.83,"alpha":0.33},"startColorVariance":{"red":0.69,"green":0.02,"blue":0.18,"alpha":0.23},"endColor":{"red":0.78,"green":0.16,"blue":0.16,"alpha":0.5},"endColorVariance":{"red":0.19,"green":0.07,"blue":0.04,"alpha":0.68},"radialAcceleration":"","radialAccelerationVariance":30,"tangentialAcceleration":"","tangentialAccelerationVariance":20,"angle":"","angleVariance":360,"gravity":{"x":0,"y":0},"intendedParticles":3000})
