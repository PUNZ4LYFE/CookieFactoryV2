var BiscuitFactory = (
	function () {
		function BiscuitFactory() {
			
			//this.div = document.createElement('div');
			//document.body.appendChild(this.div);
			//this.div.className = 'box';

			//this.SetPositioAndStyle();
		}

		//Inheritance
		BiscuitFactory.prototype = Object.create(CookieFactory.prototype);
		BiscuitFactory.prototype.constructor = CookieFactory;

		BiscuitFactory.prototype.getChocolateCookie = function () {
			var cookie = new ChocolateBiscuit();
		}

		BiscuitFactory.prototype.getVanillaCookie = function () {
			var cookie = new VanillaBiscuit();
		}

		BiscuitFactory.prototype.getMarbleCookie = function () {
			var cookie = new MarbleBiscuit();
		}


		return BiscuitFactory;
	}
)();
