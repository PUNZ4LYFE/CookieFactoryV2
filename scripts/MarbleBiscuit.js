var MarbleBiscuit = (
	function () {
		function MarbleBiscuit() {
			this.type = 0;
            this.div;
            this.imagen = "'url(../imgs/chocolateBiscuit.png);'";
        }
        
        //Inheritance
		MarbleBiscuit.prototype = Object.create(Cookie.prototype);
		MarbleBiscuit.prototype.constructor = Cookie;

		MarbleBiscuit.prototype.SetPositioAndStyle = function () {
			var x = Math.floor(Math.random() * (window.innerWidth - 80));
			x += 20;
			var y = Math.floor(Math.random() * (window.innerHeight - 150));
			y += 100;
			this.div.style.left = x + 'px';
			this.div.style.top = y + 'px';
            this.div.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
            console.log('yaaassss');
		}

		return MarbleBiscuit;
	}


)();
