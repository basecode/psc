/**
 * @author basecode
 */

(function selfInvokingPSCParticleSystem(win, T) {

	var ps = win.PSCParticleSystem = function (geometry, materials, config) {
	
		T.ParticleSystem.call(this, geometry, materials);

		// psc
		this.config = config;

		// config.lifespan must be > 1
		if (config.lifespan < 1) {
			throw Error("config.lifespan must be > 1");
		}

		// every x milliseconds a particle should be emitted
		this.msEmissionInterval = ((config.lifespan | 0) / config.intendedParticles) * 1000;

		// last time the emitter-loop was running
		this.lastTimestamp = +new Date;

		// emitter should stop
		this._stop = false;

		// sum of deltas
		this.msElapsedTimeInTotal = 0;

		// sum of deltas in a certain timeframe
		this.msElapsedTimeSession = 0;

		//this.dynamic = true;
		//makes texture's black background transparent
		this.sortParticles = true;

		var vertices = geometry.vertices;
		var size = materials.attributes.size.value;
		var color = materials.attributes.ca.value;

		for(var i = 0, len = vertices.length; i < len; i++) {
			//size[i] = 0;
			color[i] = new THREE.Color( 0xffffff );
		}

	};
	
	var proto = ps.prototype = new T.ParticleSystem();
	proto.constructor = PSCParticleSystem;
	
	proto.refresh = function(currentTimestamp) {
		var config = this.config;
		var delta = currentTimestamp - this.lastTimestamp;
		var particles = this.geometry;
		var size = this.materials[0].attributes.size.value;
		var color = this.materials[0].attributes.ca.value;
		var stop = this._stop;
		var emissions = 0;

		this.msElapsedTimeInTotal += delta;
		this.msElapsedTimeSession += delta;
		this.lastTimestamp = currentTimestamp;

		/*console.log(
			"\nmsEmissionInterval: " + this.msEmissionInterval,
			"\nmsElapsedTimeInTotal: " + this.msElapsedTimeInTotal,
			"\nmsElapsedTimeSession: " + this.msElapsedTimeSession,
			"\nemittedParticles: " + this.emittedParticles,
			"\nintendedParticles: " + config.intendedParticles,
			"\nemissions: " + (this.msElapsedTimeSession / this.msEmissionInterval | 0),
			"\nlifespan: " + config.lifespan,
			"\nthis.msEmissionInterval - this.msElapsedTimeSession: " + (this.msEmissionInterval - this.msElapsedTimeSession));
		*/

		// check if this requestAnimFrame matches the emission interval (= emit yes/no)
		if (this.msEmissionInterval - this.msElapsedTimeSession <= 0) {
				// how many particles should be emitted in this session
				emissions = this.msElapsedTimeSession / this.msEmissionInterval | 0;
				// reset elapsed time session
				this.msElapsedTimeSession = 0;
		}

		for(var i = 0, len = config.intendedParticles, particleColor; i < len; i++) {
			// an existing particle instance
			var particle = particles.vertices[i];
			var inAction = particle.inAction();
			// emit
			if (emissions > 0 && !inAction && !stop) {
				//console.log("+++ emit particle");
				particle.init(config);
				inAction = true;
				emissions--;
			}
			if (inAction) {
				// update particle (position, color, size,…)
				particle.update(delta);
				size[i] = particle.size;
				particleColor = particle.color;
				color[i].setRGB(particleColor.r, particleColor.g, particleColor.b);
			}
		}

		//this.materials[0].attributes.size.needsUpdate = true;
		// If you want to do dynamic updates of standard attributes in runtime, 
		// you need to set geometry.__dirtyXXX flags to ask for buffer update.
		//particles.__dirtyVertices = true;
		//particles.__dirtyColors = true;
	}

	proto.stop = function() {
		this._stop = true;
		var particles = this.geometry;
		for (var i = 0, len = particles.vertices.length; i < len; i++) {
			particles.vertices[i].hide();
		}
		return true;
	}

	proto.liveUpdateConfig = function(config) {
		this.config = config;
	}

})(window, THREE);