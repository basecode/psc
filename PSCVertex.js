/**
 * @author basecode
 */
(function selfInvokingPSCVertex(win, T) {

	var max = function(a, b) {
		return a > b ? a : b;
	}
	var min = function(a, b) {
		return a < b ? a : b;
	}
	var vertex = win.PSCVertex = function(config) {
		this.init(config);
		
		//disable particle
		this.hide();
	}
	var proto = vertex.prototype;
	
	proto.init = function(config) {
	
		var configStartColor = config.startColor;
		var configStartColorVariance = config.startColorVariance;
		var configEndColor = config.endColor;
		var configEndColorVariance = config.endColorVariance;
		
		/** 
		 * timeToLive
		 * prevent division by 0
		 */
     var sTimeToLive = max( 0, config.lifespan + config.lifespanVariance * Math.random() );
     this.msTimeToLive = 1000 * sTimeToLive;
	   
		/** 
		 * position
		 */
		this.position = this.startPosition = new T.Vector2(
			config.position.x + config.positionVariance.x * Math.random(),
			config.position.y + config.positionVariance.y * Math.random()
		);
		
		/**
		 * angle 
		 * degrees to radians: PI / 180
		 */ 
		var newAngle = (360 - config.angle + config.angleVariance * Math.random()) * 0.01745329252;
		//var vector = new T.Vector2(Math.cos(newAngle), Math.sin(newAngle));
		var vectorSpeed = config.speed + config.speedVariance * Math.random();
		
		/** 
		 * direction
		 */
		this.direction = new T.Vector2(Math.cos(newAngle), -Math.sin(newAngle));
		this.direction.multiplyScalar(vectorSpeed);
		
		/**
		 * color 
		 */
		// start color
		var startColor = this.startColor = new THREE.Color().setRGB(
			min(1, max(0, configStartColor.red + configStartColorVariance.red * Math.random())), 
			min(1, max(0, configStartColor.green + configStartColorVariance.green * Math.random())), 
			min(1, max(0, configStartColor.blue + configStartColorVariance.blue * Math.random()))
		);
		var startOpacity = this.startOpacity = min(1, max(0, configStartColor.alpha + configStartColorVariance.alpha * Math.random()));
		
		// end color
		var endColor = this.endColor = new THREE.Color().setRGB(
			min(1, max(0, configEndColor.red + configEndColorVariance.red * Math.random())), 
			min(1, max(0, configEndColor.green + configEndColorVariance.green * Math.random())), 
			min(1, max(0, configEndColor.blue + configEndColorVariance.blue * Math.random()))
		);
		var endOpacity = this.endOpacity = min(1, max(0, configEndColor.alpha + configEndColorVariance.alpha * Math.random()));
		
		// delta color
		this.deltaColor = new THREE.Color().setRGB(
			(endColor.r - startColor.r) / sTimeToLive,
			(endColor.g - startColor.g) / sTimeToLive,
		  (endColor.b - startColor.b) / sTimeToLive
		);
		this.deltaOpacity = (startOpacity - endOpacity) / sTimeToLive;

		this.color = startColor;
		this.opacity = startOpacity;
		
		/** 
		 * size 
		 */
		var startSize = max(0, config.startSize + config.startSizeVariance * Math.random());
		var endSize   = max(0, config.endSize + config.endSizeVariance * Math.random());
		
		this.size = startSize;
		this.deltaSize = (endSize - startSize) / sTimeToLive;
		
		/**
		 * gravity
		 */
		this.gravity = config.gravity;

		/**
		 * radial accel
		 */
		this.radialAcceleration = config.radialAcceleration + config.radialAccelerationVariance * Math.random();
		
		/**
		 * tangential accel
		 */
		this.tangentialAcceleration = config.tangentialAcceleration + config.tangentialAccelerationVariance * Math.random();

		return this;
	};
	
	proto.hide = function() {
		this.position = {x:-100000, y:-100000};
	}
	
	proto.isHidden = function() {
		return !(this.position instanceof T.Vector2);
	}
	proto.inAction = function() {
		return (this.position instanceof T.Vector2);
	}
	
	proto.update = function(delta) {

		/**/
		var _gravity, diff;
		var msDelta = delta;
		var sDelta  = delta/1000;
		var color = this.color;
		var deltaColor = this.deltaColor;
		var pos = this.position;
		var startPos = this.startPosition;
		var direction = this.direction;
		var size = this.size;

		this.msTimeToLive -= msDelta;

		// time to say good bye
		if (this.msTimeToLive <= 0) {
			this.hide();
			return;
		}

		var radial = new T.Vector2();
		if(pos.x || pos.y) {
			radial = pos.clone();
			radial.multiplyScalar(1.0 / pos.length());
		}

		var tangential = radial.clone();
		radial.multiplyScalar(this.radialAcceleration);

		// tangential acceleration
		var newy = tangential.x;
		tangential.x = -tangential.y;
		tangential.y = newy;
		tangential.multiplyScalar(this.tangentialAcceleration);

		// (gravity + radial + tangential) * sDelta
		var tmp = radial.clone();
		tmp.addSelf(tangential).addSelf(this.gravity);
		tmp.multiplyScalar(sDelta);
		
		this.direction.addSelf(tmp);
		tmp = this.direction.clone();
		tmp.multiplyScalar(sDelta);

		this.position.addSelf(tmp);

		// color
		color.r += (deltaColor.r * sDelta);
		color.g += (deltaColor.g * sDelta);
		color.b += (deltaColor.b * sDelta);
		this.opacity += (this.deltaOpacity * sDelta);
		
		// size
		size += (this.deltaSize * sDelta);
		this.size = max( 0, size);
		
		// angle
		//this.rotation += (this.deltaRotation * sDelta);

		return this;
	}

})(window, THREE);