var GingerbreadFactory = (
	function () {
		function GingerbreadFactory() {
			
			//this.div = document.createElement('div');
			//document.body.appendChild(this.div);
			//this.div.className = 'box';

			//this.SetPositioAndStyle();
		}

		//Inheritance
		GingerbreadFactory.prototype = Object.create(CookieFactory.prototype);
		GingerbreadFactory.prototype.constructor = CookieFactory;

		GingerbreadFactory.prototype.getChocolateCookie = function () {
			var cookie = new ChocolateGingerbread();
		}

		GingerbreadFactory.prototype.getVanillaCookie = function () {
			var cookie = new VanillaGingerbread();
		}

		GingerbreadFactory.prototype.getMarbleCookie = function () {
			var cookie = new MarbleGingerbread();
		}


		return GingerbreadFactory;
	}
)();
