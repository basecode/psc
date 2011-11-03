/**
 * @author basecode
 */

(function selfInvokingPSCParticleSystem(win, T) {

	var ps = win.PSCParticleSystem = function ( geometry, materials, config) {
	
		T.ParticleSystem.call(this, geometry, materials);

		// psc
		this.config = config;

		// config.lifespan must be > 1
		if (config.lifespan < 1) {
			throw Error("config.lifespan must be > 1");
		}

		// every x milliseconds (ms) a particle should be emitted
		this.msEmissionInterval = ((config.lifespan | 0) / config.intendedParticles) * 1000;

		// last time the emitter-loop was running
		this.lastTimestamp = +new Date;

		// emitter-loop should stop
		this.stop = false;

		// sum of deltas
		this.msElapsedTimeInTotal = 0;

        // sum of deltas in a certain timeframe
        this.msElapsedTimeSession = 0;

		//makes texture's black background transparent
		this.sortParticles = true;
	};
	
	var proto = ps.prototype = new T.ParticleSystem();
	proto.constructor = PSCParticleSystem;
	
	proto.refresh = function(currentTimestamp) {
		var config = this.config;
		var delta = currentTimestamp - this.lastTimestamp;
        var particles = this.geometry;
        var emissions = 0;

		this.msElapsedTimeInTotal += delta;
		this.msElapsedTimeSession += delta;
		this.lastTimestamp = currentTimestamp;

		/*console.log("\nmsEmissionInterval: " + this.msEmissionInterval,
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

        for(var i = 0, len = config.intendedParticles, particleColor, geometryColor; i < len; i++) {
            // an existing particle instance
            var particle = particles.vertices[i];
            var inAction = particle.inAction();
            // emit
            if (emissions > 0 && !inAction) {
                //console.log("+++ emit particle");
                particle.init(config);
                inAction = true;
                emissions--;
            }
            if (inAction) {
                // update particle (position, color, size,…)
                //console.log("*** update particle");
                particle.update(delta);
                particleColor = particle.color;
                geometryColor = particles.colors[i];
                geometryColor.setRGB(particleColor.r, particleColor.g, particleColor.b);
            }
        }
        /*
            // emit particles
            while(emissions--) {
                // stop emitting when we reach the max amount of particles
                if (this.emittedParticles > config.intendedParticles) {
					break;
                }
                // an existing particle instance
                var particle = particles.vertices[emissions];

                // when the particle is already in action we skip
                if (particle.inAction()) {
                    //emissions += 1;
                    continue;
                }
                // define particle properties (& reset particle.msTimeToLive)
                particle.init(config, this);

                console.log("+++ define new particle");

                this.emittedParticles += 1;
            }
            
        }

        // update particles (position, color, …)
        for(var i = 0, len = this.emittedParticles, particle, particleColor, geometryColor; i < len; i++) {
            particle = particles.vertices[i];
            // if the particle is not in action we skip
            if (particle.isHidden()) {
				this.emittedParticles--;
                continue;
            }
            console.log("*** update particle");
            //particleColor = particle.color;
            //geometryColor = particles.colors[counter];
			particle.update(delta);
            particle.position.addSelf({x:2,y:0});
			//geometryColor.setRGB( particleColor.r, particleColor.g, particleColor.b );
        }
        */
	}
	

})(window, THREE);