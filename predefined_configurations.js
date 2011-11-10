// configurator
var PREDEFINED_CONFIGURATIONS = {

	'snow' : {"texture":"snow","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":2.039,"lifespanVariance":2.171,"startSize":5,"startSizeVariance":10,"endSize":5,"endSizeVariance":"","position":{"x":-433,"y":302},"positionVariance":{"x":800,"y":10},"speed":"","speedVariance":506.58,"startColor":{"red":0.9,"green":0.9,"blue":0.9,"alpha":1},"startColorVariance":{"red":0,"green":0,"blue":0,"alpha":0.19},"endColor":{"red":0,"green":0,"blue":0,"alpha":0},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":0.24},"radialAcceleration":-30,"radialAccelerationVariance":"","tangentialAcceleration":"","tangentialAccelerationVariance":"","angle":239,"angleVariance":27,"gravity":{"x":0,"y":0},"intendedParticles":1200},
	
	'blueGalaxy' : {"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":4,"lifespanVariance":1,"startSize":15,"startSizeVariance":10,"endSize":15,"endSizeVariance":0,"position":{"x":0,"y":0},"positionVariance":{"x":0,"y":0},"speed":59,"speedVariance":10,"startColor":{"red":0.12,"green":0.25,"blue":0.76,"alpha":1},"startColorVariance":{"red":0,"green":0,"blue":0,"alpha":0},"endColor":{"red":0,"green":0,"blue":0,"alpha":1},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":0},"radialAcceleration":-20,"radialAccelerationVariance":0,"tangentialAcceleration":15,"tangentialAccelerationVariance":0,"angle":90,"angleVariance":360,"gravity":{"x":0,"y":0},"intendedParticles":8000},
	
	'burner' : {"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":2,"lifespanVariance":"","startSize":44,"startSizeVariance":"","endSize":"","endSizeVariance":"","position":{"x":-310,"y":-300},"positionVariance":{"x":1000,"y":0},"speed":50,"speedVariance":50,"startColor":{"red":1,"green":0.18,"blue":0,"alpha":0.62},"startColorVariance":{"red":0,"green":0.3,"blue":0,"alpha":0},"endColor":{"red":1,"green":0.18,"blue":0,"alpha":0.5},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":0},"radialAcceleration":"","radialAccelerationVariance":"","tangentialAcceleration":"","tangentialAccelerationVariance":"","angle":90,"angleVariance":10,"gravity":{"x":0,"y":80},"intendedParticles":10000},
	
	'uxebu' : {"texture":"uxebu-logo","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":3,"lifespanVariance":0,"startSize":80,"startSizeVariance":0,"endSize":0,"endSizeVariance":0,"position":{"x":0,"y":0},"positionVariance":{"x":40,"y":0},"speed":50,"speedVariance":50,"startColor":{"red":1,"green":0.18,"blue":0,"alpha":0.62},"startColorVariance":{"red":0,"green":0.3,"blue":0,"alpha":0},"endColor":{"red":0,"green":0,"blue":0,"alpha":0},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":0},"radialAcceleration":100,"radialAccelerationVariance":100,"tangentialAcceleration":100,"tangentialAccelerationVariance":100,"angle":270,"angleVariance":90,"gravity":{"x":0,"y":-100},"intendedParticles":30},
	
	'glitterParty' : {"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":3,"lifespanVariance":"","startSize":10,"startSizeVariance":32,"endSize":10,"endSizeVariance":10,"position":{"x":-244,"y":-21},"positionVariance":{"x":400,"y":50},"speed":21,"speedVariance":10,"startColor":{"red":0.17,"green":0.28,"blue":0.83,"alpha":0.33},"startColorVariance":{"red":0.69,"green":0.02,"blue":0.18,"alpha":0.23},"endColor":{"red":0.78,"green":0.16,"blue":0.16,"alpha":0.5},"endColorVariance":{"red":0.19,"green":0.07,"blue":0.04,"alpha":0.68},"radialAcceleration":"","radialAccelerationVariance":30,"tangentialAcceleration":"","tangentialAccelerationVariance":20,"angle":"","angleVariance":360,"gravity":{"x":0,"y":0},"intendedParticles":3000},
	
	'comet' : {"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":1,"lifespanVariance":2.171,"startSize":20,"startSizeVariance":"","endSize":10,"endSizeVariance":"","position":{"x":-33,"y":-47},"positionVariance":{"x":10,"y":10},"speed":"","speedVariance":20,"startColor":{"red":0.9,"green":0.2,"blue":0.1,"alpha":1},"startColorVariance":{"red":0,"green":0,"blue":0,"alpha":1},"endColor":{"red":0,"green":0.2,"blue":0.2,"alpha":0.5},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":1},"radialAcceleration":-100,"radialAccelerationVariance":200,"tangentialAcceleration":-100,"tangentialAccelerationVariance":200,"angle":90,"angleVariance":360,"gravity":{"x":-200,"y":400},"intendedParticles":2250},
	
	'colorfulSnow' : {"texture":"snow","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":2,"lifespanVariance":1.513,"startSize":34,"startSizeVariance":24,"endSize":34,"endSizeVariance":"","position":{"x":-199,"y":9},"positionVariance":{"x":400,"y":0},"speed":59,"speedVariance":98.68,"startColor":{"red":0.9,"green":0.2,"blue":0.1,"alpha":1},"startColorVariance":{"red":0.5,"green":0.5,"blue":0.5,"alpha":1},"endColor":{"red":0,"green":0.2,"blue":0.2,"alpha":0.5},"endColorVariance":{"red":0.3,"green":0.3,"blue":0.4,"alpha":1},"radialAcceleration":"","radialAccelerationVariance":"","tangentialAcceleration":"","tangentialAccelerationVariance":"","angle":284,"angleVariance":185,"gravity":{"x":0,"y":0},"intendedParticles":1000},
	
	'waterFountain' : {"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":1.908,"lifespanVariance":0.855,"startSize":15,"startSizeVariance":5,"endSize":0,"endSizeVariance":0,"position":{"x":0,"y":0},"positionVariance":{"x":7,"y":7},"speed":604,"speedVariance":30,"startColor":{"red":0,"green":0,"blue":1,"alpha":1},"startColorVariance":{"red":0,"green":0,"blue":1,"alpha":1},"endColor":{"red":0.9,"green":0.9,"blue":0.9,"alpha":0},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":0},"radialAcceleration":0,"radialAccelerationVariance":0,"tangentialAcceleration":0,"tangentialAccelerationVariance":0,"angle":90,"angleVariance":15,"gravity":{"x":0,"y":-750},"intendedParticles":300},
	
	'somethingBlue' : {"texture":"fire","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":1,"lifespanVariance":0.5,"startSize":15,"startSizeVariance":10,"endSize":4,"endSizeVariance":10,"position":{"x":0,"y":0},"positionVariance":{"x":20,"y":15},"speed":300,"speedVariance":50,"startColor":{"red":0,"green":0,"blue":1,"alpha":1},"startColorVariance":{"red":0,"green":0,"blue":1,"alpha":1},"endColor":{"red":0.9,"green":0.9,"blue":0.9,"alpha":0},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":0},"radialAcceleration":0,"radialAccelerationVariance":0,"tangentialAcceleration":0,"tangentialAccelerationVariance":0,"angle":90,"angleVariance":8,"gravity":{"x":0,"y":0},"intendedParticles":300},
	
	'smoke' : {"texture":"smoke","emitterMode":"GRAVITY","blending":"AdditiveBlending","lifespan":5,"lifespanVariance":0.5,"startSize":20,"startSizeVariance":10,"endSize":14,"endSizeVariance":10,"position":{"x":-90,"y":-104},"positionVariance":{"x":10,"y":30},"speed":"","speedVariance":"","startColor":{"red":0.1,"green":0.1,"blue":0.1,"alpha":0.2},"startColorVariance":{"red":0.01,"green":0.01,"blue":0.01,"alpha":0.2},"endColor":{"red":0,"green":0,"blue":0,"alpha":0},"endColorVariance":{"red":0,"green":0,"blue":0,"alpha":0},"radialAcceleration":"","radialAccelerationVariance":"","tangentialAcceleration":-10,"tangentialAccelerationVariance":20,"angle":90,"angleVariance":360,"gravity":{"x":5,"y":50},"intendedParticles":3000}

};